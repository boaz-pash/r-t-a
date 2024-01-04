import { z } from "zod";

const eventSchema = z.object({
  event_id: z.number().int().positive(),
  event_name: z.string().min(1),
  event_description: z.string().optional(),
  event_location: z.string().optional(),
  event_date: z.date(),
  user_id: z.number().int().positive(),
  created_at: z.date(),
  updated_at: z.date(),
});

export default eventSchema;
