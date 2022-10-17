import React from 'react';
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from '@aws-amplify/ui-react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


export const Todo = ({ todos, removeTodo }) => {

  return (
    <Table
      size="small"
      caption=""
      highlightOnHover={false}>
      <TableHead>
        <TableRow size="small">
          {/* <TableCell as="th">Id</TableCell> */}
          <TableCell as="th">Name</TableCell>
          <TableCell as="th">Description</TableCell>
          <TableCell as="th">Priority</TableCell>
          <TableCell as="th">Status</TableCell>
          <TableCell as="th">Remove</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {todos.map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            {/* <TableCell component="th" scope="row">
              {row.id}
            </TableCell> */}
            <TableCell align="right">{row.name}</TableCell>
            <TableCell align="right">{row.description}</TableCell>
            <TableCell align="right">{row.priority}</TableCell>
            <TableCell align="right">{row.status}</TableCell>
            <TableCell align="right">
              <HighlightOffIcon
                onClick={() => removeTodo(row.id)}
                className='delete-icon'
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table >
  )

}
