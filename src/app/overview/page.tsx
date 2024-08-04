"use client";
import React from "react";
import dynamic from "next/dynamic";

// Client Components:
const GraphCard = dynamic(() => import("@/components/Graphs"));
const Summary = dynamic(() => import("@/components/Summary"));

type Props = {};

const graphData = [
  {
    title: "Revenue",
    color: "#F7F9FB",
    type: "line",
  },
  {
    title: "Revenue",
    color: "#F7F9FB",
    type: "line",
  },
  {
    title: "Revenue",
    color: "#F7F9FB",
    type: "pie",
  },
  {
    title: "Revenue",
    color: "#F7F9FB",
    type: "bar",
  },
];

const Overview = (props: Props) => {
  return (
    <div className=" flex flex-col justify-between p-8 gap-x-4 ">
      <Summary />

      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all lg:grid-cols-2">
        {graphData.map((graph, index) => (
          <GraphCard
            key={index}
            title={graph.title}
            color={graph.color}
            type={graph.type}
          />
        ))}
      </section>
    </div>
  );
};

export default Overview;
