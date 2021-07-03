import './App.css';
import {FormularioCadastro} from './components/FomularioCadastro/FormularioCadastro';
import { Container, Typography } from "@material-ui/core"
import "fontsource-roboto";
import {validaCpf, validaNome, validaSenha} from './models/cadastro';
import ValidacoesCadastro from './context/ValidacoesCadastro';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <ValidacoesCadastro.Provider value={{cpf: validaCpf, senha: validaSenha, nome: validaNome}}>
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
