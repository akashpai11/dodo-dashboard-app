"use client";
import React, { use, useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Client Components:
const GraphCard = dynamic(() => import("@/components/Graphs"));
const Summary = dynamic(() => import("@/components/Summary"));

type Props = {};

const Overview = (props: Props) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/api/overview")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);

  return (
    <div className=" flex flex-col justify-between p-8 gap-x-4 ">
      <Summary />

      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all lg:grid-cols-2">
        {data?.map((graph, index) => (
          <GraphCard
            key={index}
            title={graph?.title}
            color={graph?.color}
            type={graph?.type}
          />
        ))}
      </section>
    </div>
  );
};

export default Overview;
