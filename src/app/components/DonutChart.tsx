"use client";

import { useState } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const energyMixData = [
  { source: "Coal", value: 35 },
  { source: "Gas", value: 25 },
  { source: "Wind", value: 15 },
  { source: "Solar", value: 10 },
  { source: "Hydro", value: 8 },
  { source: "Nuclear", value: 7 },
];

const COLORS = [
  "#589bcc",
  "#f59d51",
  "#54cc54",
  "#e05151",
  "#a57fc9",
  "#9e736a",
];

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={fill}
        className="font-regular"
      >
        {payload.source}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 5}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`${value} %`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default function GenerationMixDonut() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <text
          x="2%"
          y="5%"
          textAnchor="left"
          dominantBaseline="left"
          className="font-semibold text-lg dark:text-white"
        >
          Energy Mix
        </text>
        <text
          x="2%"
          y="10%"
          textAnchor="left"
          dominantBaseline="left"
          className="font-normal text-sm !text-muted-foreground"
        >
          Percentage of Energy Sources
        </text>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={energyMixData}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={handlePieEnter}
          nameKey="source"
          paddingAngle={3}
          startAngle={90}
          endAngle={-270}
          // style={{ outline: "none" }}
        >
          {energyMixData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              // stroke="#fff"
              strokeWidth={0}
              // style={{
              //   // filter: `drop-shadow(0px 0px 5px ${COLORS[index % COLORS.length]}`,
              //   // outline: "none",
              //   // border: "none",
              // }}
            />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </ResponsiveContainer>
  );
}
