import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, Snackbar, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Header from '../../components/Header';
import { createNovaDoacao } from '../../services/user.services';


const steps = ['Preencher Dados', 'Confirmar Dados'];

export default function HorizontalLinearStepper() {
  const [doacao, setDoacao] = React.useState<any>({ valor: 0, descricao: null });
  const [open, setOpen] = React.useState(false)
  const [open2, setOpen2] = React.useState(false);
  const [openSair, setOpenSair] = React.useState(false);
  const [mensagemErro, setMensagemErro] = React.useState<any>("");
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose = (value: any) => {
    setOpen2(false);

    if (value) {
     
      novaDoacao()
    }
  };

  const handleSair = () => {
    setOpenSair(true);
  }

  const handleCloseSair = (value: any) => {
    setOpenSair(false);


  };



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setDoacao((prevLogin: any) => ({
      ...prevLogin,
      [id]: value
    }));
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {

    if (activeStep == 0) {
      if (doacao.valor == null || doacao.valor.length == 0 || doacao.valor < 1) {
        setMensagemErro('Valor minimo é de 1 real!')
        setOpen(true);
        return
      }
    }
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }



    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const handleReset = () => {
    setActiveStep(0);
  };


  const novaDoacao = () =>{
    doacao.pessoa = localStorage.getItem('usuario')
    createNovaDoacao(doacao).then((res)=>{
      handleNext()
    }).catch((error)=>{
      console.log('Ops! Algo deu errado!')
      if (error.status == 401) {
        const navigate = useNavigate()
        navigate('/login')
        localStorage.clear()
        return;
    }
    })
  }
  return (
    <Box sx={{ width: '100%' }}>

      <Box display="flex" flexDirection="column" pt="spacing-16" px="spacing-12">
        <Header />


        <Card >

          <div style={{ height: '75vh', marginTop: '20px', padding: 20 }}>
          <h2>Nova Doação</h2> <br />
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: {
                  optional?: React.ReactNode;
                } = {};

                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <div style={{ height: '50vh' }}>
                  <Typography sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                    <h3>   Transação realizada com sucesso! <br /> Obrigada, sua ajuda faz a diferença!</h3>
                  </Typography>

                  <div style={{ width: '100%', justifyContent: 'center', display: 'flex', gap: '5px', marginTop: '20px' }}>
                    <Button variant="contained" disabled >Baixar Comprovante</Button>
                    
                    <div>
                      <Link to="/" style={{ textDecoration: 'none', width: '100%' }}>
                        <Button variant="contained" onClick={handleReset}>Ir para Transações </Button>

                      </Link>
                    </div>

                  </div>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>

                {activeStep == 0 && (<>
                  <div style={{ width: '30%', textAlign: 'justify', padding: '20px', display: 'flex', gap: '5%', justifyContent: 'center' }} >

                    <TextField id="descricao" label="Descrição" variant="outlined" onChange={handleInputChange} value={doacao.descricao || ''} style={{ marginBottom: '20px' }} />
                    <TextField id="valor" label="Valor*" variant="outlined" type="text" onChange={handleInputChange} value={doacao.valor || ''} style={{ marginBottom: '20px' }} />

                  </div>


                </>)}
                {activeStep == 1 && (<>
                  <div style={{ padding: '20px', display: 'flex', gap: '5%', justifyContent: 'center' }} >
                    <h3>Descrição: {doacao.descricao ? doacao.descricao : 'Não Informado'}</h3>
                    <h3>Valor: {doacao.valor}</h3>

                  </div>
                </>)}

                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  {activeStep == 0 ? <>
                    <Button
                      color="inherit"
                      hidden={activeStep === 0}
                      onClick={handleSair}
                      sx={{ mr: 1 }}
                    >
                      Voltar
                    </Button></> : <>
                    <Button
                      color="inherit"
                      hidden={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Voltar
                    </Button></>}

                  <Box sx={{ flex: '1 1 auto' }} />

                  {activeStep === steps.length - 1 ? <><Button onClick={handleClickOpen}>
                    Confirmar

                  </Button></> : <>
                    <Button onClick={handleNext}>
                      Próximo

                    </Button></>}

                </Box>

              </React.Fragment>
            )}
          </div>


        </Card>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        message={mensagemErro}


      />

      <Dialog
        open={open2}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Atenção!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Uma vez transferido, ação não poderá ser desfeito, editado ou cancelado! <br />
            Caso de dúvidas, entre em contato com o nosso suporte!
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={() => handleClose(false)} variant='contained' style={{ backgroundColor: 'red' }}>Cancelar</Button>
          <Button onClick={() => handleClose(true)} variant='contained' autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openSair}
        onClose={handleCloseSair}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Atenção!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Todos os seus dados preenchidos serão perdidos <br />
            Deseja realmente sair?
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={() => handleCloseSair(false)} variant='contained' style={{ backgroundColor: 'red' }}>Cancelar</Button>

          <div>
            <Link to="/" style={{ textDecoration: 'none', width: '100%' }}>
              <Button onClick={() => handleCloseSair(true)} variant='contained' autoFocus>
                Sair
              </Button>
            </Link>
          </div>
        </DialogActions>
      </Dialog>
    </Box>
  );
}