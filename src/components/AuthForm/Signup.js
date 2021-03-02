// eslint-disable-next-line no-unused-vars
import React, {useState, useRef} from 'react';
import {useAuth} from '../../contexts/AuthContext';
import { Container, Card, Form, Button, Image, Alert } from 'react-bootstrap';
import './Signup.css';
import { Link, Redirect } from 'react-router-dom';
import google from '../../assets/form/google.png';
import facebook from '../../assets/form/facebook.png';
import github from '../../assets/form/github.png';

const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState('')
  const {signUp, currentUser, signInWithPopup} = useAuth()



  async function handleSubmit(event) {
    event.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      await signUp(emailRef.current.value, passwordRef.current.value)
      setError('')
    } catch(error) {
      setError(error.message)
    }
  }

  function handleSignInWithPopup(event) {
    signInWithPopup(event.target.id)
  }

  return (
    <>
      {currentUser && <Redirect to='/'/>}
      <Container className='form-container'>
        <Card className='form-card'>
          <Card.Body>
            <h1 className="logo" style={{fontFamily: "Bungee Inline, cursive", textAlign: "center"}}>
              Hue Pic It
            </h1>
            <h2 className='form-title'>Sign Up</h2>
            {error && <Alert variant='danger' className="error-alert">{error}</Alert>}
            <Form className='signup-form' onSubmit={handleSubmit}>
              <Form.Group id='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' ref={emailRef} required></Form.Control>
              </Form.Group>
              <Form.Group id='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' ref={passwordRef} required></Form.Control>
              </Form.Group>
              <Form.Group id='password-confirm'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type='password' ref={passwordConfirmRef} required></Form.Control>
              </Form.Group>
              <Button type='submit' className='form-submit-button'>Sign Up</Button>
            </Form>
            <div className='or-container'>
              <hr className='line'></hr>
              <p className='or-text'>or</p>
              <hr className='line'></hr>
            </div>
            <div className='form-auth-buttons'>
              <Button type='button' variant='outline-secondary' className='google-button' id='google' onClick={handleSignInWithPopup}>
                <Image src={google} alt='google logo' className='button-icon'/>
                Continue with Google
              </Button>
              <Button type='submit' variant='outline-secondary' className='facebook-button' id='facebook' onClick={handleSignInWithPopup}>
                <Image src={facebook} alt='facebook logo' className='button-icon'/>
                Continue with Facebook
              </Button>
              <Button type='submit' variant='outline-secondary' className='github-button' id='github' onClick={handleSignInWithPopup}>
                <Image src={github} alt='github logo' className='button-icon'/>
                Continue with GitHub
              </Button>
            </div>
            <Card.Footer>
              <p className='form-footer'>Already have an account? <Link to='/login' className='login-link'>Log In</Link></p>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Signup;
