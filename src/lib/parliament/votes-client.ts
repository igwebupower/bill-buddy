const VOTES_BASE_URL = "https://commonsvotes-api.parliament.uk";

async function fetchVotesAPI<T>(
  path: string,
  params?: Record<string, string | number | boolean | undefined>
): Promise<T> {
  const url = new URL(`${VOTES_BASE_URL}${path}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value));
      }
    });
  }

  const res = await fetch(url.toString(), {
    headers: { Accept: "application/json" },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(
      `Votes API error: ${res.status} ${res.statusText} for ${path}`
    );
  }

  return res.json();
}

// --- TypeScript interfaces for Commons Votes API responses ---

export interface DivisionMember {
  MemberId: number;
  Name: string;
  Party: string;
  PartyColour: string;
  PartyAbbreviation: string;
  MemberFrom: string;
}

export interface DivisionSummary {
  DivisionId: number;
  Date: string;
  Title: string;
  AyeCount: number;
  NoCount: number;
}

export interface DivisionDetail {
  DivisionId: number;
  Date: string;
  Title: string;
  AyeCount: number;
  NoCount: number;
  Ayes: DivisionMember[];
  Noes: DivisionMember[];
  AyeTellers: DivisionMember[];
  NoTellers: DivisionMember[];
}

// --- API functions ---

export async function searchDivisions(params: {
  searchTerm?: string;
  memberId?: number;
  take?: number;
  skip?: number;
}): Promise<DivisionSummary[]> {
  return fetchVotesAPI<DivisionSummary[]>("/data/divisions.json/search", {
    queryParameters: params.searchTerm,
    memberId: params.memberId,
    take: params.take,
    skip: params.skip,
  });
}

export async function getDivisionById(
  divisionId: number
): Promise<DivisionDetail> {
  return fetchVotesAPI<DivisionDetail>(
    `/data/division/${divisionId}.json`
  );
}
