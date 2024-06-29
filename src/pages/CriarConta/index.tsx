import { useState, ChangeEvent } from "react";
import { Card, TextField, Button } from "@mui/material";
import { cpf } from 'cpf-cnpj-validator';
import Snackbar from '@mui/material/Snackbar';
import majorLogo from '../../assets/img/logo-major.png'

import { createUsuario } from "../../services/user.services";
import { Link, useNavigate } from "react-router-dom";

const Cadastro = () => {
  const [usuario, setUsuario] = useState<any>({ nome: null, cpf: null, senha: null });
  const [mensagemErro, setMensagemErro] = useState<any>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUsuario((prevLogin: any) => ({
      ...prevLogin,
      [id]: value
    }));
  };


  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const handleSubmit = () => {
    if (usuario.nome == null || usuario.nome.length == 0) {
      setMensagemErro('Digite seu nome!')
      setOpen(true);
      return
    }
    if (usuario.cpf == null || usuario.cpf.length == 0) {
      setMensagemErro('Digite seu CPF!')
      setOpen(true);
      return
    }

    if (usuario.username == null || usuario.username.length == 0) {
      setMensagemErro('Digite seu usuário!')
      setOpen(true);
      return
    }
    if (usuario.password == null || usuario.password.length == 0) {
      setMensagemErro('Digite seu senha!')
      setOpen(true);
      return
    }

    if (!cpf.isValid(usuario.cpf)) {
      setMensagemErro('CPF Inválido!')
      setOpen(true);
      return
    } else {
      
      
      setOpen(false)
      createUsuario(usuario).then((res)=>{
        console.log(res)
        navigate('/login')
      })
    }

  };


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} >
      <Card sx={{ width: '30%', textAlign: 'center', padding: '20px', display: 'flex', flexDirection: 'column' }} >
        <img src={majorLogo} alt="Major Logo" width={200} style={{ margin: 'auto' }} />
        <TextField id="username" label="Usuário" variant="outlined" onChange={handleInputChange} value={usuario.username || ''} style={{ marginBottom: '20px' }} />
       <TextField id="email" label="E-Mail" variant="outlined" onChange={handleInputChange} value={usuario.email || ''} style={{ marginBottom: '20px' }} />
     
        <TextField id="nome" label="Nome*" variant="outlined" onChange={handleInputChange} value={usuario.nome || ''} style={{ marginBottom: '20px' }} />
        <TextField id="cpf" label="CPF*" variant="outlined" onChange={handleInputChange} value={usuario.cpf || ''} style={{ marginBottom: '20px' }} />
        <TextField id="password" label="Senha" variant="outlined" type="password" onChange={handleInputChange} value={usuario.password || ''} style={{ marginBottom: '20px' }} />
      
        <Button variant="contained" style={{ backgroundColor: '#002884' }} onClick={handleSubmit}>Criar Conta</Button>
        <hr style={{ marginTop: '10px', marginBottom: '10px' }} />
        <Link to="/login" style={{ textDecoration: 'none', width: '100%' }}>
          <Button variant="contained" id='logar' style={{ backgroundColor: '#002884', width: '100%' }} onClick={handleSubmit}>Fazer login</Button>
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

export default Cadastro;
