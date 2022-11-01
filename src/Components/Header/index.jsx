import { Header, Navbar, Button } from '@mantine/core';
import './styles.scss'

const AppHeader = ({ incomplete }) => {

  return (
    <Header data-testid="todo-header">
      <Navbar id='navBar'>
        <Button id='homeButton'>Home</Button>
      </Navbar>
      <h1  id='headerH1' data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
    </Header>
  )
}

export default AppHeader