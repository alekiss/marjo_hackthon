import { Grid } from "@mui/material";
import Extrato from "../../components/Extrato";

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
    <Grid container pt={"spacing-16"} px={"spacing-12"}>
      <Extrato
        transacoes={mockExtrato.transacoes}
        valorTotal={mockExtrato.valorTotal}
      />
    </Grid>
  );
};

export default Home;
