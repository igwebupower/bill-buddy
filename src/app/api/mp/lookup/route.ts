import { NextRequest, NextResponse } from "next/server";
import {
  searchMemberByPostcode,
  getMemberContact,
  getMemberThumbnailUrl,
} from "@/lib/parliament/members-client";

const POSTCODE_REGEX = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i;

export async function GET(request: NextRequest) {
  const postcode = request.nextUrl.searchParams.get("postcode");

  if (!postcode || !POSTCODE_REGEX.test(postcode.trim())) {
    return NextResponse.json(
      { error: "Please enter a valid UK postcode" },
      { status: 400 }
    );
  }

  try {
    const searchResult = await searchMemberByPostcode(postcode.trim());

    if (!searchResult.items || searchResult.items.length === 0) {
      return NextResponse.json(
        { error: "No MP found for this postcode" },
        { status: 404 }
      );
    }

    const member = searchResult.items[0].value;

    // Fetch contact details
    let email: string | null = null;
    let phone: string | null = null;
    let website: string | null = null;

    try {
      const contactResult = await getMemberContact(member.id);
      for (const contact of contactResult.value) {
        if (contact.email && !email) email = contact.email;
        if (contact.phone && !phone) phone = contact.phone;
        if (contact.isWebAddress && contact.line1 && !website) {
          website = contact.line1;
        }
      }
    } catch {
      // Contact info is optional — continue without it
    }

    return NextResponse.json({
      id: member.id,
      name: member.nameDisplayAs,
      party: member.latestParty.name,
      partyColour: `#${member.latestParty.backgroundColour}`,
      constituency: member.latestHouseMembership.membershipFrom,
      thumbnailUrl: member.thumbnailUrl || getMemberThumbnailUrl(member.id),
      email,
      phone,
      website,
    });
  } catch (error) {
    console.error("MP lookup error:", error);
    return NextResponse.json(
      { error: "Failed to look up MP. Please try again." },
      { status: 500 }
    );
  }
}
