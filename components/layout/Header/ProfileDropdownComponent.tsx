"use client";
import MenuDropdown from "@/components/ui/MenuDropdown";
import { ROUTES } from "@/constants";
import { useSession, signOut } from "next-auth/react";

const ProfileDropdownComponent = () => {
  const { data } = useSession();
  return (
    <MenuDropdown
      label={data?.user?.name || "John Doe"}
      menuIcon="chevron"
      actions={[
        {
          label: data?.user?.email || "demo@demo.com",
        },
        {
          label: "Logout",
          onClick: () => {
            signOut({ callbackUrl: ROUTES.LOGIN });
          },
        },
      ]}
    />
  );
};

export default ProfileDropdownComponent;