import React from 'react';
import {
  Navbar,
  Container,
  Nav
} from "react-bootstrap"
import { NavLink } from "react-router-dom"

export const NavbarComponent = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container className="mt-5">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <NavLink activeClassName="active" className="navbar-text" to="/">Home</NavLink>
              <NavLink activeClassName="active" className="navbar-text" to="/coint-list">Coint List</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
