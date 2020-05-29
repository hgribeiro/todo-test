import React, { useState, ChangeEvent, FormEvent } from 'react';

import { Container } from './styles';

interface AddTodoFormProps {
  addTodo: AddTodo;
  removeTodos: () => void;
}

const Buttons: React.FC<AddTodoFormProps> = ({ addTodo, removeTodos }) => {
  const [newtodo, setNewTodo] = useState('');
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }

  const handleSubmitAdd = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newtodo);
    setNewTodo('');
  }

  const handleSubmitClear = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeTodos();
  }
  return (
    <Container>
      <input type="text" value={newtodo} onChange={handleChange} />
      <button type='submit' onClick={handleSubmitAdd} >Add Todo</button>
      <button type='submit' onClick={handleSubmitClear} >Clear All</button>
    </Container>
  );
}

export default Buttons;
