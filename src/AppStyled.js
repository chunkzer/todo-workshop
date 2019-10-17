import styled from 'styled-components';
import closeIcon from './close.svg';

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const AppTitle = styled.div`
  margin-top: 150px;
  font-size: 48px;
  color: teal;
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

const DeleteIcon = styled.img.attrs({ src: closeIcon })`
  cursor: pointer;
  width: 30px;
  height: 13px;
  margin-right: 4px;
  &:focus {
    outline: none;
  }
`;

const AppStyled = {
  AppTitle,
  Container,
  Header,
  TodoText,
  TodoListContainer,
  Todo,
  DeleteIcon
};

export default AppStyled;
