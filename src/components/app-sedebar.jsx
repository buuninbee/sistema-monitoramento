"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Frame,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

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
    name: "João Silva",
    email: "juca.silva@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Bar do Júca",
      plan: "Aberto",
      logo: AudioWaveform,
    },
  ],
  navMain: [
    {
      title: "Produtos",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Cadastrar",
          url: "adm/cadastrar-produtos",
        },
        {
          title: "Cardápio",
          url: "/adm/cardapio",
        },
        {
          title: "Ordens de Serviço",
          url: "/adm/ordem-servico",
        },
      ],
    },
    {
      title: "Minha equipe",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Usuários",
          url: "adm/cadastrar-usuario",
        },
        {
          title: "Dashbord de vendas",
          url: "/adm/dashboard-produtos",
        },
      ],
    },
    {
      title: "Pedidos",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Novo pedido",
          url: "adm/novo-pedido",
        },
        {
          title: "Satisfação do cliente",
          url: "#",
        },
      ],
    },
    {
      title: "Meu salão",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Gestão de mesas",
          url: "#",
        },
        {
          title: "Configurar salão",
          url: "#",
        },
      ],
    },
    {
      title: "Documentação",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introdução",
          url: "#",
        },
        {
          title: "Primeiros passos",
          url: "#",
        },
        {
          title: "Tutorias",
          url: "#",
        },
        {
          title: "Planos",
          url: "#",
        },
      ],
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
