'use client';

import Link from 'next/link';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
  return (
    <>
      <h1>Sign Up</h1>
      <p>Create Your Account</p>
      <Form >
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter name'
            name='name'
            style={{ maxWidth: '200px' }}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            name='email'
            style={{ maxWidth: '200px' }}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            name='password'
            style={{ maxWidth: '200px' }}
          />
        </Form.Group>
        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            name='password2'
            style={{ maxWidth: '200px' }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p>
        Already have an account? <Link href='/login'>Sign In</Link>
      </p>
    </>
  );
};

export default Register;
