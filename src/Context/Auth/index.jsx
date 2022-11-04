import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
const REACT_APP_API_URL = process.env.REACT_APP_API_URL;



export const AuthContext = React.createContext();

function AuthProvider({ children }) {

  let [error, setError] = useState(null);
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [user, setUser] = useState({});

  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  }

  const login = async (username, password) => {

    const config = {
      baseURL: `${REACT_APP_API_URL}`,
      url: '/signin',
      method: 'post',
      auth: {
        username,
        password,
      }
    }

    const response = await axios(config);
    const { token } = response.data

    if (token) {
      try {
        _validateToken(token);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const _validateToken = (token) => {
    try {
      let validUser = jwt_decode(token);
      if (validUser) {
        setUser(validUser);
        setIsLoggedIn(true);
        cookie.save('auth', token);
      }
    } catch (e) {
      setIsLoggedIn(false);
      setError(e);
    }
  }

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
    setError(null);
    cookie.remove('auth');
  }

  useEffect(() => {
    let token = cookie.load('auth');
    if (token) {
      _validateToken(token);
    }
  }, [])


  const values = {
    user,
    can,
    isLoggedIn,
    login,
    logout,
    error,
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;