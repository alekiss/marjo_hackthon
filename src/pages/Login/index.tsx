import { useState, ChangeEvent } from "react";
import { Card, TextField, Button } from "@mui/material";
import majorLogo from '../../assets/img/logo-major.png'

const Login = () => {
  const [login, setLogin] = useState<{ cpf: string | null; senha: string | null }>({ cpf: null, senha: null });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [id]: value
    }));
  };

  const handleSubmit = () => {
    console.log(login);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} >
      <Card sx={{ width: '30%', textAlign: 'center', padding: '20px', display:'flex', flexDirection:'column' }} >
      <img src={majorLogo} alt="Major Logo" width={200}  style={{margin:'auto'}}/>
        <TextField id="cpf" label="CPF" variant="outlined" onChange={handleInputChange} value={login.cpf || ''} style={{ marginBottom: '20px' }} />
        <TextField id="senha" label="Senha" variant="outlined" type="password" onChange={handleInputChange} value={login.senha || ''} style={{ marginBottom: '20px' }} />
        <Button variant="contained" color="primary" onClick={handleSubmit}>Entrar</Button>
      <hr style={{marginTop:'10px', marginBottom:'10px'}} />
        <Button variant="contained"   style={{backgroundColor:'#002884'}} onClick={handleSubmit}>Criar uma conta</Button>
      </Card>
    </div>
  );
};

export default Login;
