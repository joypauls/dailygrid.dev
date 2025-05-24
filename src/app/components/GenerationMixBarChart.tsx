"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";

const energyMixData = [
  { source: "Coal", value: 35 },
  { source: "Gas", value: 25 },
  { source: "Wind", value: 15 },
  { source: "Solar", value: 10 },
  { source: "Hydro", value: 8 },
  { source: "Nuclear", value: 7 },
];

const COLORS = {
  Coal: "#589bcc",
  Gas: "#f59d51",
  Wind: "#54cc54",
  Solar: "#e05151",
  Hydro: "#a57fc9",
  Nuclear: "#9e736a",
};

export default function GenerationMixBarChart() {
  return (
    // <div className="w-full bg-white dark:bg-zinc-900 rounded-xl shadow p-4">
    //   <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
    //     Generation Mix
    //   </h2>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={energyMixData}
        layout="vertical"
        margin={{ top: 10, right: 40, left: 40, bottom: 10 }}
      >
        <XAxis type="number" hide domain={[0, 40]} />
        <YAxis
          type="category"
          dataKey="source"
          tick={{ fill: "#000", fontSize: 12 }}
          width={80}
        />
        <Tooltip
          contentStyle={{ backgroundColor: "#111827", border: "none" }}
          labelStyle={{ color: "#e5e7eb" }}
          itemStyle={{ color: "#e5e7eb" }}
          formatter={(value: number) => `${value}%`}
        />
        <Bar dataKey="value" radius={[0, 0, 0, 0]} barSize={50}>
          {energyMixData.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[entry.source as keyof typeof COLORS]}
            />
          ))}
          <LabelList
            dataKey="value"
            position="right"
            formatter={(v) => `${v}%`}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    // </div>
  );
}
