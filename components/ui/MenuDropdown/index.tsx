"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Ellipsis } from "lucide-react";
import { ActionItem } from "./MenuDropdown.types";

type MenuProps = {
  actions: ActionItem[];
  label?: string;
  menuIcon?: "ellipsis" | "chevron";
};

const MenuDropdown = ({ actions, label, menuIcon = "chevron" }: MenuProps) => {
  return (
    <DropdownMenu.Root>
      {/* Trigger */}
      <DropdownMenu.Trigger className="flex items-center gap-1 outline-0 cursor-pointer">
        {label && (
          <span className="font-medium text-base text-gray-500 leading-normal">
            {label}
          </span>
        )}

        {menuIcon === "ellipsis" ? (
          <Ellipsis className="ml-1.5 w-4" color="#6B7280" />
        ) : (
          <ChevronDown className="w-3 h-3" color="#6B7280" />
        )}
      </DropdownMenu.Trigger>

      {/* Content */}
      <DropdownMenu.Content
        align="end"
        sideOffset={6}
        className="min-w-28 bg-white py-1 shadow-dropdown rounded-md"
      >
        {actions.map((action, index) => (
          <DropdownMenu.Item
            key={index}
            onClick={action.onClick}
            className={`px-4 py-2 text-sm text-gray-700 font-normal cursor-pointer outline-none hover:bg-gray-100 ${action.className || ""}`}
          >
            {action.label}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default MenuDropdown;