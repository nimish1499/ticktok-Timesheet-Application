import { FC } from "react";
import { Modal } from "../../ui/Modal";

interface ModalProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  onConfirm: () => void;
  isLoading?: boolean;   // To show a spinner on the button if provided
}

const ConfirmationModal: FC<ModalProps> = ({ isOpen, setOpen, onConfirm, isLoading }) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onOpenChange={setOpen} 
      maxWidth="max-w-xl"
      title="Confirm Deletion"
    >
      <div className="space-y-4 p-4">
        <p className="text-sm text-gray-500">
          Are you sure you want to delete this entry? This action cannot be undone and will permanently remove the data from our servers.
        </p>

        <div className="flex w-full items-center justify-end gap-x-2">
          <button
            disabled={isLoading}
            onClick={() => setOpen(false)}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50 disabled:opacity-50 cursor-pointer"
          >
            Cancel
          </button>
          <button
            disabled={isLoading}
            onClick={onConfirm}
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmationModal;