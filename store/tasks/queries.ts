import { useQuery } from "@tanstack/react-query";
import { TaskItem } from "@/types/tasks";
import { taskService } from "../../services/tasks/tasks.service";

export const useTasks = (timesheetId: string) => {
  return useQuery<TaskItem[]>({
    queryKey: ["tasks", timesheetId],
    queryFn: async () => {
      const res = await taskService.getTimesheetTasks(timesheetId);
      return res.data;
    },
  });
};