import { FC } from "react";
import { TimesheetItemProps } from "@/types/tasks";
import { ActionMenu } from "./ActionMenu";


const TimesheetItem: FC<TimesheetItemProps> = ({ task }) => {
  return (
    <div className="min-h-11 bg-white rounded-lg px-3 py-2.5 border border-gray-200">
      <div className="flex justify-between">
        <h3 className="text-base font-medium text-gray-900 leading-normal tracking-normal">
          {task.description}
        </h3>
        <div className="flex gap-2.5 items-center">
          <h4 className="text-sm text-gray-400 font-normal leading-tight tracking-normal">
            {task.hoursLogged} hrs
          </h4>
          <div className="flex items-center px-2.5 py-0.5 bg-primary-100 rounded-md cursor-pointer">
            <span className="text-xs font-medium text-primary-800 leading-normal tracking-normal">
              {task.projectName}
            </span>
          </div>
          <ActionMenu task={task} />
        </div>
      </div>
    </div>
  );
};

export default TimesheetItem;
