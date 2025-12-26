import { Pie, PieChart } from "recharts";

const data = [
  { name: "Risco", value: 15.83, fill: "#F31260" },
  { name: "Atenção", value: 37.77, fill: "#F5A524" },
  { name: "Segurança", value: 46.44, fill: "#17C964" },
];

// #endregion
export default function StraightAnglePieChart({ isAnimationActive = true }) {
  return (
    <PieChart
      style={{ width: "100%", maxWidth: "500px", maxHeight: "80vh", aspectRatio: 2 }}
      responsive
    >
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx="50%"
        cy="100%"
        outerRadius="120%"
        label
        isAnimationActive={isAnimationActive}
      />
    </PieChart>
  );
}
