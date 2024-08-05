"use client";

import React from "react";
import { Nav } from "@/components/ui/nav";

import {
  Archive,
  Briefcase,
  Building2,
  DollarSign,
  File,
  FileArchive,
  RocketIcon,
  Settings,
  Trash2,
  UsersRound,
} from "lucide-react";
import Favorites from "@/components/Favorites";
import NameBadge from "@/components/NameBadge";
import Image from "next/image";
import { dollarSignCircle } from "@lucide/lab";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="hidden lg:block gap-4 p-4 w-1/5">
      <div className="flex flex-col">
        <div>
          <div className="py-3">
            <NameBadge
              username="Akash Pai"
              src="https://github.com/shadcn.png"
            />
          </div>
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
                  title: "Product Catalog",
                  icon: Trash2,
                  variant: "ghost",
                  href: "/trash",
                  children: [
                    {
                      title: "Overview",
                      href: "/overview",
                    },
                    {
                      title: "Products",
                      href: "/products",
                    },
                    {
                      title: "Discounts",
                      href: "/discounts",
                    },
                    {
                      title: "Taxable Items",
                      href: "/taxable",
                    },
                  ],
                },
                {
                  title: "Reports",
                  icon: FileArchive,
                  variant: "ghost",
                  href: "/reports",
                  children: [
                    {
                      title: "Convert report",
                      href: "/convert-report",
                    },
                    {
                      title: "Download",
                      href: "/products",
                    },
                  ],
                },
                {
                  title: "Checkout",
                  icon: Briefcase,
                  variant: "ghost",
                  href: "/checkout",
                  children: [
                    {
                      title: "Payments",
                      href: "/payments",
                    },
                  ],
                },
                {
                  title: "Business Account",
                  icon: Building2,
                  variant: "ghost",
                  href: "/business",
                  children: [
                    {
                      title: "Account Details",
                      href: "/business/account",
                    },
                  ],
                },
                {
                  title: "Developer Tools",
                  icon: Settings,
                  variant: "ghost",
                  href: "/checkout",
                  children: [
                    {
                      title: "Edit settings",
                      href: "/settings",
                    },
                  ],
                },
              ]}
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/dodo.svg"
              width={120}
              height={120}
              alt="Dodo Payments"
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
