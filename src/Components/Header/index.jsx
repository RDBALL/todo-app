import { Header, Navbar, Button} from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import { useState } from 'react';
import SettingsForm from '../ListSettings';
import './styles.scss'

const AppHeader = ({ incomplete }) => {
  const [setShowForm] = useState(false);
  const [showForm, toggle] = useToggle();

  return (
    <>
    <Header data-testid="todo-header">
      <Navbar id='navBar'>
        <Button id='homeButton' variant='subtle'>Home</Button>
        <Button id='settingsButton' variant='subtle' onClick={() => toggle()}>Settings</Button>
      </Navbar>
    </Header>
      {
        showForm && <SettingsForm setShowForm={setShowForm} />
      }
      </>
  )
}

export default AppHeader