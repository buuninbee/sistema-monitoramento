import React from "react";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import iconAtencao from "@/assets/icon-atencao.svg";
import iconRisco from "@/assets/icon-risco.svg";
import iconSeguranca from "@/assets/icon-seguranca.svg";
import iconTotal from "@/assets/icon-total.svg";
import GraficoBarCharts from "@/componentes/GraficoBarChart";

const DashboardKrs = () => {
  return (
    <main>
      <section className="grid gap-3 px-5 py-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="@container/card bg-linear-to-b from-[#080808] via-[#141212] to-[#2b0311] text-white border-[#F31260]">
          <div className="flex px-6 lg:px-10">
            <div className="bg-(--primario-50) max-w-max rounded-xl">
              <img src={iconRisco} alt="" />
            </div>
            <CardHeader>
              <CardDescription className="text-[#F31260] text-xl lg:text-2xl font-bold">
                Risco
              </CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                29
              </CardTitle>
            </CardHeader>
          </div>
        </Card>

        <Card className="@container/card bg-linear-to-b from-[#080808] via-[#141212] to-[#2c1e06] border-[#F5A524] text-white">
          <div className="flex px-6 lg:px-10">
            <div className="bg-(--primario-50) px-2.5 py-2 max-w-max rounded-xl">
              <img src={iconAtencao} alt="" />
            </div>
            <CardHeader>
              <CardDescription className="text-[#F5A524] text-xl lg:text-2xl font-bold">
                Atenção
              </CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                69
              </CardTitle>
              <CardAction></CardAction>
            </CardHeader>
          </div>
        </Card>

        <Card className="@container/card bg-linear-to-b from-[#080808] via-[#141212]  to-[#052b15] border-[#17C964] text-white">
          <div className="flex px-6 lg:px-10">
            <div className="bg-(--primario-50) px-2.5 py-2.5 max-w-max rounded-xl">
              <img src={iconSeguranca} alt="" />
            </div>
            <CardHeader>
              <CardDescription className="text-[#17C964] text-xl lg:text-2xl w-2xs font-bold">
                Segurança
              </CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                85
              </CardTitle>
              <CardAction></CardAction>
            </CardHeader>
          </div>
        </Card>

        <Card className="@container/card bg-linear-to-b from-[#080808] via-[#141212]  to-[#031c38] border-[#006FEE] text-white">
          <div className="flex px-6 lg:px-10">
            <div className="bg-(--primario-50) px-2.5 py-2 max-w-max rounded-xl">
              <img src={iconTotal} alt="" />
            </div>
            <CardHeader>
              <CardDescription className="text-(--terciario-200) w-2xs text-xl lg:text-2xl font-bold">
                Total de Krs
              </CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                183
              </CardTitle>
            </CardHeader>
          </div>
        </Card>
      </section>

      <section>
        <GraficoBarCharts />
      </section>
    </main>
  );
};

export default DashboardKrs;
