import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const {signIn}=useContext(AuthContext);
  const navigate=useNavigate();
  const location=useLocation();

  const from=location.state?.from?.pathname||'/'

  const handleLogin=event=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;

    signIn(email,password)
    .then(result=>{
      const loggedUser=result.user;
      navigate(from,{replace:true})
    })
    .catch(error=>{
      console.log(error.message)
    })
  }

  
  return (
    <Container className="w-50 mx-auto">
      <h3>Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" required name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required name="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <Form.Text className="text-secondary">
       Don't Have an Account? <Link to='/register'>Register</Link>
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

export default Login;
