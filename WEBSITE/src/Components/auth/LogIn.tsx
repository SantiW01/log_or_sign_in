import React, { SyntheticEvent } from "react";
import "../../Style/Form.css";
import { Form, InputGroup } from "react-bootstrap";
import { useForm } from "../../Hooks/useLogOrSignIn";
export default function LogIn() {
  const [formState, handleInputChange] = useForm({
    user_name: "",
    user_email: "",
    user_password: "",
    repeatUserPassword: "",
  });
  const { user_name, user_email, user_password, repeatUserPassword } =
    formState;
  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    fetch("http://localhost:8080/insert", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        user_name,
        user_email,
        user_password,
      }),
    });
    console.log("Working");
  }

  return (
    <Form.Group controlId="formGroup__logIn" className="form__logIn">
      <Form.Label>Username</Form.Label>
      <Form.Control
        value={formState.user_name}
        onChange={handleInputChange}
        name="user_name"
        type="text"
        placeholder="Username"
      />
      <Form.Label>Email</Form.Label>
      <Form.Control
        value={formState.user_email}
        onChange={handleInputChange}
        name="user_email"
        type="email"
        placeholder="Email"
      />
      <Form.Label>Password</Form.Label>
      <Form.Control
        value={formState.user_password}
        onChange={handleInputChange}
        name="user_password"
        type="password"
        placeholder="Password"
      />
      <Form.Label>Repeat Password</Form.Label>
      <Form.Control
        value={formState.repeatUserPassword}
        onChange={handleInputChange}
        name="repeatUserPassword"
        type="password"
        placeholder="Repeat Password"
      />
      <Form.Control type="submit" placeholder="Submit" onClick={handleSubmit} />
    </Form.Group>
  );
}
