import React from "react";
import { Navbar, ButtonGroup, Button } from "react-bootstrap";
import "../Style/Footer.css";

export default function Footer(): JSX.Element {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom" style={{ height: 80 }}>
      <ButtonGroup>
        <Button>
          <a
            href="https://www.linkedin.com/in/santiago-weihmuller-54539319b/"
            style={{ color: "white" }}
          >
            Linkedin
          </a>
        </Button>
        <Button>
          <a href="https://github.com/SantiW01" style={{ color: "white" }}>
            Github
          </a>
        </Button>
      </ButtonGroup>
    </Navbar>
  );
}
