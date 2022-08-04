import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";

export default function TablePerso({ persos }) {
  // console.log("Perso ", persos);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Thumbnail&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {persos.map((perso) => (
            <TableRow
              key={perso.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {perso.name}
              </TableCell>
              <TableCell align="right">{perso.description}</TableCell>
              <TableCell align="right">
                <Image
                  src={`${perso.thumbnail.path}.${perso.thumbnail.extension}`}
                  alt={`Picture of ${perso.name}`}
                  width={500}
                  height={500}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
