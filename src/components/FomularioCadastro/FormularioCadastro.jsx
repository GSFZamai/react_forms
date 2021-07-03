import React from "react";
import { Stepper, Typography, Step, StepLabel } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { DadosEntrega } from "./DadosEntrega";
import { DadosPessoais } from "./DadosPessoais";
import { DadosUsuarios } from "./DadosUsuario";

export function FormularioCadastro({aoEnviar}) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosAtuais, setDadosAtuais] = useState({});

    useEffect(() => {
        if (etapaAtual === formularioAtual.length - 1 )
        console.log(dadosAtuais);
    })


    const formularioAtual = [
        <DadosUsuarios aoEnviar={coletaDados} />,
        <DadosPessoais aoEnviar={coletaDados}  />,
        <DadosEntrega aoEnviar={coletaDados} />,
        <Typography  variant="h5">Olá, {dadosAtuais.nome}. <br/> Agradecemos por se cadastrar</Typography>
    ]

    function coletaDados(dados) {
        setDadosAtuais({...dadosAtuais, ...dados});
        proximo();
    }

    function proximo() {
        setEtapaAtual(etapaAtual+1);
    }

    return(
        <>
            <Stepper activeStep={etapaAtual}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Usuário</StepLabel></Step>
                <Step><StepLabel>Endereço</StepLabel></Step>
                <Step><StepLabel>Finalizar</StepLabel></Step>
            </Stepper>
            {
                formularioAtual[etapaAtual]
            }
        </>
    )
}
