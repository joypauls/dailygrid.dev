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

const BASIC_COLORS = [
  "#589bcc",
  "#f59d51",
  "#54cc54",
  "#e05151",
  "#a57fc9",
  "#9e736a",
  "#dea4d8",
];

const FUN_COLORS = [
  "#4f46e5",
  "#ec4899",
  "#f97316",
  "#059669",
  "#0ea5e9",
  "#d97706",
  "#8b5cf6",
];

const COLORS = [
  // "#14532d",
  "#166534",
  "#15803d",
  "#16a34a",
  "#22c55e",
  "#4ade80",
  "#86efac",
  "#bbf7d0",
];

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload || !payload.length) return null;

  const item = payload[0].payload;
  return (
    <div className="rounded bg-white dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-800 dark:text-zinc-100 shadow">
      <div className="font-medium">{item.source}</div>
      <div>{item.percent}%</div>
      <div className="text-xs text-muted-foreground">
        {item.gigawatthours} GWh
      </div>
    </div>
  );
};

export default function GenerationMixBar({ latestMixData }: any) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const rawDataMax = Math.max(...latestMixData.map((d) => d.percent));

  // const labelColor = isDark ? "#e2e8f0" : "#334155";
  const labelColor = isDark ? "#fafafa" : "#09090b";
  const gridColor = isDark ? "#334155" : "#e2e8f0";
  const tooltipBg = isDark ? "#1e293b" : "#ffffff";
  const tooltipText = isDark ? "#f1f5f9" : "#1e293b";

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const sortedData = useMemo(
    () => latestMixData.slice().sort((a, b) => b.value - a.value),
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
          {/* <CartesianGrid
            stroke={gridColor}
            horizontal={false}
            strokeDasharray="3 3"
          /> */}
          <XAxis type="number" hide domain={[0, rawDataMax + 5]} />
          <YAxis
            type="category"
            dataKey="source"
            width={50}
            tick={({ x, y, payload, index }) => {
              // const isActive = index === activeIndex;
              return (
                <text
                  x={x}
                  y={y + 5}
                  textAnchor="end"
                  // fill={isActive ? "#10b981" : labelColor}
                  fill={labelColor}
                  // fontWeight={isActive ? 700 : 500}
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
            dataKey="percent"
            radius={[0, 0, 0, 0]}
            barSize={30}
            isAnimationActive={true}
            // onMouseEnter={(_, index) => setActiveIndex(index)}
            // onMouseLeave={() => setActiveIndex(null)}
          >
            {sortedData.map((entry, index) => {
              const baseColor = COLORS[index];
              const fill = index === activeIndex ? `${baseColor}cc` : baseColor;
              return <Cell key={`cell-${index}`} fill={fill} />;
            })}
            <LabelList
              dataKey="percent"
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
