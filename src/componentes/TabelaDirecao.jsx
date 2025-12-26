import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const products = [
  {
    id: 101,
    name: "DAF",
    risco: 12,
    atencao: 4,
    seguranca: 3,
  },
  {
    id: 102,
    name: "DEP",
    risco: 16,
    atencao: 1,
    seguranca: 5,
  },
  {
    id: 103,
    name: "DIREG",
    risco: 4,
    atencao: 1,
    seguranca: 2,
  },
  {
    id: 104,
    name: "DFTI",
    risco: 12,
    atencao: 9,
    seguranca: 3,
  },
];

export default function Tabela() {
  return (
    <div className="w-full border bg-linear-to-b from-[#000000] via-[#06090f] to-[#0A0E17] text-white rounded-md overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-white">Diretoria</TableHead>
            <TableHead className="text-white text-center">Risco</TableHead>
            <TableHead className="text-white text-center">Atenção</TableHead>
            <TableHead className="text-white text-center">Segurança</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id} className=" text-white text-center">
              <TableCell className="font-medium text-start">{product.name}</TableCell>
              <TableCell>{product.risco}</TableCell>
              <TableCell>{product.atencao}</TableCell>
              <TableCell>{product.seguranca}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
