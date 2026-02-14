import { vi } from "vitest";

// Mock Prisma client globally
vi.mock("@/lib/db", () => ({
  prisma: {
    bill: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      findFirst: vi.fn(),
      count: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      upsert: vi.fn(),
    },
    billStage: { upsert: vi.fn() },
    billSponsor: { upsert: vi.fn() },
    billSummary: { create: vi.fn() },
    trackedBill: {
      findMany: vi.fn(),
      upsert: vi.fn(),
      deleteMany: vi.fn(),
    },
    deviceProfile: { upsert: vi.fn() },
    pushSubscription: { upsert: vi.fn() },
    notification: { create: vi.fn() },
    syncLog: {
      create: vi.fn(),
      update: vi.fn(),
    },
  },
}));
