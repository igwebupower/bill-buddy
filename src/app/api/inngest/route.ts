import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest/client";
import {
  syncBills,
  generateSummaryFn,
  checkStageChanges,
} from "@/lib/inngest/functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [syncBills, generateSummaryFn, checkStageChanges],
});
