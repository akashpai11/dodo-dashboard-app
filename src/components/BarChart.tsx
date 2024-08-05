"use client";

import React, { useEffect, useState } from "react";
import {
  BarChart as BarGraph,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
  CartesianGrid,
  Tooltip,
} from "recharts";

type Props = {};

const data = [
  {
    name: "Youtube",
    views: 200,
    fill: "#526062",
  },
  {
    name: "Facebook",
    views: 700,
    fill: "#EF8E5B",
  },
  {
    name: "Instagram",
    views: 400,
    fill: "#0B6468",
  },
  {
    name: "Twitter",
    views: 500,
    fill: "#526062",
  },
];

const BarChart = (props: Props) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/api/chartData/bar")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);

  return (
    <ResponsiveContainer width={"100%"} height={250}>
      <BarGraph data={data}>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <XAxis
          dataKey="name"
          tickLine={false}
          stroke="#888888"
          axisLine={false}
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          stroke="#888888"
          axisLine={false}
          fontSize={12}
          tickFormatter={(value) => `${value}K`}
        />
        <Tooltip
          cursor={{ fill: "transparent" }}
          formatter={(value) => `${value}K`}
        />
        <Bar dataKey="views" radius={[4, 4, 0, 0]} barSize={20} />
      </BarGraph>
    </ResponsiveContainer>
  );
};

export default BarChart;
