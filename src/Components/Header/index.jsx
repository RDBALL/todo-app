import React from 'react';

function Header({ incomplete }) {
  return (
    <div>
        <h1>To Do List: {incomplete} items pending</h1>
    </div>
  )
}

export default Header;