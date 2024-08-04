"use client";
import React from "react";
import CardContainer from "./CardContainer";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import PieChart from "./PieChart";

type GraphProps = {
  color?: string;
  title: string;
  type?: string;
};

const GraphCard = (props: GraphProps) => {
  return (
    <CardContainer style={{ backgroundColor: props.color }}>
      <section>
        <p className="text-sm dark:text-black font-semibold">{props.title}</p>
      </section>

      <section className="flex items-center justify-between">
        {props.type === "bar" && <BarChart />}
        {props.type === "line" && <LineChart />}
        {props.type === "pie" && <PieChart />}
      </section>
    </CardContainer>
  );
};

export default GraphCard;
