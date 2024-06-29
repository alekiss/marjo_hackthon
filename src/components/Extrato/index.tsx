import {
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import { dateTransform } from "../../utils/date-transform";
import { transformNumberToBrl } from "../../utils/transform-number-to-brl";

interface ExtratoProps {
  transacoes: ExtratoType[];
  valorTotal: number;
}

export type ExtratoType = {
  descricao: string;
  dataTransacao: string;
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
      <Card>
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
            <TableBody>
              {transacoes?.map((item) => (
                <TableRow hover key={item.valor}>
                  <TableCell>{item.descricao}</TableCell>
                  <TableCell align="right">
                    {dateTransform(item.dataTransacao)}
                  </TableCell>
                  <TableCell align="right">
                    {transformNumberToBrl(item.valor)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>Valor Total:</TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>{transformNumberToBrl(valorTotal)}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Card>
    </Grid>
  );
};

export default Extrato;
