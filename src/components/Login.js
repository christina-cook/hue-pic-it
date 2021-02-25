/* eslint-disable no-unused-vars */
import React, {useState, useEffect, useContext, useRef} from 'react';
import { Container, Card, Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import google from '../assets/form/google.png';
import facebook from '../assets/form/facebook.png';
import github from '../assets/form/github.png';

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
            <div className='or-container'>
              <hr className='line'></hr>
              <p className='or-text'>or</p>
              <hr className='line'></hr>
            </div>
            <div className='form-auth-buttons'>
              <Button type='submit' variant='outline-secondary' className='google-button'>
                <Image src={google} alt='google logo' className='button-icon'/>
                Continue with Google
              </Button>
              <Button type='submit' variant='outline-secondary' className='facebook-button'>
                <Image src={facebook} alt='facebook logo' className='button-icon'/>
                Continue with Facebook
              </Button>
              <Button type='submit' variant='outline-secondary' className='github-button'>
                <Image src={github} alt='github logo' className='button-icon'/>
                Continue with GitHub
              </Button>
            </div>
            <Card.Footer>
              <p className='form-footer'>Need to create an account? <Link to='/signup'>Sign Up</Link></p>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Login;
