import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, Snackbar, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const steps = ['Preencher Dados', 'Confirmar Dados'];

export default function HorizontalLinearStepper() {
  const [doacao, setDoacao] = React.useState<any>({ valor: null, descricao: null });
  const [open, setOpen] = React.useState(false)
  const [mensagemErro, setMensagemErro] = React.useState<any>("");
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

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

  return (
    <Box sx={{ width: '100%' }}>
      <Card>

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
                <Button variant="contained" disabled>Baixar Comprovante</Button>
                <div>
                  <Link to="/" style={{ textDecoration: 'none', width: '100%' }}>
                    <Button variant="contained" onClick={handleReset}>Ir para Home! </Button>

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
                <TextField id="valor" label="Valor" variant="outlined" type="text" onChange={handleInputChange} value={doacao.valor || ''} style={{ marginBottom: '20px' }} />

              </div>


            </>)}
            {activeStep == 1 && (<>
              <div style={{ padding: '20px', display: 'flex', gap: '5%', justifyContent: 'center' }} >
                <h3>Descrição: {doacao.descricao}</h3>
                <h3>Valor: {doacao.valor}</h3>
              </div>
            </>)}

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                hidden={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Voltar
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Confirmar' : 'Próximo'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Card>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        message={mensagemErro}


      />
    </Box>
  );
}