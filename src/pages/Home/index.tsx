import { Box } from "@mui/material";
import Extrato from "../../components/Extrato";
import Header from "../../components/Header";

const Home = () => {
  const mockExtrato = {
    transacoes: [
      {
        descricao: "Roupas",
        dataTransacao: "2024-05-18",
        valor: 25,
      },
      {
        descricao: "Comida",
        dataTransacao: "2024-05-18",
        valor: 250,
      },
      {
        descricao: "Pets",
        dataTransacao: "2024-05-18",
        valor: 258,
      },
    ],
    valorTotal: 533,
  };
  return (
    <Box display="flex" flexDirection="column" pt="spacing-16" px="spacing-12">
      <Header />
      <Extrato
        transacoes={mockExtrato.transacoes}
        valorTotal={mockExtrato.valorTotal}
      />
    </Box>
  );
};

export default Home;
