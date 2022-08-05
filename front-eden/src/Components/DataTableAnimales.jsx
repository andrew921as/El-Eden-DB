import * as React from 'react';
import {
    Paper,
    TableRow,
    TableHead,
    TableContainer,
    TableCell,
    TableBody,
    Table,
    ThemeProvider,
    styled

} from '@mui/material';
import MasOpcionesBoton from './MasOpciones';
import theme from '../Theme';

function createData(id, nombre, especie, estado, MotivoIngreso, FechaIngreso, FechaSalida, acciones) {
    return { id, nombre, especie, estado, MotivoIngreso, FechaIngreso, FechaSalida, acciones };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: '#881600',
    color: '#fff'
}));

const rows = [
    createData(1,
        'Pepito',
        'Perro',
        'sano',
        'albergue',
        '27/01/2022',
        'N/a',
        <MasOpcionesBoton />
    ),
];

export default function BasicTable() {
    return (
        <ThemeProvider theme={theme}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{}}>
                        <TableRow>
                            <StyledTableCell align="center">Identificación</StyledTableCell>
                            <StyledTableCell align="center">Nombre</StyledTableCell>
                            <StyledTableCell align="center">Especie</StyledTableCell>
                            <StyledTableCell align="center">Estado</StyledTableCell>
                            <StyledTableCell align="center">Motivo de Ingreso</StyledTableCell>
                            <StyledTableCell align="center">Fecha ingreso</StyledTableCell>
                            <StyledTableCell align="center">Fecha salida</StyledTableCell>
                            <StyledTableCell align="center">Acciones</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                            >
                                <TableCell component="th" scope="row" align="center"> {row.id}</TableCell>
                                <TableCell align="center">{row.nombre}</TableCell>
                                <TableCell align="center">{row.especie}</TableCell>
                                <TableCell align="center">{row.estado}</TableCell>
                                <TableCell align="center">{row.MotivoIngreso}</TableCell>
                                <TableCell align="center">{row.FechaIngreso}</TableCell>
                                <TableCell align="center">{row.FechaSalida}</TableCell>
                                <TableCell align="center">{row.acciones}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    );
}
