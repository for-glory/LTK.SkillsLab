import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button, Table, TableCell, TableRow } from '@mui/material';
import {
  addToDo,
  selectTodos,
  deleteTodo,
} from '../reducer';
import { useDispatch, useSelector } from 'react-redux';

const BasicForm = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>TODO</h1>
      <Formik
        initialValues={{
          todo: '',
        }}
        onSubmit={(values, actions) => {
          dispatch(addToDo(values.todo));
          actions.resetForm();
        }}
      >
        <Form>
          <label htmlFor="todo">Add ToDo </label>
          <Field id="todo" name="todo" placeholder="TextHere" />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
      <h2>TODO List</h2>
      <Table>
        {
          todos.map(todo => (
            <TableRow key={todo.id}>
              <TableCell>{todo.todo}</TableCell>
              <TableCell>
                <Button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</Button>
              </TableCell>
            </TableRow>
          ))
        }
      </Table>
    </div>
  );
}

export default BasicForm
