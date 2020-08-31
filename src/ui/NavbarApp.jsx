import React, { useContext } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCheckAuth from '../auth/hooks/useCheckAuth';
import { Store } from '../store';
 
 
const NavbarApp = () => {

    const aa = useContext(Store);
    const user = JSON.parse(useCheckAuth())


    const handleLogout = () => {

    }

    const login = user === null ? (<li className="nav-item"> <Link className="nav-link " to="/login">Login</Link></li>) : 
    (
        <NavDropdown title={user.name} id="collasible-nav-dropdown">
            <Link className="dropdown-item" to="/favorite">Favoritos</Link>
             
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleLogout}>Cerrar Session</NavDropdown.Item>
        </NavDropdown>
    )

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Gifs</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                   <li className="nav-item"><Link className="nav-link" to="/favorite">Favoritos</Link></li> 
                   
                    { login }
                </Nav>
            </Navbar.Collapse>
      </Navbar>
    )
}
 
export default NavbarApp
