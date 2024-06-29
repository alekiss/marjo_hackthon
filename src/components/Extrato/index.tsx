import {
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface ExtratoProps {
  transacoes: ExtratoType[];
  valorTotal: number;
}

export type ExtratoType = {
  descricao: string;
  valor: number;
};

interface Column {
  id: "descricao" | "data-transacao" | "valor";
  label: string;
  minWidth?: number;
  maxWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "descricao", label: "Descrição", minWidth: 400 },
  {
    id: "data-transacao",
    label: "Data da Transação",
    minWidth: 170,
    align: "right",
  },
  { id: "valor", label: "Valor (R$)", minWidth: 130, align: "right" },
];

const Extrato = ({ transacoes, valorTotal }: ExtratoProps) => {
  return (
    <Grid container pt={"spacing-16"} px={"spacing-12"}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow hover>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default Extrato;
