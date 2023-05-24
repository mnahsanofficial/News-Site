import React, { useState } from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleTerms = (event) => {
    setAccepted(event.target.checked);
  };
  return (
    <Container className="w-50 mx-auto">
      <h3>Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            required
            name="name"
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            required
            name="photo"
            placeholder="Enter Photo URL"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            required
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleTerms}
            type="checkbox"
            name="accept"
            label={
              <>
                Accept <Link to="/terms">Terms & Conditions</Link>
              </>
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
      </Form>
      <Form.Text className="text-secondary">
        Already Have an Account? <Link to="/login">Login</Link>
      </Form.Text>
      <br />
      <Form.Text className="text-sucess">
        We'll never share your email with anyone else.
      </Form.Text>
      <br />
      <Form.Text className="text-danger">
        We'll never share your email with anyone else.
      </Form.Text>
    </Container>
  );
};

export default Register;
