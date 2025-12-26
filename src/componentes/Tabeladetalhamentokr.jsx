import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const krsData = [
  {
    area: "CPEE",
    kr: "2.1.2",
    descricao:
      "Alcançar o recebimento líquido de R$ 4.455.502,65 em cursos de graduação e pós-graduação",
    planoAcumulado: 100,
    execAcumulado: 2,
    indAcumulado: 4,
    status: "risco",
  },
  {
    area: "CPEE",
    kr: "2.1.3",
    descricao:
      "Alcançar 1.000 matrículas contratadas por meio de convênio com a Secretaria de Educação do DF",
    planoAcumulado: 100,
    execAcumulado: 35,
    indAcumulado: 40,
    status: "atencao",
  },
  {
    area: "CPEE",
    kr: "2.1.4",
    descricao: "Contratar serviço de lanchonete para CEP’s Miguel Setembrino e Jessé Freire",
    planoAcumulado: 100,
    execAcumulado: 78,
    indAcumulado: 82,
    status: "seguranca",
  },
  {
    area: "CPEE",
    kr: "2.2.1",
    descricao: "Ofertar 19 novos planos de curso no segmento de Gestão de Empresas e Negócios",
    planoAcumulado: 100,
    execAcumulado: 60,
    indAcumulado: 58,
    status: "atencao",
  },
  {
    area: "CPEE",
    kr: "2.2.2",
    descricao: "Alcançar recebimento líquido de R$ 5.000.000,00 em contratos públicos",
    planoAcumulado: 100,
    execAcumulado: 85,
    indAcumulado: 90,
    status: "seguranca",
  },
  {
    area: "CPEE",
    kr: "2.2.3",
    descricao: "Fortalecer parcerias com empresas para cursos corporativos",
    planoAcumulado: 100,
    execAcumulado: 20,
    indAcumulado: 25,
    status: "risco",
  },
  {
    area: "CPEE",
    kr: "2.3.1",
    descricao: "Melhorar o índice de satisfação dos alunos",
    planoAcumulado: 100,
    execAcumulado: 70,
    indAcumulado: 75,
    status: "seguranca",
  },
  {
    area: "CPEE",
    kr: "2.3.2",
    descricao: "Adotar ferramenta tecnológica para oferta de oportunidades e talentos",
    planoAcumulado: 100,
    execAcumulado: 55,
    indAcumulado: 60,
    status: "atencao",
  },
  {
    area: "CPEE",
    kr: "2.3.3",
    descricao: "Atualizar o portfólio de cursos conforme demandas do mercado",
    planoAcumulado: 100,
    execAcumulado: 90,
    indAcumulado: 92,
    status: "seguranca",
  },
  {
    area: "CPEE",
    kr: "2.4.1",
    descricao: "Aumentar a receita proveniente de cursos de curta duração",
    planoAcumulado: 100,
    execAcumulado: 45,
    indAcumulado: 50,
    status: "atencao",
  },
  {
    area: "CPEE",
    kr: "2.4.2",
    descricao: "Implementar novos formatos de avaliação acadêmica",
    planoAcumulado: 100,
    execAcumulado: 30,
    indAcumulado: 28,
    status: "risco",
  },
  {
    area: "CPEE",
    kr: "2.4.3",
    descricao: "Capacitar docentes em metodologias ativas",
    planoAcumulado: 100,
    execAcumulado: 80,
    indAcumulado: 85,
    status: "seguranca",
  },
  {
    area: "CPEE",
    kr: "2.5.1",
    descricao: "Melhorar os indicadores de desempenho institucional",
    planoAcumulado: 100,
    execAcumulado: 65,
    indAcumulado: 68,
    status: "atencao",
  },
  {
    area: "CPEE",
    kr: "2.5.2",
    descricao: "Aumentar a eficiência dos processos administrativos",
    planoAcumulado: 100,
    execAcumulado: 15,
    indAcumulado: 18,
    status: "risco",
  },
];

export default function TabelaDetalhamento() {
  return (
    <div className="w-full border bg-linear-to-b from-[#000000] via-[#06090f] to-[#0A0E17] text-white rounded-md overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="*:text-white">
            <TableHead className="pl-4">Area</TableHead>
            <TableHead>Kr</TableHead>
            <TableHead>descrição</TableHead>
            <TableHead>Plan. Acumulado</TableHead>
            <TableHead>Exec. Acumulado</TableHead>
            <TableHead>Ind. Acumulado</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {krsData.map((product) => (
            <TableRow key={product.area} className="">
              <TableCell className="pl-4">{product.area}</TableCell>
              <TableCell className="font-medium">{product.descricao}</TableCell>
              <TableCell>{product.planoAcumulado}</TableCell>
              <TableCell>{product.execAcumulado}</TableCell>
              <TableCell>{product.indAcumulado}</TableCell>
              <TableCell className="text-white">{product.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
