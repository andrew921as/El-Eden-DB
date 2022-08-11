import React, { useState } from 'react'
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
import {busquedas} from '../Functions/SqlFunctions';

import MasOpcionesClientes from './MasOpcionesClientes';

import theme from '../Theme';

function createData(id, nombre, cargo, telefono, Acciones) {
    return { id, nombre, cargo, telefono, Acciones };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: '#881600',
    color: '#fff'
}));


export default function ClienteTable({datosBd, reload}) {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    return (
        <ThemeProvider theme={theme}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{}}>
                        <TableRow>
                            <StyledTableCell align="center">Cedula</StyledTableCell>
                            <StyledTableCell align="center">Nombre</StyledTableCell>
                            <StyledTableCell align="center">Apellido</StyledTableCell>
                            <StyledTableCell align="center">Telefono</StyledTableCell>
                            <StyledTableCell align="center">Correo</StyledTableCell>
                            <StyledTableCell align="center">Acciones</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {datosBd.map((row) => (
                            <TableRow
                                key={row.id}
                            >
                                <TableCell component="th" scope="row" align="center"> {row.cedula}</TableCell>
                                <TableCell align="center">{row.nombre}</TableCell>
                                <TableCell align="center">{row.apellido}</TableCell>
                                <TableCell align="center">{row.telefono}</TableCell>
                                <TableCell align="center">{row.correo}</TableCell>
                                <TableCell align="center"> <MasOpcionesClientes row={row} reload={reload}/> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    );
}
