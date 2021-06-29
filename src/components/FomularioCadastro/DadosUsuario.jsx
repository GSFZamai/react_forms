import { TextField, Button} from "@material-ui/core";
import React from 'react';

export function DadosUsuarios({aoEnviar}) {
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            aoEnviar();
        }}>
            <TextField 
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
                id="senha"
                type="password" 
                name="senha" 
                label="senha"
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