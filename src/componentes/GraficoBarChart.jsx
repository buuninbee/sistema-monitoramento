import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
// import { RechartsDevtools } from "@recharts/devtools";

// #region Sample data
const data = [
  { name: "Jan", atencao: 45, seguranca: 65, risco: 20 },
  { name: "Fev", atencao: 50, seguranca: 60, risco: 25 },
  { name: "Mar", atencao: 55, seguranca: 70, risco: 22 },
  { name: "Abr", atencao: 48, seguranca: 68, risco: 30 },
  { name: "Mai", atencao: 52, seguranca: 72, risco: 28 },
  { name: "Jun", atencao: 58, seguranca: 75, risco: 26 },
  { name: "Jul", atencao: 60, seguranca: 78, risco: 24 },
  { name: "Ago", atencao: 57, seguranca: 74, risco: 29 },
  { name: "Set", atencao: 54, seguranca: 70, risco: 32 },
  { name: "Out", atencao: 50, seguranca: 68, risco: 35 },
  { name: "Nov", atencao: 47, seguranca: 66, risco: 38 },
  { name: "Dez", atencao: 42, seguranca: 64, risco: 40 },
];

// #endregion
const GraficoBarCharts = () => {
  return (
    <BarChart
      style={{
        width: "100%",
        maxWidth: "1200px",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      data={data}
      margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis domain={[0, 80]} />
      <Tooltip />
      <Legend />

      <Bar dataKey="risco" name="Risco" fill="#F31260" />

      <Bar dataKey="atencao" name="Atenção" fill="#F5A524" />

      <Bar dataKey="seguranca" name="Segurança" fill="#17C964" />
    </BarChart>
  );
};

export default GraficoBarCharts;
