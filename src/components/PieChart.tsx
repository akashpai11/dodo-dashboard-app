import React from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart as PieGraph,
  ResponsiveContainer,
} from "recharts";

type Props = {};

const data = [
  { name: "United States", value: 38.6 },
  { name: "Canada", value: 22.5 },
  { name: "Europe", value: 30.8 },
  { name: "Other", value: 8.1 },
];

const COLORS = ["#EF8E5B", "#0B6468", "#C5FA58", "#526062"];

const PieChart = (props: Props) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieGraph width={100} height={200}>
        <Pie
          data={data}
          cornerRadius={40}
          innerRadius={60}
          outerRadius={90}
          paddingAngle={-30}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              style={{ outline: "none" }}
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        {/* <Legend
          iconSize={6}
          className="text-sm"
          payload={data.map((item, index) => ({
            id: item.name,
            type: "circle",
            value: `${item.name} (${item.value}%)`,
            color: COLORS[index % COLORS.length],
          }))}
          verticalAlign="middle"
          layout="vertical"
          align="right"
          color="#1C1C1C"
        /> */}
      </PieGraph>
    </ResponsiveContainer>
  );
};

export default PieChart;
