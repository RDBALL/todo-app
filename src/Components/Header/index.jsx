import React from 'react';
import { Navbar, Header} from '@mantine/core';
import './styles.scss'

function appHeader({ incomplete }) {
  return (
    <Header>
      <Navbar fixed={false} position={{ top: 0, left: 0 }}>
      This is a Navbar
      </Navbar>
      <div>
        <h1 id='headerH1'>To Do List: {incomplete} items pending</h1>
      </div>
    </Header>
  )
}

export default appHeader;