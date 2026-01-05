"use client";

import {
  ArrowUpDown,
  CalendarIcon,
  Check,
  CircleDashed,
  Clock,
  Ellipsis,
  Search,
  Text,
  X,
} from "lucide-react";
import * as React from "react";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import iconAtencao from "@/assets/icon-atencao.svg";
import iconRisco from "@/assets/icon-risco.svg";
import iconSeguranca from "@/assets/icon-seguranca.svg";

import { getPriorityIcon } from "./lib/utils";
import DataTable from "@/components/ui/data-table";

import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import TasksTableToolbarActions from "./acoes-toolbar";

const PRIORITY_CONFIG = {
  Baixa: { label: "Baixa", icon: getPriorityIcon("Baixa") },
  Media: { label: "Média", icon: getPriorityIcon("Media") },
  Alta: { label: "Alta", icon: getPriorityIcon("Alta") },
};

const STATUS_CONFIG = {
  concluida: "concluido",
  pendente: "Pendente",
  emAndamento: "Emandamento",
};

function StatusBadge({ status }) {
  if (status === "seguranca") {
    return (
      <div className="flex items-center gap-1 px-2 py-1 rounded-lg border border-emerald-500/40 w-fit">
        <img className="w-3.5" src={iconSeguranca} alt="" />
        <span className="text-sm font-medium text-[#17C964]">Segurança</span>
      </div>
    );
  } else if (status === "atencao") {
    return (
      <div className="flex items-center gap-1 px-2 py-1 rounded-lg border border-amber-500/40 w-fit">
        <img className="w-3.5" src={iconAtencao} alt="" />
        <span className="text-sm font-medium text-[#F5A524]">Atenção</span>
      </div>
    );
  } else if (status === "risco") {
    return (
      <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-red-950/30 border border-red-500/40 w-fit">
        <img className="w-3.5" src={iconRisco} alt="" />
        <span className="text-sm font-medium text-[#F31260]">Risco</span>
      </div>
    );
  }
}

function ScoreBadge({ score }) {
  const getScoreStyle = () => {
    if (score >= 100) return { barClass: "bg-[#17C964]", textClass: "text-[#17C964]" };
    if (score >= 51 && score <= 99)
      return { barClass: "bg-[#F5A524]", textClass: "text-[#F5A524]" };
    if (score >= 0 && score <= 50) return { barClass: "bg-[#F31260]", textClass: "text-[#F31260]" };
  };

  const { barClass, textClass } = getScoreStyle();

  return (
    <div className="flex items-center gap-2">
      <div className="relative w-12 h-1.5 rounded-full bg-muted overflow-hidden">
        <div
          className={`absolute inset-y-0 left-0 rounded-full transition-all ${barClass}`}
          style={{ width: `${score}%` }}
        />
      </div>
      <span className={`text-xs font-semibold min-w-7 ${textClass}`}>{score}</span>
    </div>
  );
}

const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="cursor-pointer"
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="cursor-pointer"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    id: "Area",
    accessorKey: "area",
    header: ({ column }) => <DataTableColumnHeader column={column} label="Área" />,
    cell: ({ cell }) => cell.getValue(),
    enableColumnFilter: true,
  },
  {
    id: "email",
    accessorKey: "email",
    header: ({ column }) => <DataTableColumnHeader column={column} label="Email" />,
    cell: ({ row }) => {
      const { email, kr } = row.original;

      return (
        <a
          href={`mailto:${email}?subject=Solicitação%20de%20atualização%20do%20status%20do%20KR%20${kr}`}
        >
          {email}
        </a>
      );
    },
    enableColumnFilter: true,
  },
  {
    id: "kr",
    accessorKey: "kr",
    header: ({ column }) => <DataTableColumnHeader column={column} label="Kr" />,
    cell: ({ row }) => <div className=" w-20">{row.getValue("kr")}</div>,
    enableSorting: true,
    enableHiding: true,
    enableColumnFilter: true,
  },
  {
    id: "descricao",
    accessorKey: "descricao",
    header: ({ column }) => <DataTableColumnHeader column={column} label="Descrição" />,
    cell: ({ row }) => {
      const label = row.original.label;

      return (
        <div className="flex items-center gap-2">
          {label && <Badge variant="outline">{label}</Badge>}
          <span className="max-w-125 truncate font-medium">{row.getValue("descricao")}</span>
        </div>
      );
    },
    meta: {
      label: "descricao",
      placeholder: "Search titles...",
      variant: "text",
      icon: Text,
    },
    enableColumnFilter: true,
  },
  {
    id: "status",
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} label="Status" />,
    cell: ({ cell }) => {
      const status = cell.getValue();
      console.log(status);

      if (!status) return null;

      return <StatusBadge status={status} />;
    },
    meta: {
      label: "Status",
      variant: "multiSelect",
      filterFns: "equalString",
      options: Object.entries(STATUS_CONFIG).map(([value, config]) => ({
        value,
        label: config.label,
        icon: config.icon,
        count: 1,
      })),
      icon: CircleDashed,
    },
    enableColumnFilter: true,
  },
  {
    id: "score",
    accessorKey: "score",
    header: ({ column }) => <DataTableColumnHeader column={column} label="Score" />,
    cell: ({ cell }) => {
      const score = cell.getValue();
      return <ScoreBadge score={score} />;
    },
    enableColumnFilter: true,
  },
  {
    id: "planAcumulado",
    accessorKey: "planAcumulado",
    header: ({ column }) => <DataTableColumnHeader column={column} label="plan. Acumulado" />,
    cell: ({ cell }) => {
      const planAcumulado = cell.getValue();
      return <div className="w-20 text-right">{planAcumulado}</div>;
    },
    enableColumnFilter: true,
  },
  {
    id: "execAcumulado",
    accessorKey: "execAcumulado",
    header: ({ column }) => <DataTableColumnHeader column={column} label="exec. Acumulado" />,
    cell: ({ cell }) => {
      const execAcumulado = cell.getValue();

      return <div className="w-20 text-right">{execAcumulado}</div>;
    },
    enableColumnFilter: true,
  },

  {
    id: "actions",
    cell: function Cell({ row }) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              aria-label="abrir menu"
              variant="ghost"
              className="flex size-8 p-0 data-[state=open]:bg-muted"
            >
              <Ellipsis className="size-4" aria-hidden="true" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem>Visualizar KR {row.original.kr}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    size: 40,
  },
];

export default function Datatabela({ data }) {
  const [columnVisibility, setColumnVisibility] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      columnVisibility,
    },
  });

  const statusColumn = table.getColumn("status");
  console.log(statusColumn);

  const statuses = Array.from(statusColumn?.getFacetedUniqueValues().keys() ?? []);
  return (
    <div className="flex flex-col gap-3 py-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
            <Input
              placeholder="Buscar Kr..."
              value={table.getColumn("kr")?.getFilterValue() ?? ""}
              onChange={(event) => table.getColumn("kr")?.setFilterValue(event.target.value)}
              className="pl-8 h-10 text-white text-sm border-border/50"
            />
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Status
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                {statuses.map((status) => (
                  <DropdownMenuItem
                    key={status}
                    onClick={() => statusColumn?.setFilterValue(status)}
                    className="capitalize"
                  >
                    {status}
                  </DropdownMenuItem>
                ))}

                <DropdownMenuItem onClick={() => statusColumn?.setFilterValue(undefined)}>
                  Limpar filtro
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <TasksTableToolbarActions table={table} />
      </div>
      <DataTable table={table} />
    </div>
  );
}
