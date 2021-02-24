// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect, useContext, useRef} from 'react';
import {useAuth} from '../contexts/AuthContext';
import { Container, Card, Form, Button } from 'react-bootstrap';
import './Signup.css';

const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('')
  const {signUp} = useAuth()



  async function handleSubmit(event) {
    event.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      const response = await signUp(emailRef.current.value, passwordRef.current.value)
      console.log(response)
        //ensure no error
        //make a new currentuser YAY DID THIS
        //also need to go to the dashboard here
    } catch {

      //if error, do stuff about it here
      setError(`Could not make an account`)
      console.log('ERROR', error)
    }
  }

  return (
    <>
      <Container className='form-container'>
        <Card>
          <Card.Body>
            <h2 className='form-title'>Sign Up</h2>
            <Form>
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
                <Form.Control type='passwordConfirm' ref={passwordConfirmRef} required></Form.Control>
              </Form.Group>
              <Button type='submit' className='form-submit-button'>Sign Up</Button>
            </Form>
            <Card.Footer className='form-footer'>Already have an account? Login</Card.Footer>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Signup;

// <h2>Signup</h2>
// <form onSubmit={handleSubmit}>
//   <label htmlFor="email"></label>
//   <input className="email" type="email" ref={emailRef} required></input>
//   <label htmlFor="password"></label>
//   <input className="password" type="password" ref={passwordRef} required></input>
//   <label htmlFor="passwordConfirm"></label>
//   <input className="passwordConfirm" type="password" ref={passwordConfirmRef} required></input>
//   <button type="submit">Sign Up!</button>
// </form>
