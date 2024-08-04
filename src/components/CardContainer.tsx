import { cn } from "@/lib/utils";
import React from "react";

const CardContainer = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-2 rounded-2xl p-6",
        props.className
      )}
    />
  );
};

export default CardContainer;
