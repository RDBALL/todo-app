import { useContext } from "react";
import { AuthContext } from "../Auth";

const Login = () => {
  const {
    isLoggedIn,
    user,
    error,
    can,
    login,
    logout,
  } = useContext(AuthContext);
  return(
    <>
    <label>Username:
      <input onChange={(e) => setUsername(e.target.value)}></input>
    </label>
    <label>Password:
      <input onChange={(e) => setPassword(e.target.value)}></input>
    </label>
    <button onClick={() => login(username, password)}>Login</button>

    <div>user: {JSON.stringify(user)}</div>
    </>
  )
}

export default Login;
