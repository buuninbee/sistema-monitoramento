"use client";

import * as React from "react";
import { View, SatelliteDish, ListChevronsUpDown, Settings2, SquareTerminal } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "NUPIE",
    email: "powerbi.nupie@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "View 00",
      plan: "",
      logo: View,
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      // items: [
      //   {
      //     title: "Cadastrar",
      //     url: "adm/cadastrar-produtos",
      //   },
      //   {
      //     title: "Cardápio",
      //     url: "/adm/cardapio",
      //   },
      //   {
      //     title: "Ordens de Serviço",
      //     url: "/adm/ordem-servico",
      //   },
      // ],
    },
    {
      title: "Krs Lista",
      url: "#",
      icon: ListChevronsUpDown,
      // items: [
      //   {
      //     title: "Usuários",
      //     url: "adm/cadastrar-usuario",
      //   },
      //   {
      //     title: "Dashbord de vendas",
      //     url: "/adm/dashboard-produtos",
      //   },
      // ],
    },
    {
      title: "Unidades",
      url: "#",
      icon: SatelliteDish,
      // items: [
      //   {
      //     title: "Novo pedido",
      //     url: "adm/novo-pedido",
      //   },
      //   {
      //     title: "Satisfação do cliente",
      //     url: "#",
      //   },
      // ],
    },

    {
      title: "Documentação",
      url: "#",
      icon: Settings2,
      // items: [
      //   {
      //     title: "Introdução",
      //     url: "#",
      //   },
      //   {
      //     title: "Primeiros passos",
      //     url: "#",
      //   },
      //   {
      //     title: "Tutorias",
      //     url: "#",
      //   },
      //   {
      //     title: "Planos",
      //     url: "#",
      //   },
      // ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar className="dark text-white" collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
