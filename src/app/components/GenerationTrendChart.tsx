"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  DotProps,
} from "recharts";
import { useTheme } from "next-themes";

const data = [
  { date: "2025-05-19", gwh: 9801 },
  { date: "2025-05-20", gwh: 9941 },
  { date: "2025-05-21", gwh: 9934 },
  { date: "2025-05-22", gwh: 9751 },
  { date: "2025-05-23", gwh: 9469 },
  { date: "2025-05-24", gwh: 8744 },
  { date: "2025-05-25", gwh: 8653 },
];

function getNiceDomain(values: number[], padding = 200): [number, number] {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min;

  const roundedMin = Math.floor((min - padding) / 100) * 100;
  const roundedMax = Math.ceil((max + padding) / 100) * 100;

  return [roundedMin, roundedMax];
}

const renderOpenCircle = (props: DotProps) => {
  const { cx, cy, stroke } = props;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={5}
      stroke={stroke}
      strokeWidth={2}
      fill="white"
    />
  );
};

export function GenerationTrendChart() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const labelColor = isDark ? "#e2e8f0" : "#334155";
  const gridColor = isDark ? "#334155" : "#e2e8f0";
  const tooltipBg = isDark ? "#1e293b" : "#ffffff";
  const tooltipText = isDark ? "#f1f5f9" : "#1e293b";

  const yDomain = getNiceDomain(
    data.map((d) => d.gwh),
    100,
  );

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 50, left: 10, bottom: 10 }}
        >
          <CartesianGrid stroke={gridColor} strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tick={{ fill: labelColor, fontSize: 12, dy: 12 }}
            axisLine={true}
            // tickLine={false}
          />
          <YAxis
            tick={{ fill: labelColor, fontSize: 12 }}
            axisLine={true}
            // tickLine={false}
            unit=" GWh"
            domain={yDomain}
            width={100}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: tooltipBg,
              border: "none",
              borderRadius: 8,
              fontSize: "0.875rem",
              padding: "0.5rem 0.75rem",
              color: tooltipText,
            }}
            labelStyle={{ color: tooltipText }}
            formatter={(value: any) => [`${value} GWh`, "Total Generation"]}
            cursor={false}
          />
          <Line
            type="monotone"
            dataKey="gwh"
            stroke="#22c55e"
            strokeWidth={3}
            dot={renderOpenCircle}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
