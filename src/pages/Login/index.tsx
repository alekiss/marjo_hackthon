import React, { useState, ChangeEvent } from "react";
import { Card, TextField, Button, IconButton } from "@mui/material";
import majorLogo from '../../assets/img/logo-major.png'
import { Link } from "react-router-dom";
import { cpf } from 'cpf-cnpj-validator';
import Snackbar from '@mui/material/Snackbar';
const Login = () => {
  const [usuario, setUsuario] = useState<any>({ cpf: null, senha: null });
  const [mensagemErro, setMensagemErro] = useState<any>("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUsuario((prevLogin: any) => ({
      ...prevLogin,
      [id]: value
    }));
  };

  const [open, setOpen] = useState(false);
  const handleSubmit = () => {

    if (usuario.cpf == null || usuario.cpf.length == 0) {
      setMensagemErro('Digite seu CPF!')
      setOpen(true);
      return
    }

    if (usuario.senha == null || usuario.senha.length == 0) {
      setMensagemErro('Digite seu senha!')
      setOpen(true);
      return
    }

    if (!cpf.isValid(usuario.cpf)) {
      setMensagemErro('CPF Inválido!')
      setOpen(true);
      return
    } else {
      console.log('entrar')
      setOpen(false)
    }

  };




  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} >
      <Card sx={{ width: '30%', textAlign: 'center', padding: '20px', display: 'flex', flexDirection: 'column' }} >
        <img src={majorLogo} alt="Major Logo" width={200} style={{ margin: 'auto' }} />
        <TextField id="cpf" label="CPF" variant="outlined" onChange={handleInputChange} value={usuario.cpf || ''} style={{ marginBottom: '20px' }} />
        <TextField id="senha" label="Senha" variant="outlined" type="password" onChange={handleInputChange} value={usuario.senha || ''} style={{ marginBottom: '20px' }} />
        <Button id='entrar' variant="contained" color="primary" onClick={handleSubmit}>Entrar</Button>
        <hr style={{ marginTop: '10px', marginBottom: '10px' }} />


        <Link to="/criar-conta" style={{ textDecoration: 'none', width: '100%' }}>
          <Button variant="contained" id='criarConta' style={{ backgroundColor: '#002884', width: '100%' }} onClick={handleSubmit}>Criar uma conta</Button>
        </Link>
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
