import React, { useEffect, useState } from 'react'
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
import MasOpcionesBotonAnimales from './MasOpcionesAnimales';
import theme from '../Theme';

function createData(id, nombre, especie, estado, MotivoIngreso, FechaIngreso, FechaSalida) {
    return { id, nombre, especie, estado, MotivoIngreso, FechaIngreso, FechaSalida };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: '#881600',
    color: '#fff'
}));


export default function AnimalesTable({datosBd, reload}) {
    return (
        <ThemeProvider theme={theme}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{}}>
                        <TableRow>
                            <StyledTableCell align="center">Identificador</StyledTableCell>
                            <StyledTableCell align="center">Nombre</StyledTableCell>
                            <StyledTableCell align="center">Especie</StyledTableCell>
                            <StyledTableCell align="center">Estado</StyledTableCell>
                            <StyledTableCell align="center">Ingreso</StyledTableCell>
                            <StyledTableCell align="center">Acciones</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {datosBd.map((row) => (
                            <TableRow
                                key={row.id}
                            >
                                <TableCell component="th" scope="row" align="center"> {row.id_animal}</TableCell>
                                <TableCell align="center">{row.nombre_animal}</TableCell>
                                <TableCell align="center">{row.tipo}</TableCell>
                                <TableCell align="center">{row.estado}</TableCell>
                                <TableCell align="center">{row.motivo_ingreso}</TableCell>
                                <TableCell align="center"><MasOpcionesBotonAnimales row={row} reload={reload} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    );
}
