import React, {useState, useRef} from 'react';
import { Form, Button } from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext';


const Account = () => {
  const {currentUser, updateName, updateEmail, updatePassword} = useAuth()
  const [name, setName] = useState(currentUser.displayName)

  return (
      <Form className='account-info'>
        <Form.Group id='display-name'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' value={name} onChange={setName}></Form.Control>
        </Form.Group>
        <Button>Update Account</Button>
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
