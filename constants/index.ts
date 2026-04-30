import { BadgeVariant } from "@/components/ui/Badge/Badge.types";
import { SelectOption } from "@/components/ui/Select/Select.types";

export const HOURS_PER_WEEK = 40;
export const DEFAULT_PAGE_LIMIT = 5;

// Page Limit Options
export const PAGE_LIMIT_OPTIONS: SelectOption[] = [
  { label: "5 per page", value: 5 },
  { label: "10 per page", value: 10 },
  { label: "20 per page", value: 20 },
  { label: "50 per page", value: 50 },
];

// Badge Variants
export const BADGE_VARIANTS: Record<BadgeVariant, string> = {
  success: "bg-green-100 text-green-800",
  error: "bg-pink-100 text-pink-800",
  warning: "bg-yellow-100 text-yellow-800",
  info: "bg-blue-100 text-blue-800",
  default: "bg-gray-100 text-gray-800",
};

// Status Filter Options
export const STATUS_FILTER_OPTIONS: SelectOption[] = [
  {
    label: "INCOMPLETE",
    value: "incomplete",
  },
  {
    label: "COMPLETED",
    value: "completed",
  },
  {
    label: "MISSING",
    value: "missing",
  },
];

// Routes
export const ROUTES = {
  LOGIN: "/auth/login",
  DASHBOARD: "/dashboard",
  TIMESHEET_DETAIL: (timesheetId: string) => `/timesheets/${timesheetId}`,
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  TIMESHEETS: "/api/timesheets",
  TIMESHEET_DETAIL: (timesheetId: string) => `/api/timesheets/${timesheetId}`,
} as const;
