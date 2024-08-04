import React from "react";
import CardContainer from "./CardContainer";
import { Icon, LucideIcon } from "lucide-react";
import { burger } from "@lucide/lab";

import { IconNode } from "lucide-react";

export type NotificationProps = {
  title: string;
  description: string;
  color?: string;
  icon: IconNode;
};

const Notifications = (props: NotificationProps) => {
  return (
    <div className="flex flex-wrap justify-between gap-3">
      <section className="flex justify-between gap-3">
        <div className="h-6 w-6 rounded-md bg-[#E3F5FF] p-1 dark:bg-transparent">
          <Icon iconNode={props.icon} size={16} strokeWidth={1.5} />
        </div>
        <div className="text-sm">
          <p className="text-sm text-ellipsis overflow-hidden whitespace-nowrap w-5/6 hover:text-wrap">
            {props.title}
          </p>
          <div className="text-xs text-dodoText/40 dark:text-gray-600">
            {props.description}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notifications;
