"use client";

import React from "react";
import Notifications, { NotificationProps } from "./Notifications";
import { spider, atSignCircle } from "@lucide/lab";
import { useWindowWidth } from "@react-hook/window-size";

type Props = {};

const notificationData: NotificationProps[] = [
  {
    title: "You have an issue that needed",
    description: "Just now",
    icon: spider,
  },
  {
    title: "New team member joined",
    description: "59 minutes ago",
    icon: atSignCircle,
  },
  {
    title: "New product feature available",
    description: "12 hours ago",
    icon: spider,
  },
  {
    title: "You have an issue that needed",
    description: "Today, 11:59 AM",
    icon: spider,
  },
];

const RightBar = (props: Props) => {
  const onlyWidth = useWindowWidth();
  console.log("ONLY WIDTH", onlyWidth);

  const mobile = onlyWidth < 841;
  console.log("MOBILE RIGHTBAR", mobile);

  return (
    <div
      className={`flex flex-col space-y-16 gap-6 p-6 w-1/5 border-l-[1px] ${
        mobile ? "hidden" : "lg:block"
      }`}
    >
      <div className="flex flex-col gap-4">
        <section>
          <p className="text-sm dark:text-white font-semibold">Notifications</p>
        </section>
        {notificationData.map((notification, index) => (
          <Notifications key={index} {...notification} />
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <section>
          <p className="text-sm dark:text-white font-semibold">Activities</p>
        </section>
        {notificationData.map((notification, index) => (
          <Notifications key={index} {...notification} />
        ))}
      </div>
    </div>
  );
};

export default RightBar;
