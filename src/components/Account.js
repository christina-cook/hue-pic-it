import React, {useState, useRef} from 'react';
import { Form, Button } from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext';


const Account = () => {
  const {currentUser, updateName, updateEmail, updatePassword} = useAuth()
  const name = useRef()
  const currentName = currentUser.displayName ? currentUser.displayName : "Your Name Here"
  // const [name, setName] = useState(currentUser.displayName)


  async function handleSubmit(event){
    event.preventDefault()
    console.log(name)
    try {
      const newName = await updateName(name.current.value)
      await console.log(newName)
    } catch {

    }
  }

  return (
      <Form className='account-info' style={{marginTop: '5rem', padding: '1rem'}} onSubmit={handleSubmit}>
        <Form.Group id='display-name'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder={currentName} ref={name}></Form.Control>
        </Form.Group>
        <Button type='submit'>Update Account</Button>
      </Form>
  )
}

export default Account

// const [email, setEmail] = useState(currentUser.email)
// const [password, setPassword] = useState()

// <Form.Group id='email'>
//   <Form.Label>Email</Form.Label>
//   <Form.Control type='email' value={email} onChange={setEmail}></Form.Control>
// </Form.Group>
// <Form.Group id='old-password'>
//   <Form.Label>Old Password</Form.Label>
//   <Form.Control type='password' ref={oldPasswordRef}></Form.Control>
// </Form.Group>
// <Form.Group id='password'>
//   <Form.Label>New Password</Form.Label>
//   <Form.Control type='password' value={password} onChange={setPassword}></Form.Control>
// </Form.Group>
// <Form.Group id='password'>
//   <Form.Label>Confirm New Password</Form.Label>
//   <Form.Control type='password' value={password} onChange={setPassword}></Form.Control>
// </Form.Group>
