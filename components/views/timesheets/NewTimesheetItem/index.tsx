"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { PlusIcon } from "lucide-react";

const AddTaskModal = dynamic(() => import('../AddTaskModal/index'), {
  loading: () => <p>Loading...</p>,
});

const NewTimesheetItem = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        className="group flex justify-center items-center gap-2 h-11 bg-white hover:bg-primary-100 rounded-lg p-4 border border-dashed border-gray-300 hover:border-primary-700 hover:border-dashed cursor-pointer transition-colors duration-200"
        onClick={() => setOpen(true)}
      >
        <PlusIcon className="w-3 h-3 text-gray-400 group-hover:text-primary-700 transition-colors" />
        <h3 className="text-base font-medium text-gray-500 group-hover:text-primary-700 leading-normal tracking-normal transition-colors">
          Add New Task
        </h3>
      </div>
      <AddTaskModal isOpen={isOpen} setOpen={setOpen} />
    </>
  );
};

export default NewTimesheetItem;