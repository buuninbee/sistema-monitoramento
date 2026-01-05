"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
  { status: "Risco", krs: 29, fill: "#F31260" },
  { status: "Atenção", krs: 69, fill: "#F5A524" },
  { status: "Segurança", krs: 85, fill: "#17C964" },
];

const chartConfig = {
  krs: {
    label: "krs",
  },
  risco: {
    label: "Risco",
  },
  atencao: {
    label: "Atenção",
  },
  seguranca: {
    label: "Segurança",
  },
};

export default function ChartPieDonutText() {
  const totalkrs = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.krs, 0);
  }, []);

  return (
    <div className="flex min-h-75 py-3 rounded-lg flex-col bg-linear-to-b from-[#000000] via-[#06090f] to-[#05060a] text-white border-0">
      <div className="grid gap-6 px-4 items-center pb-0">
        <div className="">
          <h2 className="text-lg pb-1">Distribuição dos KRs por Percentual</h2>
          <p className="text-sm ">2025</p>
        </div>
      </div>
      <div className="flex-1 pb-0 ">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square">
          <PieChart className="">
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="krs"
              nameKey="status"
              innerRadius={100}
              strokeWidth={5}
              // endAngle={180}
            >
              <Label
                className=""
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="text-3xl font-bold fill-white"
                        >
                          {totalkrs.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-white text-lg"
                        >
                          krs
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <div>
          <ul className="flex justify-center gap-9">
            <li className="grid items-center text-center">
              <p className="text-sm before:mr-1.5 before:bg-[#17C964] before:w-3 before:h-3 before:inline-block before:rounded-2xl">
                Segurança
              </p>
              <span className="text-lg">{((chartData[2].krs * 100) / totalkrs).toFixed(1)}%</span>
            </li>
            <li className="grid items-center text-center">
              <p className="text-sm before:mr-1.5 before:bg-[#F5A524] before:w-3 before:h-3 before:inline-block before:rounded-2xl">
                Atenção
              </p>
              <span className="text-lg">{((chartData[1].krs * 100) / totalkrs).toFixed(1)}%</span>
            </li>
            <li className="grid items-center text-center">
              <p className="text-sm before:mr-1.5 before:bg-[#F31260] before:w-3 before:h-3 before:inline-block before:rounded-2xl">
                Segurança
              </p>
              <span className="text-lg">{((chartData[0].krs * 100) / totalkrs).toFixed(1)}%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
