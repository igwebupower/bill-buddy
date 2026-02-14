import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getUserFromRequest } from "@/lib/auth/session";

const SUPPORTED_LANGUAGES = ["en", "cy", "ur", "pl", "ar"];

export async function PATCH(request: NextRequest) {
  const user = await getUserFromRequest(request);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const updates: Record<string, string> = {};

  if (body.preferredLang && SUPPORTED_LANGUAGES.includes(body.preferredLang)) {
    updates.preferredLang = body.preferredLang;
  }

  if (body.theme && (body.theme === "dark" || body.theme === "light")) {
    updates.theme = body.theme;
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json(
      { error: "No valid preferences to update" },
      { status: 400 }
    );
  }

  const updated = await prisma.user.update({
    where: { id: user.id },
    data: updates,
    select: { id: true, preferredLang: true, theme: true },
  });

  return NextResponse.json({ user: updated });
}
