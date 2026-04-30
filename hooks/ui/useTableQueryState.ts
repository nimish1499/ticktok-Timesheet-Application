/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { DEFAULT_PAGE_LIMIT } from "@/constants";
import { SortOrder, UseTableQueryOptions } from "@/types/pagination";

export const useTableQueryState = ({
  defaultSortBy = "id",
  defaultLimit = DEFAULT_PAGE_LIMIT,
}: UseTableQueryOptions) => {
  const searchParams = useSearchParams();
  const [totalItems, setTotalItems] = useState<number | null>(null);

  // Read from URL
  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || defaultLimit);
  const sortBy = (searchParams.get("sortBy")) || defaultSortBy;
  const sortOrder = (searchParams.get("order") as SortOrder) || "desc";
  const searchQuery = searchParams.get("searchQuery") || "";
  const status = searchParams.get("status") || "";

  const skip = (page - 1) * limit;
  const totalPages =
    totalItems !== null ? Math.ceil(totalItems / limit) : null;

  // Helper to update params safely
  const updateParams = (updates: Record<string, string | number>) => {
    const newParams = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "") {
        newParams.delete(key);
      } else {
        newParams.set(key, String(value));
      }
    });

    window.history.replaceState(null, "", `?${newParams.toString()}`);
  };

  // Pagination
  const handlePageChange = (page: { selected: number }) => {
    updateParams({ limit, page: page?.selected + 1 });
  };

  const changeLimit = (newLimit: number) =>
    updateParams({ limit: newLimit, page: 1 });

  // Sorting
  const toggleSort = (field: string) => {
    if (field === sortBy) {
      updateParams({
        order: sortOrder === "asc" ? "desc" : "asc",
        page: 1,
      });
    } else {
      updateParams({
        sortBy: field,
        order: "asc",
        page: 1,
      });
    }
  };

  // Search
  const updateSearch = (value: string) =>
    updateParams({ q: value, page: 1, order: "asc"  });

  const resetTable = () => {
      updateParams({});
  };

  const handleStatus = (value: string) =>
    updateParams({ status: value, page: 1, order: "asc" });

  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
    searchQuery,
    status,
    totalPages,
    handlePageChange,
    setTotalItems,
    changeLimit,
    handleStatus,
    toggleSort,
    updateSearch,
    resetTable,
  };
};

