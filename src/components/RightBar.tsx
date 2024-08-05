"use client";

import React from "react";
import Notifications, { NotificationProps } from "./Notifications";
import {
  spider,
  atSignCircle,
  bagHand,
  cabinetFiling,
  chevronsLeftRightSquare,
  targetArrow,
} from "@lucide/lab";

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

const activitiesData: any[] = [
  {
    title: "Discount details updated",
    description: "Just now",
    icon: spider,
  },
  {
    title: "Aman added a new product",
    description: "59 minutes ago",
    icon: chevronsLeftRightSquare,
  },
  {
    title: "Refunds cleared",
    description: "12 hours ago",
    icon: bagHand,
  },
  {
    title: "Tax report download completed",
    description: "Today, 11:59 AM",
    icon: cabinetFiling,
  },
  {
    title: "Product details updated",
    description: "8 hours ago",
    icon: targetArrow,
  },
];

const RightBar = (props: Props) => {
  return (
    <div className="gap-6 p-6 w-1/5 border-l-[1px] hidden lg:block ">
      <div className="flex flex-col space-y-16">
        <div className="flex flex-col gap-4">
          <section>
            <p className="text-sm dark:text-white font-semibold">
              Notifications
            </p>
          </section>
          {notificationData.map((notification, index) => (
            <Notifications key={index} {...notification} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <section>
            <p className="text-sm dark:text-white font-semibold">Activities</p>
          </section>
          {activitiesData.map((notification, index) => (
            <Notifications key={index} {...notification} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
