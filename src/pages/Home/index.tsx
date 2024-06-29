import { Box } from "@mui/material";
import Extrato from "../../components/Extrato";
import Header from "../../components/Header";
import { getTransacaoList } from "../../services/user.services";
import { useEffect, useState } from "react";

const Home = () => {
  // const mockExtrato = {
  //   transacoes: [
  //     {
  //       descricao: "Roupas",
  //       formatted_date: "2024-05-18",
  //       valor: 25,
  //     },
  //     {
  //       descricao: "Comida",
  //       formatted_date: "2024-05-18",
  //       valor: 250,
  //     },
  //     {
  //       descricao: "Pets",
  //       formatted_date: "2024-05-18",
  //       valor: 258,
  //     },
  //   ],
  //   valorTotal: 533,
  // };

  const [data, setData] = useState<any>({})

  const getList = () => {
    getTransacaoList().then((res: any) => {
      console.log(res)
      setData(res.data)
    })
  }

  useEffect(() => { getList() }, [])
  return (
    <Box display="flex" flexDirection="column" pt="spacing-16" px="spacing-12">
      <Header />
      <div style={{ padding: '40px' }}>
        <Extrato
          transacoes={data.transacoes}
          valorTotal={data.valorTotal}
        />
      </div>
    </Box>
  );
};

export default Home;
