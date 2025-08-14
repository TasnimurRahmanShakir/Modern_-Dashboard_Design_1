import React from "react";
import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", income: 140, expense: 100 },
  { day: "Tue", income: 160, expense: 50 },
  { day: "Wed", income: 70, expense: 110 },
  { day: "Thu", income: 170, expense: 110 },
  { day: "Fri", income: 160, expense: 90 },
  { day: "Sat", income: 20, expense: 100 },
  { day: "Sun", income: 40, expense: 150 },
];

const ticks = [0, 50, 100, 150, 200];

export default function ProfitsCharts() {
  return (
    <div style={{ width: "100%", height: "300px" }}>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#5A4FCF" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#5A4FCF" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="day" />
          <YAxis ticks={ticks} />
          <Tooltip />

          {/* Horizontal dotted line for each income value */}
          {ticks.map((tick) => (
            <ReferenceLine
              key={tick}
              y={tick}
              stroke="#ccc"
              strokeDasharray="5 5"
            />
          ))}

          <Area
            type="monotone"
            dataKey="income"
            stroke="#5A4FCF"
            fill="url(#incomeGradient)"
            strokeWidth={2}
            activeDot={{ r: 6 }}
            
          />

          {/* Expense Line (Yellow) */}
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#F4B740"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
