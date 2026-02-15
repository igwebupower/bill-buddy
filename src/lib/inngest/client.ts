import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "billbrief",
  eventKey: process.env.INNGEST_EVENT_KEY,
});
