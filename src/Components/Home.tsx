import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import "../Style/Home.css";
export default function Home(): JSX.Element {
  return (
    <div className="home">
      <h1 className="presentation">
        Hello! My name is Santiago Weihmüller. In this project I intend to biuld
        a page where you can register and sign in with your own account
      </h1>
      <h3 className="technologies">
        This project is made with React in the part of frontend and Express.js
        for the backend. While using mongodb to storage the username and
        password you choose
      </h3>
      <div className="buttonGroup">
        <div className="login">
          <p>If you don't have an account. Please, Log In!</p>
          <Button className="logInbtn">Log In</Button>
        </div>
        <div className="signin">
          <p>If you have an account. Please, Sign In!</p>
          <Button className="signInbtn">Sign In</Button>
        </div>
      </div>
    </div>
  );
}
