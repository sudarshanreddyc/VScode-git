import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import profile from "./photos/profile.png";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <Navbar
        className="navbar"
        style={{ backgroundColor: "#070101" }}
        expand="lg"
      >
        <Navbar.Brand href="#home" className="text-primary">
          NATURO <br />
          ……LIVE NATURALLY
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ color: "#ffbb33" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">
            <Nav.Link href="#home" style={{ paddingRight: "20px" }}>
              <img
                src={profile}
                alt=""
                style={{ width: "25px", height: "23px" }}
              />
            </Nav.Link>
            <Nav.Link
              href="#home"
              style={{ paddingRight: "20px", color: "#ffbb33" }}
            >
              SignUp/Login
            </Nav.Link>
            <NavDropdown
              title={<span className="text-warning">Plans</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href="#link"
              style={{ paddingRight: "20px", color: "#ffbb33" }}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
