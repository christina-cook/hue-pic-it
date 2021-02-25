/* eslint-disable no-unused-vars */
import React, {useState, useEffect, useContext, useRef} from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  return (
    <>
      <Container className='form-container'>
        <Card>
          <Card.Body>
            <h2 className='form-title'>Log In</h2>
            <Form className='login-form'>
              <Form.Group id='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' ref={emailRef} required></Form.Control>
              </Form.Group>
              <Form.Group id='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' ref={passwordRef} required></Form.Control>
              </Form.Group>
              <Button type='submit' className='form-submit-button'>Log In</Button>
            </Form>
            <Card.Footer>Need to create an account? <Link to='/signup'>Sign Up</Link></Card.Footer>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Login;
