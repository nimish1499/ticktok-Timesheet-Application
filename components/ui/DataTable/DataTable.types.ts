import { SortOrder } from "@/types/pagination";
import type { ReactNode } from "react";

export interface Column<T> {
  key: keyof T | string; // The key in your data object
  label: string;         // The text shown in the header
  sortable?: boolean;    // Whether to show the sort icon
  // Custom render function for complex cells (like the document link or status badge)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (value: any, record: T) => ReactNode; 
}

export interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  onSort?: (key: string) => void;
  noDataText?: string;
  sortBy?: string;
  sortOrder?: SortOrder;
}

export interface TableHeaderProps {
  columnKey: string;
  title: string;
  onSort?: (key: string) => void;
  isSortable?: boolean;
  sortBy?: string;
  sortOrder?: SortOrder;
}