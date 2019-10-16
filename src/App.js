import React from 'react';
import styled from 'styled-components';
import closeIcon from './close.svg';

function App() {
  return (
    <Container>
      <Header>
        <AppTitle > TODO LISTER 9000</AppTitle>
        <TodoInputContainer>
          <TodoInput />
          <AddTodoButton >New</AddTodoButton>
        </TodoInputContainer>
        <TodoListContainer >
          <Todo>
            <TodoText>Termina la documentacion del workshop</TodoText>
            <DeleteIcon />
          </Todo>
          <Todo>
            <TodoText>Llamale a tu mama</TodoText>
            <DeleteIcon />
          </Todo>
          <Todo>
            <TodoText>Haz todas tus vueltas burocraticas</TodoText>
            <DeleteIcon />
          </Todo>
          <Todo>
            <TodoText>Agenda una limpieza dental</TodoText>
            <DeleteIcon />
          </Todo>
        </TodoListContainer >
      </Header>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const TodoInput = styled.input`
  width: 150px;
`;

const AppTitle = styled.div`
  margin-top: 150px;
  font-size: 48px;
  color: teal;
`;

const TodoInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

const AddTodoButton = styled.div`
  background-color: blue;
  color: white;
  height: 20px;
  width: 90px;
  cursor: pointer;
  font-size: 18px;
`;

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TodoText = styled.div`
  margin-left: 4px;
  color: white;
  font-size: 18px;
`;

const Todo = styled.div`
  margin-top: 10px;
  width: 1000px;
  border: 3px solid white;
  height: 25px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteIcon = styled.img.attrs({ src: closeIcon })`
  cursor: pointer;
  width: 30px;
  height: 13px;
  margin-right: 4px;
  &:focus {
    outline: none;
  }
`;

export default App;
