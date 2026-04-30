import { apiClient } from "@/lib/apiClient";
import { QueryParams } from "@/types/api";
import { Timesheet } from "@/types/timesheets";

export type TimesheetListResponse = {
  data: Timesheet[];
  total: number;
  totalPages?: number;
};

export const timesheetService = {
  getTimesheets: async (queryParams: QueryParams): Promise<TimesheetListResponse> => {
    const response = await apiClient<TimesheetListResponse>(
      `/timesheets?limit=${queryParams?.limit || "5"}&skip=${queryParams?.skip || "0"}&sortBy=${queryParams?.sortBy || "id"}&order=${queryParams?.sortOrder || "desc"}${queryParams?.searchQuery ? `&q=${queryParams?.searchQuery}` : ""}${queryParams?.status ? `&status=${queryParams?.status}` : ""}`,
    );
    return response;
  },
};
