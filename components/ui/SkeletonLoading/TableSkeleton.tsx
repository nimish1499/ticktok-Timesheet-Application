import { type FC } from "react";
import Skeleton from "react-loading-skeleton";

interface Props {
  rows: number;
  columns: number;
}

const TableSkeleton: FC<Props> = ({ rows, columns }) => {
  return (
    <table className="w-full border-collapse">
      <tbody>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <tr
            key={`row-${rowIndex}`}
            className="transition-colors"
          >
            {Array.from({ length: columns }).map((_, colIndex) => (
              <td key={`col-${colIndex}`} className="px-4 py-2">
                <Skeleton
                  className="block w-full rounded-md"
                  height={40}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableSkeleton;