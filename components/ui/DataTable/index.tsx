import TableHeader from "./TableHeader";
import type { DataTableProps } from "./DataTable.types";

export function DataTable<T>({
  columns,
  data,
  onSort,
  noDataText = "No content found.",
  sortBy,
  sortOrder,
}: DataTableProps<T>) {
  return (
    <div className="rounded-10 overflow-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {columns.map((col, colIndex) => (
              <TableHeader
                key={colIndex}
                columnKey={col.key as string}
                title={col.label}
                isSortable={col.sortable}
                onSort={onSort}
                sortBy={sortBy}
                sortOrder={sortOrder}
              />
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data?.length ? (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-gray-100-transparent transition-colors"
              >
                {columns.map((col, colIndex) => (
                  <td
                    key={col.key as string}
                    className={`p-4 text-sm text-gray-500 font-normal leading-normal tracking-normal ${colIndex === 0 ? "bg-gray-50" : ""}`}
                  >
                    {col.render
                      ? col.render(row[col.key as keyof T], row)
                      : (row[col.key as keyof T] as React.ReactNode)}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns?.length}>
                <p className="flex justify-center items-center px-5 pt-10 pb-6">
                  {noDataText}
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
