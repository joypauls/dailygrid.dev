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
  CartesianGrid,
} from "recharts";
import { useTheme } from "next-themes";
import { useMemo, useState } from "react";

const TOTAL_MW = 100_000;

const rawData = [
  { source: "Coal", value: 35 },
  { source: "Gas", value: 25 },
  { source: "Wind", value: 15 },
  { source: "Solar", value: 10 },
  { source: "Hydro", value: 8 },
  { source: "Nuclear", value: 7 },
  { source: "Other", value: 3 },
];

const COLORS = {
  Coal: "#589bcc",
  Gas: "#f59d51",
  Wind: "#54cc54",
  Solar: "#e05151",
  Hydro: "#a57fc9",
  Nuclear: "#9e736a",
  Other: "#dea4de",
};

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload || !payload.length) return null;

  const item = payload[0].payload;
  return (
    <div className="rounded bg-white dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-800 dark:text-zinc-100 shadow">
      <div className="font-medium">{item.source}</div>
      <div>{item.value}%</div>
      <div className="text-xs text-muted-foreground">
        {item.mw.toLocaleString()} MW
      </div>
    </div>
  );
};

export default function GenerationMixBar() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const labelColor = isDark ? "#e2e8f0" : "#334155";
  const gridColor = isDark ? "#334155" : "#e2e8f0";
  const tooltipBg = isDark ? "#1e293b" : "#ffffff";
  const tooltipText = isDark ? "#f1f5f9" : "#1e293b";

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const sortedData = useMemo(
    () =>
      rawData
        .slice()
        .sort((a, b) => b.value - a.value)
        .map((d) => ({
          ...d,
          mw: Math.round((d.value / 100) * TOTAL_MW),
        })),
    [],
  );

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={sortedData}
          layout="vertical"
          barCategoryGap="12%"
          margin={{ top: 10, right: 24, left: 60, bottom: 10 }}
        >
          <CartesianGrid
            stroke={gridColor}
            horizontal={false}
            strokeDasharray="3 3"
          />
          <XAxis type="number" hide domain={[0, 40]} />
          <YAxis
            type="category"
            dataKey="source"
            width={35}
            tick={({ x, y, payload, index }) => {
              const isActive = index === activeIndex;
              return (
                <text
                  x={x}
                  y={y + 5}
                  textAnchor="end"
                  fill={isActive ? "#10b981" : labelColor}
                  fontWeight={isActive ? 700 : 500}
                  fontSize={14}
                >
                  {payload.value}
                </text>
              );
            }}
          />
          {/* <Tooltip
            contentStyle={{
              backgroundColor: tooltipBg,
              color: tooltipText,
              border: "none",
              borderRadius: 8,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              fontSize: "0.875rem",
              padding: "0.5rem 0.75rem",
            }}
            labelStyle={{ display: "none" }}
            itemStyle={{ color: tooltipText }}
            formatter={(_: any, __: any, item: any) => {
              const mw = item?.payload?.mw ?? 0;
              return [`${item.payload.value}% ${mw.toLocaleString()} MW`, ""];
            }}
          /> */}
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="value"
            radius={[0, 0, 0, 0]}
            barSize={30}
            isAnimationActive={true}
            // onMouseEnter={(_, index) => setActiveIndex(index)}
            // onMouseLeave={() => setActiveIndex(null)}
          >
            {sortedData.map((entry, index) => {
              const baseColor = COLORS[entry.source as keyof typeof COLORS];
              const fill = index === activeIndex ? `${baseColor}cc` : baseColor;
              return <Cell key={`cell-${index}`} fill={fill} />;
            })}
            <LabelList
              dataKey="value"
              position="right"
              formatter={(v) => `${v}%`}
              fill={labelColor}
              fontSize={13}
              fontWeight={500}
              offset={8}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
