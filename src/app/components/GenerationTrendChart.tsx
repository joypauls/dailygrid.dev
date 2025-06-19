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

// const data = [
//   { date: "2025-05-19", gwh: 9801 },
//   { date: "2025-05-20", gwh: 9941 },
//   { date: "2025-05-21", gwh: 9934 },
//   { date: "2025-05-22", gwh: 9751 },
//   { date: "2025-05-23", gwh: 9469 },
//   { date: "2025-05-24", gwh: 8744 },
//   { date: "2025-05-25", gwh: 8653 },
// ];

function getNiceDomain(values: number[], padding = 200): [number, number] {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min;

  const roundedMin = Math.floor((min - padding) / 100) * 100;
  const roundedMax = Math.ceil((max + padding) / 100) * 100;

  return [roundedMin, roundedMax];
}

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload || !payload.length) return null;

  const item = payload[0].payload;
  return (
    <div className="rounded bg-white dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-800 dark:text-zinc-100 shadow">
      {/* <div className="font-medium">{item.source}</div> */}
      <div>{item.date}</div>
      <div>{item.gigawatthours} GWh</div>
      {/* <div className="text-xs text-muted-foreground">
        {item.gigawatthours} GWh
      </div> */}
    </div>
  );
};

export function GenerationTrendChart({ historyData }: any) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const labelColor = isDark ? "#e2e8f0" : "#334155";
  const gridColor = isDark ? "#27272a" : "#e2e8f0";
  const tooltipBg = isDark ? "#1e293b" : "#ffffff";
  const tooltipText = isDark ? "#f1f5f9" : "#1e293b";
  const fillColor = isDark ? "#121216" : "#ffffff";

  const yDomain = getNiceDomain(
    historyData.map((d: any) => d.gigawatthours),
    100,
  );

  const renderDot = (props: DotProps) => {
    const { cx, cy, stroke } = props;
    return (
      <circle
        cx={cx}
        cy={cy}
        r={5}
        stroke={stroke}
        strokeWidth={2}
        fill={fillColor}
      />
    );
  };

  // const renderSquareDot = (props: any) => {
  //   const { cx, cy, stroke, payload } = props;
  //   return (
  //     <rect
  //       x={cx - 5}
  //       y={cy - 5}
  //       width={10}
  //       height={10}
  //       fill="white" // or dynamic based on theme
  //       stroke={stroke}
  //       strokeWidth={2}
  //       rx={2} // optional: slightly rounded corners
  //     />
  //   );
  // };

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={historyData}
          margin={{ top: 10, right: 70, left: 10, bottom: 10 }}
        >
          {/* <CartesianGrid stroke={gridColor} strokeDasharray="3 3" /> */}
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
            // domain={yDomain}
            domain={["auto", "auto"]}
            width={90}
            tickCount={5}
            padding={{ top: 20, bottom: 20 }}
          />
          <Tooltip content={<CustomTooltip />} cursor={true} />
          <Line
            type="monotone"
            dataKey="gigawatthours"
            stroke="#22c55e"
            strokeWidth={3}
            dot={renderDot}
            // dot={renderSquareDot}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
