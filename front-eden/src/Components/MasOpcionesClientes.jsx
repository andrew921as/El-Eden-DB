import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import {
    IconButton,
    Tooltip,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import '../styles/MasOpciones.css';
import ClearIcon from '@mui/icons-material/Clear';

export default function MasOpcionesBotonCliente() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton variant="outlined" onClick={handleClickOpen}>
                <Tooltip title="Mas Opciones">
                    <MoreHorizIcon />
                </Tooltip>
            </IconButton>
            <Dialog open={open} onClose={handleClose} >
                <div className='Contenedor-Titulo'>
                    <Button variant="text" onClick={handleClose} endIcon={<ClearIcon/>}>Cancelar</Button>
                </div>
                <DialogContent sx={{ backgroundColor: '#EAE0D5' }}>
                    <TextField margin="dense" id="name" label="Nombre" fullWidth variant="standard" />
                    <TextField margin="dense" id="name" label="Nombre" fullWidth variant="standard" />
                    <TextField margin="dense" id="name" label="Nombre" fullWidth variant="standard" />
                    <TextField margin="dense" id="name" label="Nombre" fullWidth variant="standard" />
                    <TextField margin="dense" id="name" label="Nombre" fullWidth variant="standard" />
                    <TextField margin="dense" id="name" label="Nombre" fullWidth variant="standard" />
                    <TextField margin="dense" id="name" label="Nombre" fullWidth variant="standard" />
                </DialogContent>
                <DialogActions sx={{ backgroundColor: '#EAE0D5', justifyContent: "space-between" }}>
                <Button variant="contained" onClick={handleClose} endIcon={<DeleteIcon />} >Eliminar Registro</Button>
                    <Button variant="contained" onClick={handleClose} endIcon={<SaveAsIcon />} >Guardar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
