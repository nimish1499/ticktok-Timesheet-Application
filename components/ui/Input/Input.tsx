import React from "react";
import { InputProps } from "./Input.types";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    return (
      <div className="w-full">
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-gray-900 mb-2"
        >
          {label}
        </label>
        <input
          ref={ref}
          className={`
            w-full h-10.5 px-4 py-3 border rounded-lg text-sm font-normal text-gray-900 leading-5 tracking-normal align-middle
            placeholder-gray-500 transition-colors duration-200
            ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300"}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
            {error.message}
          </p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
