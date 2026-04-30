"use client";
import { Controller } from "react-hook-form";
import { Info, Minus, Plus } from "lucide-react";
import Select from "@/components/ui/Select";
import { useTaskForm } from "@/hooks/timesheet/useTaskForm";
import { useSubmitTask } from "@/hooks/timesheet/useSubmitTask";
import { TaskFormValues } from "@/validators/tasks";
import { TaskFormProps } from "@/types/tasks";
import { projects, taskTypes } from "../data/taskOptions";

const TaskForm: React.FC<TaskFormProps> = ({
  setOpen,
  initialData,
  taskId,
  mode = "create",
}) => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useTaskForm(initialData);

  const { submit, isPending } = useSubmitTask(mode, taskId);

  const hoursLogged = watch("hoursLogged");

  const onSubmit = async (data: TaskFormValues) => {
    await submit(data);
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="p-5 space-y-4">
        {/* Project */}
        <Controller
          control={control}
          name="projectName"
          render={({ field }) => (
            <Select
              options={projects}
              label={
                <div className="flex items-center">
                  Select Project *
                  <Info className="w-3 h-3 ml-2 text-gray-400" />
                </div>
              }
              value={field.value}
              onChange={field.onChange}
              defaultOptionLabel="Select project"
              selectClassName="w-91 h-10.5 bg-transparent border border-gray-300 text-gray-500 text-sm font-normal rounded-lg p-3"
            />
          )}
        />
        {errors.projectName && (
          <p className="text-red-500 text-xs">{errors.projectName.message}</p>
        )}
        {/* Task Type */}
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Select
              options={taskTypes}
              label={
                <div className="flex items-center">
                  Type of Work *
                  <Info className="w-3 h-3 ml-2 text-gray-400" />
                </div>
              }
              value={field.value}
              onChange={field.onChange}
              defaultOptionLabel="Select Task"
              selectClassName="w-91 h-10.5 bg-transparent border border-gray-300 text-gray-500 text-sm font-normal rounded-lg p-3"
            />
          )}
        />
        {errors.name && (
          <p className="text-red-500 text-xs">{errors.name.message}</p>
        )}
        {/* Description */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-900">
            Task description *
          </label>
          <textarea
            {...register("description")}
            rows={4}
            placeholder="Write text here ..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none resize-none text-sm font-normal text-gray-900 placeholder:text-gray-500"
          />
          {errors.description && (
            <p className="text-red-500 text-xs">{errors.description.message}</p>
          )}
        </div>
        {/* Hours */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-900">
            Hours *
          </label>
          <div className="flex w-fit border border-gray-300 rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => setValue("hoursLogged", Math.max(1, hoursLogged - 1))}
              className="p-2 px-3 bg-gray-100 border-r border-gray-300 cursor-pointer"
            >
              <Minus className="w-2.5 h-2.5 text-gray-900" />
            </button>
            <input
              type="text"
              value={hoursLogged || 1}
              {...register("hoursLogged", { valueAsNumber: true })}
              className="w-14 text-center bg-transparent outline-none font-normal text-sm text-gray-500 px-4 py-2"
            />
            <button
              type="button"
              onClick={() => setValue("hoursLogged", hoursLogged + 1)}
              className="p-2 px-3 bg-gray-100 border-l border-gray-300 cursor-pointer"
            >
              <Plus className="w-2.5 h-2.5 text-gray-900" />
            </button>
          </div>
          {errors.hoursLogged && (
            <p className="text-red-500 text-xs">{errors.hoursLogged.message}</p>
          )}
        </div>
      </div>
      {/* Footer */}
      <div className="p-5 border-t border-gray-300 flex gap-4">
        <button
          type="submit"
          disabled={isSubmitting || isPending}
          className="flex-1 bg-primary-600 text-white text-sm font-medium rounded-lg px-3 py-2 cursor-pointer"
        >
          {mode === "edit"
            ? isPending
              ? "Updating..."
              : "Update entry"
            : isPending
              ? "Adding..."
              : "Add entry"}
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="flex-1 border border-gray-200 text-gray-900 text-sm font-medium rounded-lg px-3 py-2 cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
