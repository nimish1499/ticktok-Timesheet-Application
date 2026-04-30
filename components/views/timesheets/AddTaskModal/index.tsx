
import { Modal } from "@/components/ui/Modal";
import { AddTaskModalProps } from "@/types/tasks";
import TaskForm from "../TaskForm/TaskForm";

export default function AddTaskModal({ isOpen, setOpen }: AddTaskModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={setOpen} title="Add New Entry">
      <TaskForm setOpen={setOpen} />
    </Modal>
  );
}
