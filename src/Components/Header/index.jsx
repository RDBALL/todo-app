import { Header, Navbar } from "@mantine/core";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import Login from "../Login";

const AppHeader = ({ incomplete }) => {
  return (
    <>
      <Header incomplete={incomplete} data-testid="todo-header">
        <Navbar id="navBar">
          <NavLink id="reactRouterLinks" to="/" >
            Home
          </NavLink>
          <NavLink id="reactRouterLinks" to="/settings" >
            Settings
          </NavLink>
          <Login />
        </Navbar>
      </Header>
    </>
  );
};

export default AppHeader;
