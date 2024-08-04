"use client";

import React from "react";
import { Nav } from "@/components/ui/nav";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import {
  Archive,
  ArchiveX,
  DollarSign,
  File,
  RocketIcon,
  Send,
  Trash2,
  UsersRound,
} from "lucide-react";
import Favorites from "@/components/Favorites";
import NameBadge from "@/components/NameBadge";

type Props = {};

const Sidebar = (props: Props) => {
  const onlyWidth = useWindowWidth();
  const mobile = onlyWidth < 841;

  return (
    <div
      className={`flex flex-col gap-4 p-4 w-1/5 ${
        mobile ? "hidden" : "lg:block"
      }`}
    >
      <NameBadge username="Akash Pai" src="https://github.com/shadcn.png" />
      <Favorites />

      <div>
        <p className="text-dodoText/[0.4] text-sm dark:text-gray-400 font-normal ml-2">
          Pages
        </p>
        <Nav
          isCollapsed={false}
          links={[
            {
              title: "Overview",
              icon: RocketIcon,
              variant: "ghost",
              href: "/overview",
            },
            {
              title: "Transactions",
              icon: DollarSign,
              variant: "ghost",
              href: "/transactions",
            },
            {
              title: "Invoices",
              icon: File,
              variant: "ghost",
              href: "/sent",
            },
            {
              title: "Customers",
              icon: UsersRound,
              variant: "ghost",
              href: "/junk",
            },
            {
              title: "Trash",
              icon: Trash2,
              variant: "ghost",
              href: "/trash",
            },
            {
              title: "Archive",
              icon: Archive,
              variant: "ghost",
              href: "/archive",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Sidebar;
