import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand style={{ marginLeft: "20px" }}>
        
        <strong>Agora</strong>           
        <div>
        </div></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/home">
          Add Item
          </Nav.Link>
          <Nav.Link as={NavLink} to="/numofitems">
          Number of items 
          </Nav.Link>
          <Nav.Link as={NavLink} to="/items">
          Items for sale
          </Nav.Link>
          <Nav.Link as={NavLink} to="/sales">
          Sales
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse
        style={{ marginRight: "20px" }}
        className="justify-content-end"
      >
        <Navbar.Text>

        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
