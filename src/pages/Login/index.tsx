import { useState, ChangeEvent } from "react";
import { Card, TextField, Button } from "@mui/material";
import majorLogo from '../../assets/img/logo-major.png'
import { Link } from "react-router-dom";
const Login = () => {
  const [usuario, setUsuario] = useState<any>({ cpf: null, senha: null });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUsuario((prevLogin: any) => ({
      ...prevLogin,
      [id]: value
    }));
  };

  const handleSubmit = () => {
    console.log(usuario);
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
    </div>
  );
};

export default Login;
