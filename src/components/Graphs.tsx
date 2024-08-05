"use client";
import React, { useEffect, useState } from "react";
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
  const [lineData, setlineData] = useState<[]>([]);
  const [transaction, setTransaction] = useState<[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/api/chartData/line/revenue")
        .then((res) => res.json())
        .then((data) => {
          setlineData(data);
        })
        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/api/chartData/line/transaction")
        .then((res) => res.json())
        .then((data) => {
          setTransaction(data);
        })
        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);

  return (
    <CardContainer style={{ backgroundColor: props.color }}>
      <section>
        <p className="text-sm dark:text-black font-semibold">{props.title}</p>
      </section>

      <section className="flex items-center justify-between">
        {props.type === "bar" && <BarChart />}
        {props.type === "lineRevenue" && (
          <LineChart lineData={lineData} type={props.type} />
        )}

        {props.type === "lineTransaction" && (
          <LineChart lineData={transaction} type={props.type} />
        )}
        {props.type === "pie" && <PieChart />}
      </section>
    </CardContainer>
  );
};

export default GraphCard;
