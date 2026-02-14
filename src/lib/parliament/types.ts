// Types for UK Parliament Bills API responses

export interface ParliamentBillsResponse {
  items: ParliamentBill[];
  totalResults: number;
  itemsPerPage: number;
  currentPage: number;
}

export interface ParliamentBill {
  billId: number;
  shortTitle: string;
  longTitle: string;
  currentHouse: string | null;
  originatingHouse: string | null;
  lastUpdate: string;
  billWithdrawn: string | null;
  isAct: boolean;
  isDefeated: boolean;
  billTypeId: number;
  billTypeCategory: string;
  introducedSessionId: number;
  includedSessionIds: number[];
  sessions: ParliamentSession[];
  currentStage: ParliamentCurrentStage | null;
  sponsors: ParliamentSponsor[];
  promoters: ParliamentPromoter[];
  petitioningPeriod: string | null;
  petitionInformation: string | null;
  agent: ParliamentAgent | null;
}

export interface ParliamentSession {
  id: number;
  name: string;
}

export interface ParliamentCurrentStage {
  id: number;
  stageId: number;
  sessionId: number;
  description: string;
  abbreviation: string;
  house: string;
  stageSittings: ParliamentStageSitting[];
  sortOrder: number;
}

export interface ParliamentStageSitting {
  id: number;
  stageId: number;
  billStageId: number;
  billId: number;
  date: string;
}

export interface ParliamentSponsor {
  member: {
    memberId: number;
    name: string;
    party: string;
    memberPhoto: string;
    memberPage: string;
    memberFrom: string;
  };
  organisation: null | {
    name: string;
    url: string;
  };
  sortOrder: number;
}

export interface ParliamentPromoter {
  organisationName: string;
  organisationUrl: string;
}

export interface ParliamentAgent {
  name: string;
  address: string;
  phoneNo: string;
  email: string;
}

export interface ParliamentStagesResponse {
  items: ParliamentStageItem[];
}

export interface ParliamentStageItem {
  id: number;
  stageId: number;
  sessionId: number;
  description: string;
  abbreviation: string;
  house: string;
  stageSittings: ParliamentStageSitting[];
  sortOrder: number;
}

export interface ParliamentPublicationsResponse {
  publications: ParliamentPublication[];
}

export interface ParliamentPublication {
  publicationType: {
    id: number;
    name: string;
    description: string;
  };
  files: ParliamentPublicationFile[];
  links: ParliamentPublicationLink[];
}

export interface ParliamentPublicationFile {
  id: number;
  fileName: string;
  fileSizeBytes: number;
  fileType: string;
  contentLength: number;
}

export interface ParliamentPublicationLink {
  id: number;
  title: string;
  url: string;
  contentType: string;
}

// Types for Commons/Lords Votes API responses (PascalCase from API)

export interface CommonsDivisionSearchResult {
  DivisionId: number;
  Date: string;
  PublicationUpdated: string;
  Number: number;
  IsDeferred: boolean;
  EVELType: string;
  EVELCountry: string;
  Title: string;
  AyeCount: number;
  NoCount: number;
}

export interface CommonsDivisionDetail {
  DivisionId: number;
  Date: string;
  PublicationUpdated: string;
  Number: number;
  IsDeferred: boolean;
  EVELType: string;
  EVELCountry: string;
  Title: string;
  AyeCount: number;
  NoCount: number;
  AyeTellers: CommonsMemberVote[];
  NoTellers: CommonsMemberVote[];
  Ayes: CommonsMemberVote[];
  Noes: CommonsMemberVote[];
  NoVoteRecorded: CommonsMemberVote[];
}

export interface CommonsMemberVote {
  MemberId: number;
  Name: string;
  Party: string;
  SubParty: string;
  PartyColour: string;
  PartyAbbreviation: string;
  MemberFrom: string;
  ListAs: string;
  ProxyName: string | null;
}

export interface LordsDivisionSearchResult {
  DivisionId: number;
  Date: string;
  Number: number;
  Title: string;
  IsWhipped: boolean;
  IsGovernmentContent: boolean;
  AuthoritativeContentCount: number;
  AuthoritativeNotContentCount: number;
}

export interface LordsDivisionDetail {
  DivisionId: number;
  Date: string;
  Number: number;
  Title: string;
  IsWhipped: boolean;
  IsGovernmentContent: boolean;
  AuthoritativeContentCount: number;
  AuthoritativeNotContentCount: number;
  Contents: LordsMemberVote[];
  NotContents: LordsMemberVote[];
}

export interface LordsMemberVote {
  MemberId: number;
  Name: string;
  Party: string;
  PartyColour: string;
  PartyAbbreviation: string;
  MemberFrom: string;
  ListAs: string;
}

export interface BillsQueryParams {
  search?: string;
  house?: "Commons" | "Lords" | "Unassigned";
  currentHouse?: "Commons" | "Lords" | "Unassigned";
  originatingHouse?: "Commons" | "Lords";
  billType?: number[];
  billStage?: number[];
  isAct?: boolean;
  isDefeated?: boolean;
  session?: number;
  page?: number;
  take?: number;
  sortField?: "title" | "dateUpdated";
  sortOrder?: "asc" | "desc";
}
