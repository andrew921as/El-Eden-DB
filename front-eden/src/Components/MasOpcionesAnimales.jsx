import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { useNavigate } from 'react-router-dom';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { getAnimal } from '../Functions/UtilityF';

import {
    IconButton,
    Tooltip,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import '../styles/MasOpciones.css';
import ClearIcon from '@mui/icons-material/Clear';

export default function MasOpcionesAnimales(row) {

    function registrarPago() {
        getAnimal(row.row)
        navigate('/Registro-Pago');
    };

    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const eliminarReg = () => {
        //Row te devuelve un dato raro busca a ver
        console.log(row);
        console.log(row.row.nombre);
    }

    return (
        <div>
            <IconButton variant="outlined" onClick={handleClickOpen}>
                <Tooltip title="Mas Opciones">
                    <MoreHorizIcon />
                </Tooltip>
            </IconButton>
            <Dialog open={open} onClose={handleClose} >
                <div className='Contenedor-Titulo'>
                    <Button variant="text" onClick={handleClose} endIcon={<ClearIcon />}>Cancelar</Button>
                </div>
                <DialogContent sx={{ backgroundColor: '#EAE0D5' }}>
                    <TextField margin="dense" id="Id" label="id" fullWidth variant="standard" defaultValue={row.row.id} />
                    <TextField margin="dense" id="nombre" label="Nombre" fullWidth variant="standard" defaultValue={row.row.Nombre} />
                    <TextField margin="dense" id="especie" label="Especie" fullWidth variant="standard" defaultValue={row.row.Especie} />
                    <TextField margin="dense" id="estado" label="estado" fullWidth variant="standard" defaultValue={row.row.Estado} />
                    <TextField margin="dense" id="MotivoIngreso" label="Motivo de ingreso" fullWidth variant="standard" defaultValue={row.row.MotivoIngreso} />
                    <TextField margin="dense" id="FechaIngreso" label="Fecha de ingreso" fullWidth variant="standard" defaultValue={row.row.FechaIngreso} />
                    <TextField margin="dense" id="FechaSalida" label="Fecha de salida" fullWidth variant="standard" defaultValue={row.row.FechaSalida} />
                    <TextField margin="dense" id="observacion" label="observacion" fullWidth variant="standard" defaultValue={row.row.Observacion} />
                </DialogContent>
                <DialogActions sx={{ backgroundColor: '#EAE0D5', justifyContent: "space-between" }}>
                    <Button variant="contained" onClick={eliminarReg} endIcon={<DeleteIcon />} >Eliminar Registro</Button>
                    <Button variant="contained" onClick={handleClose} endIcon={<SaveAsIcon />} >Guardar</Button>
                    <Button variant="contained" endIcon={<AttachMoneyIcon />} onClick={registrarPago} >Seleccionar</Button>
                </DialogActions>
            </Dialog> 
        </div>
    );
}
