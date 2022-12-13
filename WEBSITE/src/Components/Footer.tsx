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
            style={{ color: "#ffff" }}
          >
            Linkedin
          </a>
        </Button>
        <Button>
          <a href="https://github.com/SantiW01" style={{ color: "#ffff" }}>
            Github
          </a>
        </Button>
      </ButtonGroup>
      <p className="made_by" style={{ color: "#ffff" }}>
        Made by Santiago Weihmüller
      </p>
    </Navbar>
  );
}
