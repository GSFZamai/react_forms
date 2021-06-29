import React from 'react'; 
import { TextField, Button } from '@material-ui/core'

export function DadosEntrega() {
    return (
        <form>
            <TextField 
                id="cep"
                type="number" 
                name="cep" 
                label="CEP"
                variant="outlined"
                margin="normal"
            />

            <TextField 
                id="endereco"
                type="text" 
                name="endereco" 
                label="Endereco"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField 
                id="numero"
                type="number" 
                name="numero" 
                label="Numero"
                variant="outlined"
                margin="normal"
            />

            <TextField 
                id="estado"
                type="text" 
                name="estado" 
                label="Estado"
                variant="outlined"
                margin="normal"
            />

            <TextField 
                id="cidade"
                type="text" 
                name="cidade" 
                label="Cidade"
                variant="outlined"
                margin="normal"
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
            >
                Finalizar Cadastro
            </Button>
        </form>
    )
}