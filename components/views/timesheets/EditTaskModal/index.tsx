import { Modal } from "@/components/ui/Modal";
import { EditTaskModalProps } from "@/types/tasks";
import TaskForm from "../TaskForm/TaskForm";

export default function EditTaskModal({
  isOpen,
  setOpen,
  task,
}: EditTaskModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={setOpen}
      title="Edit Entry"
    >
      <TaskForm
        setOpen={setOpen}
        initialData={task}
        taskId={task.id}
        mode="edit"
      />
    </Modal>
  );
}