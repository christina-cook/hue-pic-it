import React, {useState, useRef} from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Container, Card, Form, Button, Image, Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import google from '../assets/form/google.png';
import facebook from '../assets/form/facebook.png';
import github from '../assets/form/github.png';

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login, currentUser, signInWithPopup } = useAuth()

  const [error, setError] = useState('')

  async function handleSubmit(event){
    event.preventDefault()

    try {
      await login(emailRef.current.value, passwordRef.current.value)
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
      {currentUser && <Redirect to='/' />}
      <Container className='form-container'>
        <Card className='form-card'>
          <Card.Body>
            <h1 className="logo" style={{fontFamily: "Bungee Inline, cursive", textAlign: "center"}}>
              Hue Pic It
            </h1>
            <h2 className='form-title'>Log In</h2>
            {error && <Alert className='error-alert' variant='danger'>{error}</Alert>}
            <Form className='login-form' onSubmit={handleSubmit}>
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
              <p className='form-footer'>Need to create an account? <Link to='/signup' className='signup-link'>Sign Up</Link></p>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Login;
