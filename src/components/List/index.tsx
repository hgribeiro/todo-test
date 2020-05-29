import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';

import Item from '../Item';
import Buttons from '../Buttons';

// import { Container } from './styles';

// const initialTodos: Todo[] = [
//   { id: uuid(), text: 'taltaltal', complete: true },
//   { id: uuid(), text: 'taltaltal22', complete: false },
//   { id: uuid(), text: 'taltaltal33', complete: false },
// ]

const List: React.FC = () => {
  let initialTodos = []
  const memoryTaks = localStorage.getItem('@Todo:list');
  if (memoryTaks !== null ) {
    initialTodos = JSON.parse(memoryTaks);
  }

  const [ todos, setTodos ] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map((todo:Todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    } );
    setTodos(newTodos);
  }


  const addTodo: AddTodo = newTodo => {
     if(newTodo.trim() !== '') {
        setTodos( [...todos, 
      { id: uuid(), text: newTodo, complete: false }] );
    } 
  }
  useEffect( () => {
    localStorage.setItem('@Todo:list', JSON.stringify(todos));
  });

  const removeAllTodos = () => {
    setTodos([]);
    localStorage.removeItem('@Todo:list');
  }

  const removeTodo = (id: string ) => {
    const newTodos = [...todos];
    const indexToRemove = newTodos.findIndex( (todo) => todo.id === id );
    console.log(indexToRemove)
    
    newTodos.splice(indexToRemove,1)
    setTodos(newTodos);
  }

  return (
    <>
      <ul>
        {todos.map((todo:Todo) => { return (
        <Item key= {todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        );
        } )}
      </ul>
      <Buttons addTodo={addTodo} removeTodos={removeAllTodos} />
    </> 
  ); 
}

export default List;
