import React from "react";
import { CheckboxProps } from "./Checkbox.types";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <div className="w-full">
        <label
          htmlFor={props.id}
          className="flex items-center gap-2 text-sm font-medium text-gray-500 align-middle"
        >
          <input
            ref={ref}
            type="checkbox"
            className={`
              h-4 w-4 rounded border-[0.5px] accent-blue-600 border-gray-300 text-gray-50 transition
              ${className}
            `}
            {...props}
          />
          <span>{label}</span>
        </label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";