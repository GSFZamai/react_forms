import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import React, { useState } from "react";

export function DadosPessoais({aoEnviar, cpfValido}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [errors, setErrors] = useState({
        cpf: {
            valido: true,
            mensagem: ''
        }
    });

    return(
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
            }}
        >
            <TextField
                value={nome}
                id="nome" 
                label="Nome" 
                variant="outlined" 
                margin="normal" 
                fullWidth
                onChange={(event) => {               
                    setNome(event.target.value);
                }}
            />

            <TextField
                value={sobrenome}
                id="sobrenome" 
                label="Sobrenome" 
                variant="outlined" 
                margin="normal" 
                fullWidth
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
            />

            <TextField 
                value={cpf}
                id="cpf" 
                label="CPF" 
                variant="outlined" 
                margin="normal" 
                error={!errors.cpf.valido}
                helperText={errors.cpf.mensagem}
                fullWidth
                onBlur={(event) => {
                    const error = cpfValido(cpf)
                    console.log()
                    setErrors({cpf: error })
                }}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
            />

            <FormControlLabel 
                label="Promoções" 
                control={
                    <Switch 
                        checked={promocoes}
                        color="primary"
                        onChange={
                            (event) => {
                                setPromocoes(event.target.checked);
                            }
                        }
                    />
            } 
            />
            <FormControlLabel 
                label="Novidades" 
                control={
                    <Switch 
                        checked={novidades}
                        color="primary"
                        onChange={
                            (event) => {
                                setNovidades(event.target.checked);
                            }
                        }
                    />
                } 
            />
            
            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    )
}
