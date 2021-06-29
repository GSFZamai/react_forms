import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { DadosEntrega } from "./DadosEntrega";
import { DadosPessoais } from "./DadosPessoais";
import { DadosUsuarios } from "./DadosUsuario";

export function FormularioCadastro({aoEnviar, cpfValido}) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosAtuais, setDadosAtuais] = useState({});

    useEffect(() => {
        console.log(dadosAtuais);
    })


    const formularioAtual = [
        <DadosUsuarios aoEnviar={coletaDados} />,
        <DadosPessoais aoEnviar={coletaDados} cpfValido={cpfValido}  />,
        <DadosEntrega aoEnviar={coletaDados} />
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
            {
                formularioAtual[etapaAtual]
            }
        </>
    )
}
