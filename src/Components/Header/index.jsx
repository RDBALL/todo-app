import { Header, Navbar } from "@mantine/core";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import Login from "../Login";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "#fff",
  alignText: "middle",
  fontSize: "1.5rem"
};

// const useStyles = createStyles((theme) => ({
//   navbar: {
//     backgroundColor: theme.colors.blue[7],
//     padding: theme.spacing.md,
//     fontSize: theme.fontSizes.md,
//     color: theme.colors.gray[0],
//   },
//   h1: {
//     backgroundColor: theme.colors.gray[8],
//     color: theme.colors.gray[0],
//     width: '80%',
//     margin: 'auto',
//     fontSize: theme.fontSizes.lg,
//     padding: theme.spacing.md,
//     marginBottom: theme.spacing.md,
//     marginTop: theme.spacing.md,
//   }
// }))

const AppHeader = ({ incomplete }) => {
  return (
    <>
      <Header incomplete={incomplete} data-testid="todo-header">
        <Navbar id="navBar">
          <NavLink id="reactRouterLinks" to="/" style={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/settings" style={linkStyle}>
            Settings
          </NavLink>
        </Navbar>
<Login></Login>

      </Header>
    </>
  );
};

export default AppHeader;
