import ReactPaginate from "react-paginate";
import PageLimit from "./PageLimit";
import { DEFAULT_PAGE_LIMIT } from "@/constants";

type Props = {
  pageCount: number;
  selectedPage: number;
  onPageChange: (selectedItem: { selected: number }) => void;
  customLimit: number;
  setCustomLimit: (limit: number) => void;
};

const Pagination = ({
  pageCount,
  onPageChange,
  selectedPage,
  customLimit = DEFAULT_PAGE_LIMIT,
  setCustomLimit,
}: Props) => (
  <div className="flex flex-col gap-4 lg:flex-row justify-between items-center">
    <PageLimit value={customLimit} onChange={setCustomLimit} />
    <ReactPaginate
      breakLabel="…"
      nextLabel="Next"
      previousLabel="Previous"
      forcePage={selectedPage - 1}
      onPageChange={onPageChange}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      containerClassName="flex items-center justify-center text-sm mt-6"
      pageClassName=""
      pageLinkClassName="px-3 py-2 border-1 border-gray-200 transition cursor-pointer"
      previousClassName=""
      previousLinkClassName="px-3 py-2 border-1 border-gray-200 rounded-l-xl transition cursor-pointer"
      nextClassName=""
      nextLinkClassName="px-3 py-2 border-1 border-gray-200 rounded-r-xl transition cursor-pointer"
      breakClassName="text-secondary"
      activeClassName="bg-gray-50 text-accent-blue border-gray-200 text-sm font-medium py-2 rounded"
      disabledClassName="opacity-50 pointer-events-none"
    />
  </div>
);

export default Pagination;
