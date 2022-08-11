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
import MasOpcionesBotonAnimales from './MasOpcionesAnimales';
import theme from '../Theme';

function createData(id, nombre, especie, estado, MotivoIngreso, FechaIngreso, FechaSalida) {
    return { id, nombre, especie, estado, MotivoIngreso, FechaIngreso, FechaSalida };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: '#881600',
    color: '#fff'
}));

const rows = [
    {id:123, Nombre:"Lupa", Especie:"Shitzu", Estado:'Enferma', MotivoIngreso:'hemorragia', FechaIngreso:'02/20/2018', FechaSalida: '02/25/2018'}
];

export default function AnimalesTable() {
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
                            <StyledTableCell align="center">Acciones</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                            >
                                <TableCell component="th" scope="row" align="center"> {row.id}</TableCell>
                                <TableCell align="center">{row.Nombre}</TableCell>
                                <TableCell align="center">{row.Especie}</TableCell>
                                <TableCell align="center">{row.Estado}</TableCell>
                                <MasOpcionesBotonAnimales row={row} />
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    );
}
