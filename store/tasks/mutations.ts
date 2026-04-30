import { useMutation, useQueryClient } from "@tanstack/react-query";
import { taskService } from "../../services/tasks/tasks.service";
import { TaskItem } from "@/types/tasks";

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: taskService.createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: taskService.updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: taskService.deleteTask,
    onMutate: async ({ taskId, timesheetId }) => {
      await queryClient.cancelQueries({ queryKey: ["tasks", timesheetId] });

      const previousTasks = queryClient.getQueryData(["tasks", timesheetId]);

      queryClient.setQueryData(["tasks", timesheetId], (old: TaskItem[]) =>
        old?.filter((task) => task.id !== taskId),
      );

      return { previousTasks };
    },
    onError: (_err, { timesheetId }, context) => {
      queryClient.setQueryData(
        ["tasks", timesheetId],
        context?.previousTasks
      );
    },
    onSettled: (_data, _err, { timesheetId }) => {
      queryClient.invalidateQueries({
        queryKey: ["tasks", timesheetId],
      });
    },
  });
};