"use client";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import DataTable from "@/components/ui/DataTable";
import Pagination from "@/components/shared/Pagination/Pagination";
import TableSkeleton from "@/components/ui/SkeletonLoading/TableSkeleton";
import { useTableQueryState } from "@/hooks/ui/useTableQueryState";
import { Status, TimesheetStatusMap, Timesheet } from "@/types/timesheets";
import { Column } from "@/components/ui/DataTable/DataTable.types";
import FilterDropdown from "@/components/shared/FilterDropdown";
import { useTimesheets } from "@/store/timesheets/queries";

const columns: Column<Timesheet>[] = [
  { key: "id", label: "Week #", sortable: true },
  {
    key: "date",
    label: "Date",
    sortable: true,
  },
  {
    key: "status",
    label: "Status",
    sortable: true,
    render: (status: Status) => (
      <Badge className="uppercase" label={status} variant={TimesheetStatusMap[status]} />
    ),
  },
  {
    key: "actions",
    label: "Actions",
    render: (_, record: Timesheet) => (
      <Link href={`/dashboard/timesheets/${record.id}`} className="text-primary-600 cursor-pointer">
        View
      </Link>
    ),
  },
];

const Timesheets = () => {
  const {
    status,
    page,
    skip,
    limit,
    totalPages,
    sortBy,
    sortOrder,
    changeLimit,
    handlePageChange,
    toggleSort,
    setTotalItems,
    handleStatus,
  } = useTableQueryState({
    defaultSortBy: "id",
  });

  const { data: timesheets, isLoading } = useTimesheets(
    {
      skip,
      limit,
      sortBy,
      sortOrder,
      status,
    },
    setTotalItems,
  );
  
  return (
    <div className="flex flex-col gap-6">
      <FilterDropdown value={status} onChange={handleStatus} />
      {isLoading && !timesheets ? (
        <TableSkeleton rows={limit} columns={columns.length} />
      ) : timesheets ? (
        <DataTable<Timesheet>
          columns={columns}
          data={timesheets || []}
          onSort={(key: string) => {
            toggleSort(key);
          }}
          noDataText="No timesheets found."
          sortBy={sortBy}
          sortOrder={sortOrder}
        />
      ) : null}
      {timesheets?.length && totalPages ? (
        <Pagination
          onPageChange={handlePageChange}
          pageCount={totalPages}
          selectedPage={page}
          customLimit={limit}
          setCustomLimit={changeLimit}
        />
      ) : null}
    </div>
  );
};

export default Timesheets;
