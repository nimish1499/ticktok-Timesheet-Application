"use client";
import Skeleton from "react-loading-skeleton";
import { useTasks } from "@/store/tasks/queries";
import { TaskItem } from "@/types/tasks";
import { useParams } from "next/navigation";
import TimesheetItem from "../TimesheetItem";

const TasksList = () => {
  const { timesheetId } = useParams<{ timesheetId: string }>();
  const { data: tasks, isLoading } = useTasks(timesheetId);
  return isLoading && !tasks ? (
    <Skeleton className="h-11" count={3} />
  ) : (
    tasks?.map((task: TaskItem) => <TimesheetItem key={task.id} task={task} />)
  );
};

export default TasksList;
