import React from "react";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import iconAtencao from "@/assets/icon-atencao.svg";
import iconRisco from "@/assets/icon-risco.svg";
import iconSeguranca from "@/assets/icon-seguranca.svg";
import iconTotal from "@/assets/icon-total.svg";
import GraficoBarCharts from "@/componentes/GraficoBarChart";
import GraficoPieChats from "@/componentes/GraficoPieCharts";
import Tabela from "@/componentes/TabelaDirecao";
// import TabelaDetalhamento from "@/componentes/Tabeladetalhamentokr";

import { BrowserRouter, NavLink, Route, Routes } from "react-router";

import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Datatabela from "@/componentes/datatable/dados-columns";

const krs = [
  {
    kr: "1.1.1",
    descricao: "Ampliar a arrecadação em cursos técnicos",
    area: "DEP",
    email: "responsavel.dep@empresa.com",
    score: 38,
    planAcumulado: 100,
    execAcumulado: 35,
    status: "risco",
  },
  {
    kr: "1.1.2",
    descricao: "Expandir parcerias com instituições privadas",
    area: "PO",
    email: "responsavel.po@empresa.com",
    score: 55,
    planAcumulado: 100,
    execAcumulado: 52,
    status: "atencao",
  },
  {
    kr: "1.2.1",
    descricao: "Aumentar matrículas em cursos EAD",
    area: "TI",
    email: "responsavel.ti@empresa.com",
    score: 72,
    planAcumulado: 100,
    execAcumulado: 70,
    status: "atencao",
  },
  {
    kr: "1.2.2",
    descricao: "Reduzir inadimplência dos alunos",
    area: "DEP",
    email: "financeiro@empresa.com",
    score: 49,
    planAcumulado: 100,
    execAcumulado: 45,
    status: "risco",
  },
  {
    kr: "1.2.3",
    descricao: "Alcançar o recebimento líquido de R$ 4.455.502,65",
    area: "DEP",
    email: "gestor.dep@empresa.com",
    score: 45,
    planAcumulado: 100,
    execAcumulado: 42,
    status: "risco",
  },
  {
    kr: "2.1.1",
    descricao: "Reduzir evasão acadêmica",
    area: "PO",
    email: "coordenacao@empresa.com",
    score: 60,
    planAcumulado: 100,
    execAcumulado: 58,
    status: "atencao",
  },
  {
    kr: "2.1.2",
    descricao: "Aumentar taxa de conclusão dos cursos",
    area: "PO",
    email: "educacional@empresa.com",
    score: 88,
    planAcumulado: 100,
    execAcumulado: 85,
    status: "atencao",
  },
  {
    kr: "2.2.1",
    descricao: "Melhorar desempenho acadêmico médio",
    area: "PO",
    email: "avaliacao@empresa.com",
    score: 100,
    planAcumulado: 100,
    execAcumulado: 100,
    status: "seguranca",
  },
  {
    kr: "2.2.2",
    descricao: "Ampliar uso de metodologias ativas",
    area: "PO",
    email: "metodologias@empresa.com",
    score: 97,
    planAcumulado: 100,
    execAcumulado: 95,
    status: "atencao",
  },
  {
    kr: "3.1.1",
    descricao: "Modernizar infraestrutura de laboratórios",
    area: "TI",
    email: "infra.ti@empresa.com",
    score: 42,
    planAcumulado: 100,
    execAcumulado: 40,
    status: "risco",
  },
  {
    kr: "3.1.2",
    descricao: "Atualizar equipamentos tecnológicos",
    area: "TI",
    email: "suporte.ti@empresa.com",
    score: 66,
    planAcumulado: 100,
    execAcumulado: 63,
    status: "atencao",
  },
  {
    kr: "3.2.1",
    descricao: "Aumentar satisfação dos docentes",
    area: "PO",
    email: "rh@empresa.com",
    score: 91,
    planAcumulado: 100,
    execAcumulado: 90,
    status: "atencao",
  },
  {
    kr: "3.2.2",
    descricao: "Reduzir rotatividade de professores",
    area: "PO",
    email: "gestao.pessoas@empresa.com",
    score: 100,
    planAcumulado: 100,
    execAcumulado: 100,
    status: "seguranca",
  },
  {
    kr: "3.2.3",
    descricao: "Ampliar taxa de ocupação das turmas",
    area: "DEP",
    email: "planejamento@empresa.com",
    score: 68,
    planAcumulado: 100,
    execAcumulado: 65,
    status: "atencao",
  },
  {
    kr: "4.1.1",
    descricao: "Fortalecer presença digital institucional",
    area: "TI",
    email: "marketing.digital@empresa.com",
    score: 53,
    planAcumulado: 100,
    execAcumulado: 50,
    status: "atencao",
  },
  {
    kr: "4.1.2",
    descricao: "Aumentar captação por campanhas digitais",
    area: "TI",
    email: "campanhas@empresa.com",
    score: 99,
    planAcumulado: 100,
    execAcumulado: 97,
    status: "atencao",
  },
  {
    kr: "4.2.1",
    descricao: "Melhorar comunicação com alunos",
    area: "JUR",
    email: "ouvidoria@empresa.com",
    score: 47,
    planAcumulado: 100,
    execAcumulado: 45,
    status: "risco",
  },
  {
    kr: "5.1.1",
    descricao: "Aprimorar processos administrativos",
    area: "DEP",
    email: "processos@empresa.com",
    score: 58,
    planAcumulado: 100,
    execAcumulado: 55,
    status: "atencao",
  },
  {
    kr: "5.1.2",
    descricao: "Reduzir tempo de atendimento ao aluno",
    area: "DEP",
    email: "atendimento@empresa.com",
    score: 74,
    planAcumulado: 100,
    execAcumulado: 72,
    status: "atencao",
  },
  {
    kr: "5.1.4",
    descricao: "Melhorar satisfação dos alunos com serviços",
    area: "DEP",
    email: "experiencia@empresa.com",
    score: 100,
    planAcumulado: 100,
    execAcumulado: 100,
    status: "seguranca",
  },
];

const DashboardKrs = () => {
  return (
    <>
      <main className=" flex-1 overflow-auto p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6 bg-[#0a0a0a] w-full">
        <header className="bg-[#171717]  text-white h-24 rounded-bl-4xl w-full px-8 py-7 flex mb-3">
          <nav className="flex justify-between items-center-safe w-full">
            <div className="flex gap items-center">
              <div className="flex gap-1 items-center">
                <SidebarTrigger className="-ml-1 text-(--terciario-200)" />
                <Separator
                  orientation="vertical"
                  className="mr-3 data-[orientation=vertical]:h-8"
                />
              </div>
              <NavLink to="/adm/pedidos">
                {/* <img className="w-36 h-auto" src={Logo} alt="logo waiter"/> */} NUPIE
              </NavLink>
            </div>

            <div
              className="flex 
            gap-7"
            >
              <button className=" bg-(--terciario-300) py-2.5 px-2.5 rounded-full">
                {/* <img src={impressroa} alt="" /> */} Final
              </button>
            </div>
          </nav>
        </header>
        <section className="grid px-4 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="@container/card bg-linear-to-br from-[#080808] via-[#080808] to-[#2b0311] text-white border-2 border-neutral-800">
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

          <Card className="@container/card bg-linear-to-br from-[#080808] via-[#080808] to-[#2c1e06] border-2 border-neutral-800 text-white">
            <div className="flex px-6 lg:px-10">
              <div className="bg-(--primario-50) max-w-max rounded-xl">
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

          <Card className="@container/card bg-linear-to-br from-[#080808] via-[#080808]  to-[#052b15] border-2 border-neutral-800 text-white">
            <div className="flex px-6 lg:px-10">
              <div className="bg-(--primario-50) max-w-max rounded-xl">
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

          <Card className="@container/card bg-linear-to-br from-[#080808] via-[#080808]  to-[#031c38] border-2 border-neutral-800 text-white">
            <div className="flex px-6 lg:px-10">
              <div className="bg-(--primario-50) max-w-max rounded-xl">
                <img src={iconTotal} alt="" />
              </div>
              <CardHeader>
                <CardDescription className="text-[#006FEE] w-2xs text-xl lg:text-2xl font-bold">
                  Total de Krs
                </CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  183
                </CardTitle>
              </CardHeader>
            </div>
          </Card>
        </section>

        <section className="flex px-4 justify-between gap-6">
          <GraficoBarCharts />
          <div className="grid justify-center min-w-100 gap-2">
            <GraficoPieChats />
            <Tabela />
          </div>
        </section>

        <section className="px-4">
          {/* <TabelaDetalhamento /> */}

          <Datatabela data={krs} />
        </section>
      </main>
    </>
  );
};

export default DashboardKrs;
