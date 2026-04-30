import { z } from "zod";

export const taskSchema = z.object({
  projectName: z.string().min(1, "Project is required"),
  name: z.string().min(1, "Task is required"),
  description: z.string().min(1, "Description is required"),
  hoursLogged: z
    .number()
    .min(1, "Minimum 1 hour")
    .max(12, "Max 12 hours"),
});

export type TaskFormValues = z.infer<typeof taskSchema>;