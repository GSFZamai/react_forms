import React from "react";
import { useState } from "react";
import { DadosEntrega } from "./DadosEntrega";
import { DadosPessoais } from "./DadosPessoais";
import { DadosUsuarios } from "./DadosUsuario";

export function FormularioCadastro({aoEnviar, cpfValido}) {
    const [etapaAtual, setEtapaAtual] = useState(0);

    const formularioAtual = [
        <DadosUsuarios aoEnviar={proximo} />,
        <DadosPessoais aoEnviar={proximo} cpfValido={cpfValido}  />,
        <DadosEntrega aoEnviar={aoEnviar} />
    ]

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
