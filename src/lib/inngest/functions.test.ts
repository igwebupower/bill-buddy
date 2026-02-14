import { describe, it, expect, vi, beforeEach } from "vitest";
import { prisma } from "@/lib/db";

vi.mock("./client", () => ({
  inngest: {
    createFunction: vi.fn((_config, _trigger, handler) => handler),
  },
}));

vi.mock("@/lib/parliament/client", () => ({
  getBills: vi.fn(),
  getBillById: vi.fn(),
  getBillStages: vi.fn(),
  getBillPublications: vi.fn(),
}));

vi.mock("@/lib/ai/summarize", () => ({
  generateBillSummary: vi.fn(),
}));

import { getBills, getBillById, getBillStages } from "@/lib/parliament/client";
import { generateBillSummary } from "@/lib/ai/summarize";

// Helper: create a step mock that immediately executes the function
function createStepMock() {
  return {
    run: vi.fn((_name: string, fn: () => Promise<unknown>) => fn()),
  };
}

describe("syncBills function", () => {
  let syncBillsHandler: (args: { step: ReturnType<typeof createStepMock> }) => Promise<unknown>;

  beforeEach(async () => {
    vi.resetAllMocks();

    // Re-import to get fresh handler
    vi.resetModules();

    // Re-setup mocks after module reset
    vi.doMock("./client", () => ({
      inngest: {
        createFunction: vi.fn((_config: unknown, _trigger: unknown, handler: unknown) => handler),
      },
    }));
    vi.doMock("@/lib/db", () => ({
      prisma: {
        bill: {
          findMany: vi.fn(),
          findUnique: vi.fn(),
          upsert: vi.fn(),
        },
        billStage: { upsert: vi.fn() },
        billSponsor: { upsert: vi.fn() },
        billSummary: { create: vi.fn() },
        syncLog: {
          create: vi.fn(),
          update: vi.fn(),
        },
        notification: { create: vi.fn() },
        trackedBill: { findMany: vi.fn() },
      },
    }));
    vi.doMock("@/lib/parliament/client", () => ({
      getBills: vi.fn(),
      getBillById: vi.fn(),
      getBillStages: vi.fn(),
      getBillPublications: vi.fn(),
    }));
    vi.doMock("@/lib/ai/summarize", () => ({
      generateBillSummary: vi.fn(),
    }));

    const mod = await import("./functions");
    syncBillsHandler = mod.syncBills as unknown as typeof syncBillsHandler;
  });

  it("creates a sync log at the start", async () => {
    const { prisma: db } = await import("@/lib/db");
    const { getBills: getBillsFn } = await import("@/lib/parliament/client");

    vi.mocked(db.syncLog.create).mockResolvedValue({ id: "log-1" } as never);
    vi.mocked(getBillsFn).mockResolvedValue({
      items: [],
      totalResults: 0,
    } as never);
    vi.mocked(db.syncLog.update).mockResolvedValue({} as never);

    const step = createStepMock();
    await syncBillsHandler({ step });

    expect(db.syncLog.create).toHaveBeenCalledWith({
      data: { jobName: "sync-bills", status: "started" },
    });
  });

  it("paginates through all available pages", async () => {
    const { prisma: db } = await import("@/lib/db");
    const { getBills: getBillsFn } = await import("@/lib/parliament/client");

    vi.mocked(db.syncLog.create).mockResolvedValue({ id: "log-1" } as never);
    vi.mocked(db.syncLog.update).mockResolvedValue({} as never);
    vi.mocked(db.bill.upsert).mockResolvedValue({} as never);
    vi.mocked(db.bill.findUnique).mockResolvedValue({ id: "bill-1" } as never);
    vi.mocked(db.billStage.upsert).mockResolvedValue({} as never);
    vi.mocked(db.billSponsor.upsert).mockResolvedValue({} as never);

    const makeBill = (id: number) => ({
      billId: id,
      shortTitle: `Bill ${id}`,
      longTitle: `Long title ${id}`,
      billTypeId: 1,
      billTypeCategory: "Government",
      currentHouse: "Commons",
      currentStage: null,
      originatingHouse: "Commons",
      lastUpdate: "2025-01-01",
      isAct: false,
      isDefeated: false,
      billWithdrawn: null,
      sessions: [],
      sponsors: [],
    });

    // Simulate 25 pages (1,250 bills at 50 per page) — more than the old 20-page cap
    const totalResults = 1250;
    vi.mocked(getBillsFn).mockImplementation(async (params) => {
      const page = params?.page ?? 1;
      const take = params?.take ?? 50;
      const startId = (page - 1) * take + 1;
      const remaining = totalResults - (page - 1) * take;
      const count = Math.min(take, remaining);
      const items = Array.from({ length: count }, (_, i) => makeBill(startId + i));
      return { items, totalResults, itemsPerPage: take, currentPage: page };
    });

    const step = createStepMock();
    const result = await syncBillsHandler({ step }) as { synced: number; found: number };

    expect(result.synced).toBe(1250);
    expect(result.found).toBe(1250);
    expect(getBillsFn).toHaveBeenCalledTimes(25);
  });

  it("completes sync log on success", async () => {
    const { prisma: db } = await import("@/lib/db");
    const { getBills: getBillsFn } = await import("@/lib/parliament/client");

    vi.mocked(db.syncLog.create).mockResolvedValue({ id: "log-1" } as never);
    vi.mocked(getBillsFn).mockResolvedValue({
      items: [],
      totalResults: 0,
    } as never);
    vi.mocked(db.syncLog.update).mockResolvedValue({} as never);

    const step = createStepMock();
    await syncBillsHandler({ step });

    expect(db.syncLog.update).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { id: "log-1" },
        data: expect.objectContaining({ status: "completed" }),
      })
    );
  });
});

describe("checkStageChanges function", () => {
  let checkStageChangesHandler: (args: { step: ReturnType<typeof createStepMock> }) => Promise<unknown>;

  beforeEach(async () => {
    vi.resetAllMocks();
    vi.resetModules();

    vi.doMock("./client", () => ({
      inngest: {
        createFunction: vi.fn((_config: unknown, _trigger: unknown, handler: unknown) => handler),
      },
    }));
    vi.doMock("@/lib/db", () => ({
      prisma: {
        bill: {
          findMany: vi.fn(),
          findUnique: vi.fn(),
          update: vi.fn(),
          upsert: vi.fn(),
        },
        billStage: { upsert: vi.fn() },
        billSponsor: { upsert: vi.fn() },
        billSummary: { create: vi.fn() },
        syncLog: { create: vi.fn(), update: vi.fn() },
        notification: { create: vi.fn() },
        trackedBill: { findMany: vi.fn() },
      },
    }));
    vi.doMock("@/lib/parliament/client", () => ({
      getBills: vi.fn(),
      getBillById: vi.fn(),
      getBillStages: vi.fn(),
      getBillPublications: vi.fn(),
    }));
    vi.doMock("@/lib/ai/summarize", () => ({
      generateBillSummary: vi.fn(),
    }));

    const mod = await import("./functions");
    checkStageChangesHandler = mod.checkStageChanges as unknown as typeof checkStageChangesHandler;
  });

  it("returns zero changes when no bills are tracked", async () => {
    const { prisma: db } = await import("@/lib/db");
    vi.mocked(db.bill.findMany).mockResolvedValue([] as never);

    const step = createStepMock();
    const result = await checkStageChangesHandler({ step });

    expect(result).toEqual({ checked: 0, changes: 0 });
  });

  it("detects stage changes and creates notifications", async () => {
    const { prisma: db } = await import("@/lib/db");
    const { getBillById: getBillByIdFn } = await import("@/lib/parliament/client");

    vi.mocked(db.bill.findMany).mockResolvedValue([
      {
        id: "bill-1",
        parliamentId: 100,
        shortTitle: "Test Bill",
        currentStage: "1st Reading",
      },
    ] as never);

    vi.mocked(getBillByIdFn).mockResolvedValue({
      currentStage: { description: "2nd Reading" },
      isAct: false,
    } as never);

    vi.mocked(db.bill.update).mockResolvedValue({} as never);
    vi.mocked(db.notification.create).mockResolvedValue({} as never);

    const step = createStepMock();
    const result = await checkStageChangesHandler({ step });

    expect(result).toEqual({ checked: 1, changes: 1 });
    expect(db.bill.update).toHaveBeenCalledWith({
      where: { id: "bill-1" },
      data: { currentStage: "2nd Reading" },
    });
    expect(db.notification.create).toHaveBeenCalledWith({
      data: expect.objectContaining({
        billId: "bill-1",
        type: "STAGE_CHANGE",
        body: "Has moved to: 2nd Reading",
      }),
    });
  });

  it("detects Royal Assent and sets correct notification type", async () => {
    const { prisma: db } = await import("@/lib/db");
    const { getBillById: getBillByIdFn } = await import("@/lib/parliament/client");

    vi.mocked(db.bill.findMany).mockResolvedValue([
      {
        id: "bill-1",
        parliamentId: 100,
        shortTitle: "Test Bill",
        currentStage: "3rd Reading",
      },
    ] as never);

    vi.mocked(getBillByIdFn).mockResolvedValue({
      currentStage: { description: "Royal Assent" },
      isAct: true,
    } as never);

    vi.mocked(db.bill.update).mockResolvedValue({} as never);
    vi.mocked(db.notification.create).mockResolvedValue({} as never);

    const step = createStepMock();
    const result = await checkStageChangesHandler({ step });

    expect(result).toEqual({ checked: 1, changes: 1 });
    expect(db.notification.create).toHaveBeenCalledWith({
      data: expect.objectContaining({
        type: "ROYAL_ASSENT",
      }),
    });
  });

  it("does not create notification when stage has not changed", async () => {
    const { prisma: db } = await import("@/lib/db");
    const { getBillById: getBillByIdFn } = await import("@/lib/parliament/client");

    vi.mocked(db.bill.findMany).mockResolvedValue([
      {
        id: "bill-1",
        parliamentId: 100,
        shortTitle: "Test Bill",
        currentStage: "2nd Reading",
      },
    ] as never);

    vi.mocked(getBillByIdFn).mockResolvedValue({
      currentStage: { description: "2nd Reading" },
      isAct: false,
    } as never);

    const step = createStepMock();
    const result = await checkStageChangesHandler({ step });

    expect(result).toEqual({ checked: 1, changes: 0 });
    expect(db.notification.create).not.toHaveBeenCalled();
  });
});

describe("generateSummaryFn function", () => {
  let generateSummaryHandler: (args: {
    event: { data: { billId: string } };
    step: ReturnType<typeof createStepMock>;
  }) => Promise<unknown>;

  beforeEach(async () => {
    vi.resetAllMocks();
    vi.resetModules();

    vi.doMock("./client", () => ({
      inngest: {
        createFunction: vi.fn((_config: unknown, _trigger: unknown, handler: unknown) => handler),
      },
    }));
    vi.doMock("@/lib/db", () => ({
      prisma: {
        bill: {
          findMany: vi.fn(),
          findUnique: vi.fn(),
          upsert: vi.fn(),
          update: vi.fn(),
        },
        billStage: { upsert: vi.fn() },
        billSponsor: { upsert: vi.fn() },
        billSummary: { create: vi.fn() },
        syncLog: { create: vi.fn(), update: vi.fn() },
        notification: { create: vi.fn() },
        trackedBill: { findMany: vi.fn() },
      },
    }));
    vi.doMock("@/lib/parliament/client", () => ({
      getBills: vi.fn(),
      getBillById: vi.fn(),
      getBillStages: vi.fn(),
      getBillPublications: vi.fn(),
    }));
    vi.doMock("@/lib/ai/summarize", () => ({
      generateBillSummary: vi.fn(),
    }));

    const mod = await import("./functions");
    generateSummaryHandler = mod.generateSummaryFn as unknown as typeof generateSummaryHandler;
  });

  it("throws when bill is not found", async () => {
    const { prisma: db } = await import("@/lib/db");
    vi.mocked(db.bill.findUnique).mockResolvedValue(null as never);

    const step = createStepMock();

    await expect(
      generateSummaryHandler({
        event: { data: { billId: "nonexistent" } },
        step,
      })
    ).rejects.toThrow("Bill not found: nonexistent");
  });

  it("returns cached when summary already exists", async () => {
    const { prisma: db } = await import("@/lib/db");
    vi.mocked(db.bill.findUnique).mockResolvedValue({
      id: "bill-1",
      shortTitle: "Test",
      longTitle: "Test Long",
      billTypeCategory: "Government",
      legislationGovUrl: null,
      summaries: [{ id: "summary-1" }],
    } as never);

    const step = createStepMock();
    const result = await generateSummaryHandler({
      event: { data: { billId: "bill-1" } },
      step,
    });

    expect(result).toEqual({ cached: true });
  });

  it("generates and saves summary when none exists", async () => {
    const { prisma: db } = await import("@/lib/db");
    const { generateBillSummary: genSummary } = await import("@/lib/ai/summarize");

    vi.mocked(db.bill.findUnique).mockResolvedValue({
      id: "bill-1",
      shortTitle: "Test Bill",
      longTitle: "A test bill for testing",
      billTypeCategory: "Government",
      legislationGovUrl: null,
      summaries: [],
    } as never);

    vi.mocked(genSummary).mockResolvedValue({
      summary: {
        overview: "Overview",
        purpose: "Purpose",
        keyChanges: ["Change"],
        impacts: [],
        implementation: "",
        tldr: "TLDR",
      },
      tokensUsed: 1000,
    } as never);

    vi.mocked(db.billSummary.create).mockResolvedValue({} as never);

    const step = createStepMock();
    const result = await generateSummaryHandler({
      event: { data: { billId: "bill-1" } },
      step,
    });

    expect(result).toEqual({ generated: true, tokensUsed: 1000 });
    expect(db.billSummary.create).toHaveBeenCalled();
  });
});
