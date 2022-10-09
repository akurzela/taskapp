import React, { useState } from 'react';
import { Form } from './Form';
import { Todo } from './Todo';

export const List = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.name || /^\s*$/.test(todo.name)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };



  return (
    <>
      <h1>List of Todos</h1>
      <Form onSubmit={addTodo} />
      <Todo
        todos={todos}
        removeTodo={removeTodo}
      />
    </>
  );
}

