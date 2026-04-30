"use client";
import Select from "@/components/ui/Select";
import { STATUS_FILTER_OPTIONS } from "@/constants";

const FilterDropdown = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <Select
      options={STATUS_FILTER_OPTIONS}
      value={value}
      onChange={handleChange}
      selectClassName="w-35 h-10.5 bg-white border border-gray-300 text-gray-500 font-normal text-sm rounded-lg leading-tight tracking-normal p-3"
      defaultOptionLabel="Status"
    />
  );
};

export default FilterDropdown;
