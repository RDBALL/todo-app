import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/Auth';
import { When } from 'react-if';
import { Box } from '@mantine/core';

function Login() {

  const { isLoggedIn, login, logout, user } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    login(username, password);
  }

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "username") setUsername(value);
    if (name === 'password') setPassword(value);
  }

  return (
    <Box id='loginComponent'>
    <div id="login-container">
      <When condition={isLoggedIn}>
        <button onClick={logout}>Logout</button>
        <span>Logged in as {user.name}</span>
      </When>

      <When condition={!isLoggedIn}>
        <form id="login-form" onSubmit={handleSubmit}>
          <input
            data-testid="username"
            placeholder="username"
            name='username'
            onChange={handleChange}
          />
          <input
            data-testid="password"
            placeholder="password"
            name="password"
            type='password'
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </When>
    </div>
    </Box>
  )
}

export default Login;
