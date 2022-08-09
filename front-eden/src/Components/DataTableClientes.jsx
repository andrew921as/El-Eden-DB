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
import MasOpcionesClientes from './MasOpcionesClientes';
import theme from '../Theme';

function createData(Cedula, Nombre, Apellido, Telefono, Correo, Acciones) {
    return { Cedula, Nombre, Apellido, Telefono, Correo, Acciones };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: '#881600',
    color: '#fff'
}));

const rows = [
    createData(1,
        'Pepito',
        'Perez',
        '45757587',
        'c@2',
        <MasOpcionesClientes />
    ),
];

export default function BasicTable() {
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
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                            >
                                <TableCell component="th" scope="row" align="center"> {row.Cedula}</TableCell>
                                <TableCell align="center">{row.Nombre}</TableCell>
                                <TableCell align="center">{row.Apellido}</TableCell>
                                <TableCell align="center">{row.Telefono}</TableCell>
                                <TableCell align="center">{row.Correo}</TableCell>
                                <TableCell align="center">{row.Acciones}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    );
}
