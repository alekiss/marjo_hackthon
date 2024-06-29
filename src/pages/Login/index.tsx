import { useState, ChangeEvent } from "react";
import { Card, TextField, Button, IconButton } from "@mui/material";
import majorLogo from '../../assets/img/logo-major.png'
import { Link, useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';

import { logar } from "../../services/user.services";
const Login = () => {
  const [usuario, setUsuario] = useState<any>({ password: null, username: null });
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

    if (usuario.username == null || usuario.username.length == 0) {
      setMensagemErro('Digite seu usuário!')
      setOpen(true);
      return
    }

    if (usuario.password == null || usuario.password.length == 0) {
      setMensagemErro('Digite sua senha!')
      setOpen(true);
      return
    }

    setOpen(false)
    logarUsuario()

  };


  const logarUsuario = () => {
    logar(usuario).then((res) => {
      localStorage.setItem('usuario', res.data.id)
      localStorage.setItem('access', res.data.access)
      localStorage.setItem('refresh', res.data.refresh)
      navigate('/')

      console.log('n', res)
    }).catch((error)=>{
      setMensagemErro('Usuário não encontrado!')
      setOpen(true);
    })
  }


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} >
      <Card sx={{ width: '30%', textAlign: 'center', padding: '20px', display: 'flex', flexDirection: 'column' }} >
        <img src={majorLogo} alt="Major Logo" width={200} style={{ margin: 'auto' }} />
        <TextField id="username" label="Usuário" variant="outlined" onChange={handleInputChange} value={usuario.username || ''} style={{ marginBottom: '20px' }} />
        <TextField id="password" label="Senha" variant="outlined" type="password" onChange={handleInputChange} value={usuario.password || ''} style={{ marginBottom: '20px' }} />
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
