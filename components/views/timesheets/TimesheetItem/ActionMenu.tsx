"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import MenuDropdown from "@/components/ui/MenuDropdown";
import { useDeleteTask } from "@/store/tasks/mutations";
import { TaskItem } from "@/types/tasks";
import EditTaskModal from "../EditTaskModal";

const ConfirmationModal = dynamic(() => import("@/components/shared/ConfirmationModal"));

export const ActionMenu = ({ task }: { task: TaskItem }) => {
  const { timesheetId } = useParams<{ timesheetId: string; }>();
  const [isOpen, setOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const deleteMutation = useDeleteTask();
  return (
    <>
      <MenuDropdown
        menuIcon="ellipsis"
        actions={[
          {
            label: "Edit",
            onClick: () => setEditOpen(true),
          },
          {
            label: "Delete",
            onClick: () => setOpen(true),
          },
        ]}
      />
      <ConfirmationModal
        isOpen={isOpen}
        setOpen={setOpen}
        onConfirm={() => {
          deleteMutation.mutate({
            timesheetId,
            taskId: task.id,
          });
          setOpen(false);
        }}
      />

      <EditTaskModal isOpen={isEditOpen} setOpen={setEditOpen} task={task} />
    </>
  );
};
