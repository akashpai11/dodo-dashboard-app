import React from "react";
import {
  LineChart as LineGraph,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Props = {
  lineData: [];
  type: string;
};

const convertToK = (num: number): string =>
  num >= 1000 ? `${(num / 1000).toFixed(0)}K` : num.toString();

const LineChart = (props: Props) => {
  return (
    <ResponsiveContainer width={"100%"} height={250}>
      {props.type === "lineRevenue" ? (
        <LineGraph data={props.lineData}>
          <XAxis
            dataKey="name"
            tickLine={false}
            stroke="#1C1C1C"
            axisLine={false}
            fontSize={12}
          />
          <YAxis
            tickLine={false}
            stroke="#888888"
            axisLine={false}
            fontSize={12}
            tickFormatter={(value) => `$${value}K`}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#1C1C1C"
            activeDot={{ r: 4 }}
            strokeWidth={2}
            dot={false}
          />
        </LineGraph>
      ) : (
        <LineGraph data={props.lineData}>
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
            tickFormatter={(value) => `${convertToK(value)}`}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#1C1C1C"
            activeDot={{ r: 4 }}
            strokeWidth={2}
            dot={false}
          />
        </LineGraph>
      )}
    </ResponsiveContainer>
  );
};
export default LineChart;
