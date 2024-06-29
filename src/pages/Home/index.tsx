import Extrato from "../../components/Extrato"

const Home = () => {

  const mockExtrato = {
    "transacoes": [
      {
        "descricao": "Roupas",
        "valor": 25
      },
      {
        "descricao": "Comida",
        "valor": 250
      },
      {
        "descricao": "Pets",
        "valor": 258
      }
    ],
    "valorTotal": 533
  }
  return (
    <Extrato transacoes={mockExtrato.transacoes} valorTotal={mockExtrato.valorTotal}/>
  )
}

export default Home