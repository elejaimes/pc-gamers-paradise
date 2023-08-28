import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <LinkContainer to={"/"}>
            <Navbar.Brand>PC Gamers Paradise</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <LinkContainer to={"/catalogue"}>
                <Nav.Link>Todos Los Productos</Nav.Link>
              </LinkContainer>

              <NavDropdown title="Computadoras" id="basic-nav-dropdown">
                <LinkContainer to={`/category/${"All-in-One"}`}>
                  <NavDropdown.Item>All-in-One</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/category/${"Escritorio"}`}>
                  <NavDropdown.Item>Escritorio</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/category/${"Computadoras Gamer"}`}>
                  <NavDropdown.Item>Computadoras Gamer</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <NavDropdown title="Componentes" id="basic-nav-dropdown">
                <LinkContainer to={`/category/${"Procesadores"}`}>
                  <NavDropdown.Item>Procesadores</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/category/${"Placas Base"}`}>
                  <NavDropdown.Item>Placas Base</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/category/${"Memorias"}`}>
                  <NavDropdown.Item>Memorias</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/category/${"Tarjetas Gráficas"}`}>
                  <NavDropdown.Item>Tarjetas Gráficas</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/category/${"Almacenamiento"}`}>
                  <NavDropdown.Item>Almacenamiento</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/category/${"Gabinetes"}`}>
                  <NavDropdown.Item>Gabinetes</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/category/${"Fuentes de Poder"}`}>
                  <NavDropdown.Item>Fuentes de Poder</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/category/${"Refrigeración"}`}>
                  <NavDropdown.Item>Refrigeración</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <LinkContainer to={`/category/${"Monitores"}`}>
                <Nav.Link>Monitores</Nav.Link>
              </LinkContainer>

              <NavDropdown title="Periféricos" id="basic-nav-dropdown">
                <LinkContainer to={`/category/${"Teclados"}`}>
                  <NavDropdown.Item>Teclados</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/category/${"Mouse"}`}>
                  <NavDropdown.Item>Mouse</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
