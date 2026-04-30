import { TaskFormValues } from "@/validators/tasks";

export interface TaskItem {
  id: number;
  name: string;
  description: string;
  hoursLogged: number;
  projectName: string;
};

export interface AddTaskModalProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
};

export interface EditTaskModalProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  task: TaskItem;
};

export type TaskListResponse = {
  data: TaskItem[];
};

export type TaskFormProps = {
  setOpen: (open: boolean) => void;
  initialData?: TaskFormValues;
  taskId?: number;
  mode?: "create" | "edit";
};

export interface TimesheetItemProps {
  task: TaskItem;
};
