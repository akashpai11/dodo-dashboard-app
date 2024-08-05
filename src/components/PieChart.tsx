import React, { useEffect, useState } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart as PieGraph,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

type Props = {};

const COLORS = ["#EF8E5B", "#0B6468", "#C5FA58", "#526062"];

const PieChart = (props: Props) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/api/chartData/pie")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);

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
        <Tooltip />
        <Legend
          iconType="circle"
          iconSize={6}
          formatter={(value, entry, index) => (
            <span className="text-dodoText text-sm">{value}</span>
          )}
        />
      </PieGraph>
    </ResponsiveContainer>
  );
};

export default PieChart;
