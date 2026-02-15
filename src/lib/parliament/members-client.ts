const MEMBERS_BASE_URL = "https://members-api.parliament.uk/api";

async function fetchMembersAPI<T>(
  path: string,
  params?: Record<string, string | number | boolean | undefined>
): Promise<T> {
  const url = new URL(`${MEMBERS_BASE_URL}${path}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value));
      }
    });
  }

  const res = await fetch(url.toString(), {
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    throw new Error(
      `Members API error: ${res.status} ${res.statusText} for ${path}`
    );
  }

  return res.json();
}

// --- TypeScript interfaces for Members API responses ---

export interface MemberValue {
  id: number;
  nameDisplayAs: string;
  latestParty: {
    id: number;
    name: string;
    abbreviation: string;
    backgroundColour: string;
    foregroundColour: string;
  };
  latestHouseMembership: {
    membershipFrom: string; // constituency
    house: number;
  };
  thumbnailUrl: string;
}

export interface MemberSearchResponse {
  items: Array<{
    value: MemberValue;
  }>;
  totalResults: number;
}

export interface MemberContactValue {
  type: string;
  line1: string;
  line2?: string;
  line3?: string;
  line4?: string;
  line5?: string;
  postcode?: string;
  phone?: string;
  email?: string;
  isPreferred: boolean;
  isWebAddress: boolean;
}

export interface MemberContactResponse {
  value: MemberContactValue[];
}

// --- API functions ---

export async function searchMemberByPostcode(
  postcode: string
): Promise<MemberSearchResponse> {
  return fetchMembersAPI<MemberSearchResponse>("/Members/Search", {
    Location: postcode,
    House: "Commons",
  });
}

export async function getMemberContact(
  memberId: number
): Promise<MemberContactResponse> {
  return fetchMembersAPI<MemberContactResponse>(
    `/Members/${memberId}/Contact`
  );
}

export function getMemberThumbnailUrl(memberId: number): string {
  return `${MEMBERS_BASE_URL}/Members/${memberId}/Thumbnail`;
}
