import { BadgeVariant } from "@/components/ui/Badge/Badge.types";

export type Status = "completed" | "incomplete" | "missing" | string;

export interface Timesheet {
  id: string;
  date: string;
  status: Status;
};

export const TimesheetStatusMap: Record<Status, BadgeVariant> = {
  completed: "success",
  incomplete: "warning",
  missing: "error",
};
