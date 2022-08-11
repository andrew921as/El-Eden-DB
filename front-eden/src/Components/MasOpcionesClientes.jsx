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
import { clienteNombre, clienteCedula, getCliente } from '../Functions/UtilityF';

import {
    IconButton,
    Tooltip,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import '../styles/MasOpciones.css';
import ClearIcon from '@mui/icons-material/Clear';

export default function MasOpcionesCliente(row) {


     function registrarPago() {
        getCliente(row.row)
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
                    <TextField margin="dense" id="cedula" label="Cédula" fullWidth variant="standard" defaultValue={row.row.cedula} />
                    <TextField margin="dense" id="nombre" label="Nombre" fullWidth variant="standard" defaultValue={row.row.nombre} />
                    <TextField margin="dense" id="apellido" label="Apellido" fullWidth variant="standard" defaultValue={row.row.apellido} />
                    <TextField margin="dense" id="correo" label="Correo electrónico" fullWidth variant="standard" defaultValue={row.row.correo} />
                    <TextField margin="dense" id="tipoVia" label="Tipo de vía" fullWidth variant="standard" defaultValue={row.row.tipo_via} />
                    <TextField margin="dense" id="calle" label="Número de calle" fullWidth variant="standard" defaultValue={row.row.numero_calle} />
                    <TextField margin="dense" id="casa" label="Número de casa" fullWidth variant="standard" defaultValue={row.row.numero_casa} />
                    <TextField margin="dense" id="telefono" label="Teléfono" fullWidth variant="standard" defaultValue={row.row.telefono} />
                </DialogContent>
                <DialogActions sx={{ backgroundColor: '#EAE0D5', justifyContent: "space-between" }}>
                    <Button variant="contained" onClick={eliminarReg} endIcon={<DeleteIcon />} >Eliminar Registro</Button>
                    <Button variant="contained" onClick={handleClose} endIcon={<SaveAsIcon />} >Guardar</Button>
                    <Button variant="contained" onClick={registrarPago} endIcon={<AttachMoneyIcon />} >Registrar Pago</Button>
                </DialogActions>
            </Dialog> 
        </div>
    );
}
