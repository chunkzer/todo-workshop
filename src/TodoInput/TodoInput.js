import React, { useState } from 'react';
import TodoInputStyled from './TodoInputStyled';

const {
  AddTodoButton,
  TodoInputContainer,
  TodoInput,
} = TodoInputStyled;



const TodoInputComponent = ({ addTodoFn }) => {
  const [todoText, setTodoText] = useState('');

  const onInputChange = (e) => {
    setTodoText(e.target.value)
  };

  return (
    <TodoInputContainer>
      <TodoInput value={todoText} onChange={onInputChange} />
      <AddTodoButton onClick={() => addTodoFn(todoText)}>
        New
      </AddTodoButton>
    </TodoInputContainer>
  );
};

export default TodoInputComponent;
