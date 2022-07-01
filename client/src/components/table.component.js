import { useState, useEffect } from "react";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {io} from 'socket.io-client'



export default function AppTable(props) {
//   const [loading, setLoading] = useState(true);

const data = props.tabledata;
  return (
    <React.Fragment>
      
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Message</TableCell>
                
                <TableCell align="center">Timestamp</TableCell>
                <TableCell align="center">Priority</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, idx) => (
                <TableRow
                  key={idx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.message}
                  </TableCell>
                  <TableCell align="center">{row.timestamp}</TableCell>
                  <TableCell align="center">{row.priority}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      
    </React.Fragment>
  );
}
