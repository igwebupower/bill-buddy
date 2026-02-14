import { NextRequest, NextResponse } from "next/server";

const MEMBERS_API = "https://members-api.parliament.uk/api";

interface MemberValue {
  id: number;
  nameDisplayAs: string;
  latestParty: {
    name: string;
    abbreviation: string;
    backgroundColour: string;
    foregroundColour: string;
  };
  thumbnailUrl: string;
  gender: string;
}

interface ConstituencyResult {
  name: string;
  currentRepresentation?: {
    member?: {
      value: MemberValue;
    };
  };
}

interface ContactInfo {
  type: string;
  line1: string;
  email: string;
}

export async function GET(request: NextRequest) {
  const postcode = request.nextUrl.searchParams.get("postcode");

  if (!postcode || postcode.trim().length < 2) {
    return NextResponse.json(
      { error: "A valid UK postcode is required" },
      { status: 400 }
    );
  }

  try {
    // Look up constituency and MP by postcode
    const constituencyRes = await fetch(
      `${MEMBERS_API}/Location/Constituency/Search/${encodeURIComponent(postcode.trim())}`,
      { headers: { Accept: "application/json" } }
    );

    if (!constituencyRes.ok) {
      if (constituencyRes.status === 404 || constituencyRes.status === 400) {
        return NextResponse.json(
          { error: "No constituency found for this postcode. Please check and try again." },
          { status: 404 }
        );
      }
      throw new Error(`Parliament API error: ${constituencyRes.status}`);
    }

    const constituencyData = await constituencyRes.json();
    const items = constituencyData.items;

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "No constituency found for this postcode" },
        { status: 404 }
      );
    }

    const constituency: ConstituencyResult = items[0].value;
    const member = constituency.currentRepresentation?.member?.value;

    if (!member) {
      return NextResponse.json(
        { error: "No current MP found for this constituency. The seat may be vacant." },
        { status: 404 }
      );
    }

    // Fetch contact details for this MP
    let email: string | null = null;
    try {
      const contactRes = await fetch(
        `${MEMBERS_API}/Members/${member.id}/Contact`,
        { headers: { Accept: "application/json" } }
      );

      if (contactRes.ok) {
        const contactData = await contactRes.json();
        const contacts = contactData.value;

        if (Array.isArray(contacts)) {
          const parliamentaryContact = contacts.find(
            (c: ContactInfo) =>
              c.type === "Parliamentary" || c.type === "Constituency"
          );
          email = parliamentaryContact?.email || contacts[0]?.email || null;
        }
      }
    } catch {
      // Contact details are non-critical — continue without them
    }

    return NextResponse.json({
      memberId: member.id,
      name: member.nameDisplayAs,
      party: member.latestParty.name,
      partyAbbreviation: member.latestParty.abbreviation,
      partyColour: `#${member.latestParty.backgroundColour}`,
      constituency: constituency.name,
      photoUrl: member.thumbnailUrl,
      email,
    });
  } catch (error) {
    console.error("MP lookup error:", error);
    return NextResponse.json(
      { error: "Failed to look up your MP. Please try again." },
      { status: 500 }
    );
  }
}
