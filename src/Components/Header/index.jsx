import React from 'react';
import './styles.scss'

function Header({ incomplete }) {
  return (
    <div>
        <h1 id='headerH1'>To Do List: {incomplete} items pending</h1>
    </div>
  )
}

export default Header;