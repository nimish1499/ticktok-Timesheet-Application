import { apiClient } from "@/lib/apiClient";
import { TaskItem, TaskListResponse } from "@/types/tasks";

export const taskService = {
  getTimesheetTasks: async (timesheetId: string): Promise<TaskListResponse> => {
    const response = await apiClient<TaskListResponse>(
      `/timesheets/${timesheetId}/tasks`,
      {},
      "Failed to fetch tasks",
    );
    return response;
  },
  createTask: async ({
    timesheetId,
    data,
  }: {
    timesheetId: string;
    data: Partial<TaskItem>;
  }) => {
    const response = await apiClient(
      `/timesheets/${timesheetId}/tasks`,
      {
        method: "POST",
        body: JSON.stringify(data),
      },
      "Failed to create task",
    );

    return response;
  },
  updateTask: async ({
    timesheetId,
    taskId,
    data,
  }: {
    timesheetId: string;
    taskId: number;
    data: Partial<TaskItem>;
  }) => {
    const response = await apiClient(
      `/timesheets/${timesheetId}/tasks?taskId=${taskId}`,
      {
        method: "PATCH",
        body: JSON.stringify(data),
      },
      "Failed to update task"
    );

    return response;
  },
  deleteTask: async ({
    timesheetId,
    taskId,
  }: {
    timesheetId: string;
    taskId: number;
  }) => {
    const response = apiClient(
      `/timesheets/${timesheetId}/tasks?taskId=${taskId}`,
      {
        method: "DELETE",
      },
      "Failed to delete task"
    );

    return response;
  },
};
