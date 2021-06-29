import './App.css';
import {FormularioCadastro} from './components/FomularioCadastro/FormularioCadastro';
import { Container, Typography } from "@material-ui/core"
import "fontsource-roboto";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} cpfValido={cpfValido}/>
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function cpfValido(cpf) {
  if(cpf.length !== 11) {
    return {valido: false, mensagem: 'CPF Inválido'};
  }else {
    return {valido: true, mensagem: ''}
  }
}

export default App;
