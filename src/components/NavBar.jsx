import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">PC Gamers Paradise</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Computadores" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All-in-One</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Desktop
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Desktops Gamer</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Componentes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Procesadores</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Placas Base
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Memorias</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Tarjetas Gráficas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Almacenamiento
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                Gabinetes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">
                Fuentes de Poder
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">
                Refrigeración
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#monitores">Monitores</Nav.Link>
            <NavDropdown title="Periféricos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Teclados</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Mouse
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
