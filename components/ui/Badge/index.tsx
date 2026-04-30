import React from "react";
import { BadgeVariant } from "./Badge.types";
import { BADGE_VARIANTS } from "@/constants";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  label,
  variant = "default",
  className = "",
}) => {
  const baseStyles =
    "w-full h-5.5 px-2.5 py-0.5 rounded-md text-xs font-medium";

  return (
    <span className={`${baseStyles} ${BADGE_VARIANTS[variant]} ${className}`}>
      {label}
    </span>
  );
};

export default Badge;
