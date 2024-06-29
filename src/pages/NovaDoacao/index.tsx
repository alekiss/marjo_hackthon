import React, { useState, ChangeEvent } from "react";
import { Card, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router";
import Snackbar from '@mui/material/Snackbar';
const Login = () => {
  const [doacao, setDoacao] = useState<any>({ valor: null, descricao: null });
  const [mensagemErro, setMensagemErro] = useState<any>("");
  const navigate = useNavigate()
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setDoacao((prevLogin: any) => ({
      ...prevLogin,
      [id]: value
    }));
  };

  const [open, setOpen] = useState(false);
  const handleProximo = () => {

    if (doacao.valor == null || doacao.valor.length == 0) {
      setMensagemErro('Digite um valor!')
      setOpen(true);
      return
    }




  };


  const handleVoltar = () => {
   console.log('voltei')
    navigate('/')



  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} >
      <Card sx={{ width: '30%', textAlign: 'justify', padding: '20px', display: 'flex', flexDirection: 'column' }} >
        <h2>Preencha os Dados</h2> <br />
        <TextField id="descricao" label="Descrição" variant="outlined" onChange={handleInputChange} value={doacao.descricao || ''} style={{ marginBottom: '20px' }} />
        <TextField id="valor" label="Valor" variant="outlined" type="text" onChange={handleInputChange} value={doacao.valor || ''} style={{ marginBottom: '20px' }} />
     
        <div style={{ display: 'flex' }}>
        <Button id='voltar' variant="contained" style={{ width: '100%',margin:10 }} color="primary" onClick={handleVoltar}>Voltar</Button>
          <Button variant="contained" id='proximo' style={{ backgroundColor: '#002884', width: '100%',margin:10 }} onClick={handleProximo}>Próximo</Button>
        </div>
        </Card>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        message={mensagemErro}


      />
    </div>
  );
};

export default Login;
