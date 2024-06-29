import {
  Box,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import { dateTransform } from "../../utils/date-transform";
import { transformNumberToBrl } from "../../utils/transform-number-to-brl";
import { Link } from "react-router-dom";
import { MdDownload } from "react-icons/md";

interface ExtratoProps {
  transacoes: ExtratoType[];
  valorTotal: number;
}

export type ExtratoType = {
  descricao: string;
  formatted_date: string;
  valor: number;
};

interface Column {
  id: "descricao" | "formatted_date" | "valor";
  label: string;
  minWidth?: number;
  maxWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "descricao", label: "Descrição", minWidth: 400 },
  {
    id: "formatted_date",
    label: "Data da Transação",
    minWidth: 170,
    align: "right",
  },
  { id: "valor", label: "Valor (R$)", minWidth: 130, align: "right" },
  { id: "descricao", label: "PDF" ,  minWidth: 130, align: "right"},
];

const Extrato = ({ transacoes, valorTotal }: ExtratoProps) => {
  return (
    <Box>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <h2>Transações Realizadas:</h2>
        <div>
          <Tooltip title="Fazer uma nova doação" placement="top" arrow>
            <Link to="/nova-doacao">
              <Button variant="contained"  >
                +
              </Button>
            </Link>
          </Tooltip>


        </div>
      </div>
      <Card sx={{ marginTop: 2 }}>
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
                    {dateTransform(item.formatted_date)}
                  </TableCell>
                  <TableCell align="right">
                    {item.valor}
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="contained" disabled >
                    <MdDownload />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Valor Total:
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  {transformNumberToBrl(valorTotal)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};

export default Extrato;
