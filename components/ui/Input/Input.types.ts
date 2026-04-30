import { FieldError } from "react-hook-form";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
  helperText?: string;
}