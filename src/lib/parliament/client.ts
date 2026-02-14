import type {
  ParliamentBillsResponse,
  ParliamentBill,
  ParliamentStagesResponse,
  ParliamentPublicationsResponse,
  BillsQueryParams,
} from "./types";

const BASE_URL = "https://bills-api.parliament.uk/api/v1";

async function fetchParliament<T>(
  path: string,
  params?: Record<string, string | number | boolean | undefined>
): Promise<T> {
  const url = new URL(`${BASE_URL}${path}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value));
      }
    });
  }

  const res = await fetch(url.toString(), {
    headers: { Accept: "application/json" },
    next: { revalidate: 3600 }, // cache for 1 hour
  });

  if (!res.ok) {
    throw new Error(
      `Parliament API error: ${res.status} ${res.statusText} for ${path}`
    );
  }

  return res.json();
}

export async function getBills(
  params: BillsQueryParams = {}
): Promise<ParliamentBillsResponse> {
  const {
    search,
    currentHouse,
    originatingHouse,
    isAct,
    isDefeated,
    session,
    page = 1,
    take = 20,
    sortField = "dateUpdated",
    sortOrder = "desc",
  } = params;

  return fetchParliament<ParliamentBillsResponse>("/Bills", {
    SearchTerm: search,
    CurrentHouse: currentHouse,
    OriginatingHouse: originatingHouse,
    IsAct: isAct,
    IsDefeated: isDefeated,
    Session: session,
    Skip: (page - 1) * take,
    Take: take,
    SortField: sortField === "title" ? "Title" : "DateUpdated",
    SortOrder: sortOrder === "asc" ? "Ascending" : "Descending",
  });
}

export async function getBillById(
  billId: number
): Promise<ParliamentBill> {
  return fetchParliament<ParliamentBill>(`/Bills/${billId}`);
}

export async function getBillStages(
  billId: number
): Promise<ParliamentStagesResponse> {
  return fetchParliament<ParliamentStagesResponse>(
    `/Bills/${billId}/Stages`
  );
}

export async function getBillPublications(
  billId: number
): Promise<ParliamentPublicationsResponse> {
  return fetchParliament<ParliamentPublicationsResponse>(
    `/Bills/${billId}/Publications`
  );
}

// Get bill type display name from category
export function getBillTypeLabel(category: string): string {
  const labels: Record<string, string> = {
    Government: "Government Bill",
    "Private Members'": "Private Members' Bill",
    Private: "Private Bill",
  };
  return labels[category] || category;
}

// Get house badge color
export function getHouseColor(house: string | null): string {
  switch (house) {
    case "Commons":
      return "bg-green-500/15 text-green-400 border-green-500/30";
    case "Lords":
      return "bg-red-500/15 text-red-400 border-red-500/30";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
}

// Get stage progress as percentage
export function getStageProgress(stageName: string | null): number {
  if (!stageName) return 0;
  const stage = stageName.toLowerCase();
  if (stage.includes("1st reading")) return 15;
  if (stage.includes("2nd reading")) return 30;
  if (stage.includes("committee")) return 45;
  if (stage.includes("report")) return 60;
  if (stage.includes("3rd reading")) return 75;
  if (stage.includes("royal assent") || stage.includes("act")) return 100;
  if (stage.includes("consideration")) return 65;
  if (stage.includes("ping pong")) return 85;
  return 50;
}
