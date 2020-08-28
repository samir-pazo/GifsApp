import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
 
const NavbarApp = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Gifs</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                   <li className="nav-item"><Link className="nav-link" to="/favorite">Favoritos</Link></li> 
                   <li className="nav-item"> <Link className="nav-link" to="/login">Login</Link></li>
                    
                </Nav>
            </Navbar.Collapse>
      </Navbar>
    )
}

 
export default NavbarApp
