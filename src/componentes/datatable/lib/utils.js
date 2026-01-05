import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  Book,
  Bug,
  CheckCircle2,
  Circle,
  CircleCheck,
  CircleHelp,
  CircleX,
  Timer,
} from "lucide-react";

export function getStatusIcon(status) {
  const statusIcons = {
    canceled: CircleX,
    pendente: CheckCircle2,
    emAndamento: Timer,
    concluida: CircleHelp,
  };

  return statusIcons[status] ?? null;
}

export function getPriorityIcon(priority) {
  const priorityIcons = {
    Alta: ArrowUpIcon,
    Baixa: ArrowDownIcon,
    Media: ArrowRightIcon,
  };

  return priorityIcons[priority] ?? null;
}

export function getLabelIcon(label) {
  const labelIcons = {
    bug: Bug,
    feature: Circle,
    enhancement: CircleCheck,
    documentation: Book,
  };

  return labelIcons[label];
}

export function exportTableToCSV(table, opts = {}) {
  const { filename = "tabela", excludeColumns = [], onlySelected = false } = opts;

  const headers = table
    .getAllLeafColumns()
    .map((column) => column.id)
    .filter((id) => !excludeColumns.includes(id));

  const rows = onlySelected ? table.getFilteredSelectedRowModel().rows : table.getRowModel().rows;

  const csvContent = [
    headers.join(","),
    ...rows.map((row) =>
      headers
        .map((header) => {
          const cellValue = row.getValue(header);

          if (typeof cellValue === "string") {
            return `"${cellValue.replace(/"/g, '""')}"`;
          }

          return cellValue ?? "";
        })
        .join(",")
    ),
  ].join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `${filename}.csv`;
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}
