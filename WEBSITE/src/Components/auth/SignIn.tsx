import React, { SyntheticEvent } from "react";
import "../../Style/Form.css";
import { Form } from "react-bootstrap";
import { useForm } from "../../Hooks/useLogOrSignIn";
export default function SignIn() {
  const [formState, handleInputChange] = useForm({
    user_name: "",
    user_password: "",
  });

  function handleSubmit(e: SyntheticEvent) {}

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
      <Form.Label>Password</Form.Label>
      <Form.Control
        value={formState.user_password}
        onChange={handleInputChange}
        name="user_password"
        type="password"
        placeholder="Password"
      />
      <Form.Control
        type="submit"
        placeholder="Submit"
        onSubmit={handleSubmit}
      />
    </Form.Group>
  );
}
