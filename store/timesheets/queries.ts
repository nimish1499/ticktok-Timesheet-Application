import { useQuery } from "@tanstack/react-query";
import { timesheetService } from "@/services/timesheets/timesheets.service";
import { Timesheet } from "@/types/timesheets";
import { QueryParams } from "@/types/api";

export const useTimesheets = (
  queryParams: QueryParams,
  setTotalItems: (totalItems: number) => void,
) => {
  const { skip, limit, sortBy, sortOrder, status } = queryParams;
  return useQuery<Timesheet[]>({
    queryKey: ["timesheets", skip, limit, sortBy, sortOrder, status],
    queryFn: async () => {
      const res = await timesheetService.getTimesheets({
        skip,
        limit,
        sortBy,
        sortOrder,
        status,
      });
      setTotalItems(res.total);
      return res.data;
    },
  });
};
