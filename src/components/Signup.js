// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect, useContext, useRef} from 'react';
import {useAuth} from '../contexts/AuthContext'

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
    <h2>Signup</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="email"></label>
      <input className="email" type="email" ref={emailRef} required></input>
      <label htmlFor="password"></label>
      <input className="password" type="password" ref={passwordRef} required></input>
      <label htmlFor="passwordConfirm"></label>
      <input className="passwordConfirm" type="password" ref={passwordConfirmRef} required></input>
      <button type="submit">Sign Up!</button>
    </form>
    </>
  )
}

export default Signup;