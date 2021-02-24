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


  const handleSubmit = (event) => {
    event.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    Promise.resolve(signUp(emailRef.current.value, passwordRef.current.value))
      .then(response => {
        let resp = response.json()
        console.log(resp)
        return resp
      })
    .catch(
      setError('Could not make an account')
    )  
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