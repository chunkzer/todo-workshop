import React, { useState } from 'react';
import AppStyled from './AppStyled';
import TodoInput from './TodoInput/TodoInput';

// todo!
// todoText: String

const mockTodos = [
  { todoText: 'Termina la documentacion del workshop'},
  { todoText: 'Llamale a tu mama'},
  { todoText: 'Haz todas tus vueltas burocraticas' },
  { todoText: 'Agenda una limpieza dental' },
];

const {
  AppTitle,
  Container,
  Header,
  TodoText,
  TodoListContainer,
  Todo,
  DeleteIcon
} = AppStyled;

function App() {
  const [todos, setTodos] = useState(mockTodos);

  const addTodoFn = (todoText) => {
    setTodos([...todos, { todoText }]);
  };

  const deleteTodoFn = (index) => {
    const newTodos =
      [...todos.slice(0, index), ...todos.slice(index + 1, todos.length)];
    setTodos(newTodos);
  };

  return (
    <Container>
      <Header>
        <AppTitle > TODO LISTER 9000</AppTitle>
        <TodoInput addTodoFn={addTodoFn} />
        <TodoListContainer >
        { todos.map((todo, index) => {
            return (
              <Todo>
                <TodoText>{todo.todoText}</TodoText>
                <DeleteIcon onClick={() => deleteTodoFn(index)}/>
              </Todo>
            );
          })
        }
        </TodoListContainer >
      </Header>
    </Container>
  );
}

export default App;
