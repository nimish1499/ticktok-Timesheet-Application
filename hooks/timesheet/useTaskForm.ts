"use client";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema, TaskFormValues } from "@/validators/tasks";

export const useTaskForm = (initialData?: TaskFormValues): UseFormReturn<TaskFormValues> => {
  return useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    defaultValues: initialData || {
      name: "",
      description: "",
      hoursLogged: 1,
      projectName: "",
    },
  });
};