"use client";

import { Rocket, StarIcon } from "lucide-react";
import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

type Props = {};

const Breadcrumbs = (props: Props) => {
  const pathName = usePathname();
  console.log(pathName);

  const [starColor, setStarColor] = useState("black");

  const updateStarColor = () => {
    setStarColor(starColor === "black" ? "yellow" : "black");
  };

  const pathNameTransformed = (pathName: string) => {
    return pathName
      .split("/")
      .filter((segment) => segment)
      .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join(" ");
  };

  return (
    <div className="flex justify-center items-center gap-4">
      {/* add icon */}
      <div className="flex gap-2">
        <Rocket size={26} strokeWidth={1.5} />
        <StarIcon
          color={starColor}
          size={26}
          strokeWidth={1.5}
          onClick={updateStarColor}
        />
      </div>

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Pages</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{pathNameTransformed(pathName)}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
