export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  label?: string | React.ReactNode;
  selectClassName?: string;
  chevronColor?: string;
  defaultOptionLabel?: string;
}