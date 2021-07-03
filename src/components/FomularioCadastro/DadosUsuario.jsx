import { TextField, Button} from "@material-ui/core";
import React, {useState} from 'react';
import { useContext } from "react";
import ValidacoesCadastro from '../../context/ValidacoesCadastro';
import useErrors from "../../hooks/useErrors";

export function DadosUsuarios({aoEnviar}) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const validacoes = useContext(ValidacoesCadastro)
    const [errors, validaCampo, podeEnviar] = useErrors(validacoes);


    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            console.log(podeEnviar());
            if(podeEnviar()) {
                aoEnviar({email, senha});
            }
        }}>
            <TextField 
                value = {email}
                onChange = {(event) => {setEmail(event.target.value)}}
                id="email"
                type="email" 
                name="email" 
                label="email"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField 
                value = {senha}
                onChange = {(event) => setSenha(event.target.value)}
                id="senha"
                type="password" 
                name="senha" 
                label="senha"
                onBlur={validaCampo}
                error={!errors.senha.valido}
                helperText={errors.senha.mensagem}
                required
                variant="outlined"
                margin="normal"
                fullWidth 
            />
            <Button 
                type="submit"
                variant="contained"
                color="primary"
            >
                Cadastrar
            </Button>
        </form>
    )
}