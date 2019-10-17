import styled from 'styled-components';

const TodoInput = styled.input`
  width: 150px;
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

const TodoInputStyled = {
  AddTodoButton,
  TodoInputContainer,
  TodoInput,
};

export default TodoInputStyled
