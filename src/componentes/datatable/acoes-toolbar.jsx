"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { exportTableToCSV } from "./lib/utils";

export default function TasksTableToolbarActions({ table }) {
  return (
    <div className="flex items-center gap-2">
      <Button
        className="cursor-pointer"
        variant="outline"
        size="sm"
        onClick={() =>
          exportTableToCSV(table, {
            filename: "Tabela-Detalhada",
            excludeColumns: ["select", "actions"],
          })
        }
      >
        <Download />
        Exportar
      </Button>
      {/**
       * Other actions can be added here.
       * For example, import, view, etc.
       */}
    </div>
  );
}
