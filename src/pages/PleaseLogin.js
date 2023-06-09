import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const PleaseLogin = () => {
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <h3>Please Login</h3>
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Button variant="primary">
      Submit
    </Button>
  </Form>
  )
}

export default PleaseLogin