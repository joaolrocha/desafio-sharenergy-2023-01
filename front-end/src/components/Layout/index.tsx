import {Outlet} from "react-router-dom";
import {Container} from '@mui/material'
import NavBar from "../Navbar";
import "./styles.css";


function Layout() {
  return (
    <div className="layout-container">
      <header>
        <NavBar/>
      </header>
      <Container className="layout-content" maxWidth="xl">
        <Outlet />
      </Container>
    </div>
  )
}

export default Layout