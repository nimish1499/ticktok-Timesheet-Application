"use client";
import { useParams } from "next/navigation";
import { TaskFormValues } from "@/validators/tasks";
import { useCreateTask, useUpdateTask } from "@/store/tasks/mutations";

export const useSubmitTask = (mode: "create" | "edit", taskId?: number) => {
  const { timesheetId } = useParams<{ timesheetId: string }>();

  const createMutation = useCreateTask();
  const updateMutation = useUpdateTask();

  const submit = async (data: Partial<TaskFormValues>) => {
    if (mode === "edit" && taskId) {
      return updateMutation.mutateAsync({
        timesheetId,
        taskId,
        data,
      });
    }

    return createMutation.mutateAsync({
      timesheetId,
      data,
    });
  };

  return {
    submit,
    isPending: createMutation.isPending || updateMutation.isPending,
  };
};