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
import theme from '../Theme';
import MasOpcionesBotonVoluntarios from './MasOpcionesVoluntarios';

function createData(Cedula, Nombre, Apellido, Telefono, Correo, Acciones) {
    return { Cedula, Nombre, Apellido, Telefono, Correo, Acciones };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: '#881600',
    color: '#fff'
}));

const rows = [
    {Cedula:123, Nombre:"Holaloco", Apellido:"Queloquiza", Telefono:123456, Correo:"locos@loquiando.com"}
];

export default function VolutariosTable() {
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
                                <MasOpcionesBotonVoluntarios row={row} />
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    );
}
