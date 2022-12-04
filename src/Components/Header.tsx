import React from "react";
import "../Style/Header.css";
import { Navbar, Container, ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
        <ButtonGroup>
          <Button>
            <Link to="logIn" style={{ color: "#ffff" }}>
              Log In
            </Link>
          </Button>
          <Button>
            <Link to="signIn" style={{ color: "#ffff" }}>
              Sign In
            </Link>
          </Button>
        </ButtonGroup>
      </Container>
    </Navbar>
  );
}
