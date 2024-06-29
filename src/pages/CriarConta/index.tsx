import { useState, ChangeEvent } from "react";
import { Card, TextField, Button } from "@mui/material";
import majorLogo from '../../assets/img/logo-major.png'

const Cadastro = () => {
    const [usuario, setUsuario] = useState<any>({ nome: null,cpf: null, senha: null });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUsuario((prevLogin:any) => ({
      ...prevLogin,
      [id]: value
    }));
  };

  const handleSubmit = () => {
    console.log(usuario);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} >
      <Card sx={{ width: '30%', textAlign: 'center', padding: '20px', display:'flex', flexDirection:'column' }} >
      <img src={majorLogo} alt="Major Logo" width={200}  style={{margin:'auto'}}/>
      <TextField id="nome" label="Nome" variant="outlined" onChange={handleInputChange} value={usuario.nome || ''} style={{ marginBottom: '20px' }} />
        <TextField id="cpf" label="CPF" variant="outlined" onChange={handleInputChange} value={usuario.cpf || ''} style={{ marginBottom: '20px' }} />
        <TextField id="senha" label="Senha" variant="outlined" type="password" onChange={handleInputChange} value={usuario.senha || ''} style={{ marginBottom: '20px' }} />
       
        <Button variant="contained"   style={{backgroundColor:'#002884'}} onClick={handleSubmit}>Criar Conta</Button>
      </Card>
    </div>
  );
};

export default Cadastro;
