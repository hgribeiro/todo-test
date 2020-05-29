import React, { FormEvent } from 'react';

import { Container } from './styles';
interface TodoItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  removeTodo: (id: string) => void;
}
const Item: React.FC<TodoItemProps> = ({todo, toggleTodo, removeTodo }) => {

  const handleRemoveTodo = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeTodo(todo.id);
  }
  return (
  
  <Container statuss={todo.complete} >
    <form>
      <label>
      <input type='checkbox' checked={todo.complete} onChange={ () => toggleTodo(todo) } />
      <p>{todo.text}</p>s
      </label>
      <button type='submit' onClick={handleRemoveTodo} >x</button>
    </form>
  </Container>

  );
}

export default Item;
