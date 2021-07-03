function validaCpf(cpf) {
    if(cpf.length !== 11) {
        return {valido: false, mensagem: 'CPF Inválido'};
    }else {
        return {valido: true, mensagem: ''}
    }
}

function validaSenha(senha) {
    if(senha.length < 4 || senha.length > 72) {
        return {valido: false, mensagem: 'A senha deve conter entre 4 e 72 dígitos'};
    }else {
        return {valido: true, mensagem: ''}
    }
}

function validaNome(nome) {
    if(nome.length < 3) {
        return {valido: false, mensagem: 'O nome deve conter pelo menos 3 dígitos'};
    }else {
        return {valido: true, mensagem: ''}
    }
}

export {validaCpf, validaSenha, validaNome};