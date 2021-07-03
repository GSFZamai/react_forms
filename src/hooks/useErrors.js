import React, {useState} from 'react';

function useErrors(validacoes) {
    const estadoInicial = criaEstadoInicial(validacoes);
    const [errors, setErrors] = useState(estadoInicial);

    function validaCampo(event) {
        const {name, value} = event.target;
        const error = validacoes[name](value);
        const novoEstado = {...errors}
        novoEstado[name] = error;
        setErrors(novoEstado);
    }

    function podeEnviar() {
        for(let campo in errors) {
            if(!errors[campo].valido) {
                return false;
            }
        }
        return true;
    }

    function criaEstadoInicial(validacoes) {
        let estadoInicial = {}
        for(let campo in validacoes) {
            estadoInicial[campo] = {valido: true, mensagem: ''}
        }
        return estadoInicial;
    }

    return [errors, validaCampo, podeEnviar];
}

export default useErrors; 
