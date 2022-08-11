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

export default function VolutariosTable({datosBd}) {
    return (
        <ThemeProvider theme={theme}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{}}>
                        <TableRow>
                            <StyledTableCell align="center">Cedula</StyledTableCell>
                            <StyledTableCell align="center">Nombre</StyledTableCell>
                            <StyledTableCell align="center">Cargo</StyledTableCell>
                            <StyledTableCell align="center">Telefono</StyledTableCell>
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
                                <TableCell align="center">{row.cargo}</TableCell>
                                <TableCell align="center">{row.telefono}</TableCell>
                                <TableCell align="center"> <MasOpcionesBotonVoluntarios row={row} /> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    );
}
