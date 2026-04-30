"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
import { SelectProps } from "./Select.types";

const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  label,
  selectClassName,
  chevronColor = "#4A5565",
  defaultOptionLabel,
}) => {
  return (
    <>
      {label && (
        <label className="flex text-sm font-medium text-gray-900 mb-2">
          {label}
        </label>
      )}
      <div className="relative w-fit">
        <select
          value={value}
          onChange={onChange}
          className={`appearance-none ${selectClassName || ""}`}
        >
          {defaultOptionLabel && (
            <option value="" defaultValue="">
              {defaultOptionLabel}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <ChevronDown className="w-4 h-4" color={chevronColor} />
        </div>
      </div>
    </>
  );
};

export default Select;
