import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "bill-buddy",
  eventKey: process.env.INNGEST_EVENT_KEY,
});
