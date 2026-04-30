import NewTimesheetItem from "@/components/views/timesheets/NewTimesheetItem";
import TasksList from "@/components/views/timesheets/TasksList";
import { ProgressBar } from "@/components/ui/ProgressBar";

const Timesheet = async () => {
  return (
    <div className="min-h-screen flex flex-col gap-6 bg-white rounded-lg p-6 shadow-card">
      <h2 className="text-xl font-semibold">This week’s timesheet</h2>
      <div className="flex justify-between">
        {/* Need to bring dynamic value - Not spending time on it for now */}
        <h4 className="text-sm text-gray-500 font-normal leading-normal tracking-normal">
          21 - 26 January, 2024
        </h4>
        <ProgressBar value={50} />
      </div>

      <div className="flex flex-col gap-4 md:flex-row w-full">
        <div className="w-full md:w-1/8">
          <span className="text-lg text-gray-900 font-semibold">Jan 21</span>
        </div>
        <div className="w-full md:w-7/8">
          <div className="flex flex-col gap-2.5">
            <TasksList />
            <NewTimesheetItem />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Timesheet;
