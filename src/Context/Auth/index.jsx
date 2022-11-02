import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';

export const AuthContext = React.createContext();

const testUsers = {
  Admin: {
    password: 'admin',
    name: 'admin',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW5pc3RyYXRvciIsInJvbGUiOiJhZG1pbiIsImNhcGFiaWxpdGllcyI6IlsnY3JlYXRlJywncmVhZCcsJ3VwZGF0ZScsJ2RlbGV0ZSddIiwiaWF0IjoxNTE2MjM5MDIyfQ.pAZXAlTmC8fPELk2xHEaP1mUhR8egg9TH5rCyqZhZkQ'
  },
  Reader: {
    password: 'reader',
    name: 'reader',
    capabilities: ['read'],
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmVhZGVyIiwiY2FwYWJpbGl0aWVzIjpbInJlYWQiXX0.8jtDua75M64EiablS8CJIaD4KV9rMzLFGaKXsbEybco'
  },
  Writer: {
    password: 'writer',
    name: 'writer',
    capabilities: ['read', 'write'],
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiV3JpdGVPbmx5IiwiY2FwYWJpbGl0aWVzIjpbInJlYWQiLCJ3cml0ZSJdfQ.gGOiubOphgkdA8xJdEmgINV6hV530_gksx9PbXUKtGY'
  },
  Editor: {
    password: 'editor',
    name: 'editor',
    capabilities: ['read', 'write', 'update', 'delete'],
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiV3JpdGVyIiwiY2FwYWJpbGl0aWVzIjpbInJlYWQiLCJ3cml0ZSIsInVwZGF0ZSIsImRlbGV0ZSJdfQ.jrb7yupzGaUIJcDX-CQs93zEl6czjdOZyoHFcqiYpuk'
  },
}

function AuthProvider({ children }) {

  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [user, setUser] = useState({});
  let [error, setError] = useState(null);

  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  }

  const login = async (username, password) => {
    let authCreds = testUsers[username];

    if (authCreds && authCreds.password === password) {
      try {
        _validateToken(authCreds.token);
      } catch (e) {
        console.error(e);
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

    _validateToken(token);
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