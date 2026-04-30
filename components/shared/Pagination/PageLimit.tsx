"use client";
import Select from "@/components/ui/Select";
import { PAGE_LIMIT_OPTIONS } from "@/constants";

const PageLimit = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (val: number) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(Number(e.target.value));
    }
  };
  return (
    <Select
      options={PAGE_LIMIT_OPTIONS}
      value={value}
      onChange={handleChange}
      selectClassName="min-w-29.5 bg-gray-50 border border-gray-200 text-gray-800 font-medium text-sm rounded-xl px-3 py-2"
    />
  );
};

export default PageLimit;
