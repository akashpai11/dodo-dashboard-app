import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type NameBadgeProps = {
  username: string;
  src: string;
  initials?: string;
};

const NameBadge = (props: NameBadgeProps) => {
  return (
    <div className="flex gap-2 items-center">
      <Avatar>
        <AvatarImage src={props.src} alt="@shadcn" />
        <AvatarFallback>{props.initials}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-normal text-dodoText dark:text-white text-sm">
          {props.username}
        </p>
      </div>
    </div>
  );
};

export default NameBadge;
