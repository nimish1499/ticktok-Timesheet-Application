import type { FC } from "react";
import { LucideArrowUp, LucideArrowDown } from "lucide-react";
import type { TableHeaderProps } from "./DataTable.types";

const TableHeader: FC<TableHeaderProps> = ({
  columnKey,
  title,
  onSort,
  isSortable,
  sortBy,
  sortOrder,
}) => {
  const isActive = sortBy === columnKey;
  return (
    <th className="bg-gray-50 p-4" onClick={() => onSort && onSort(columnKey)}>
      <div className="flex justify-start items-center gap-2">
        <span className="text-xs text-gray-500 font-medium leading-normal tracking-normal uppercase">
          {title}
        </span>
        {isSortable && 
          (isActive && sortOrder === "asc" ? (
            <LucideArrowDown
              className="w-2.5 h-2 cursor-pointer"
              color="#6B7280"
            />
          ) : (
            <LucideArrowUp
              className="w-2.5 h-2 cursor-pointer"
              color="#6B7280"
            />
          ))}
      </div>
    </th>
  );
};

export default TableHeader;
