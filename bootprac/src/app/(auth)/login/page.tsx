'use client';

import Link from 'next/link';
import { Form, Button, Alert } from 'react-bootstrap'; // Import React Bootstrap components

const Login = () => {
  return (
    <>
      <h1>Sign In</h1>
      <p>Sign Into Your Account</p>
      <Form >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter email'
            name='email'
            style={{ maxWidth: '200px' }}    
          />       
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password'
            style={{ maxWidth: '200px' }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p>
        <Link href='/register'>Register</Link>
      </p>
    </>
  );
};

export default Login;
