import React, { useState } from 'react';
import { Form } from './Form';
import { Todo } from './Todo';
import { Heading, Card, ScrollView } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

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
    <div id="app">
      < div id="header" > <Heading level={2}>List of Todos</Heading></div >
      <div className="main-card">
        <Card variation="elevated">
          <Form onSubmit={addTodo} />
          <ScrollView maxWidth="100%"><Todo
            todos={todos}
            removeTodo={removeTodo} /></ScrollView>
        </Card>
      </div>
    </div>

  );
}

