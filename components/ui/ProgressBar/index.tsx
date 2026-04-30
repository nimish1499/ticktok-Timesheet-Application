export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-47">
      <div className="relative ">
        <div
          className="absolute -top-11 -translate-x-1/2 mb-2"
          style={{ left: `${value}%` }}
        >
          <div className="relative bg-white border border-gray-100 shadow-sm rounded-lg px-3 py-1.5 whitespace-nowrap">
            <span className="text-sm font-medium text-gray-900 leading-normal tracking-normal">
              20/40 hrs
            </span>

            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-b border-r border-gray-100 rotate-45"></div>
          </div>
        </div>

        <div className="relative h-1.5 bg-gray-200 rounded-sm flex items-center">
          <div
            className="h-full bg-orange-400 rounded-sm"
            style={{ width: `${value}%` }}
          ></div>

          <span className="absolute right-0 -top-4.5 text-xs font-medium text-gray-500">
            100%
          </span>
        </div>
      </div>
    </div>
  );
}
