import React, {useState, useRef} from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext';


const Account = () => {
  const {currentUser, updateName, displayName, updateEmail, updatePassword} = useAuth()
  const name = useRef()
  let currentName
  const [success, setSuccess] = useState('')

  if (currentUser) {
    currentName = displayName ? displayName : "Your Name Here"
  }


  async function handleSubmit(event){
    event.preventDefault()
    console.log(name)
    try {
      const newName = await updateName(name.current.value)
      await setSuccess('Your account has been updated!')
    } catch(err) {

    }
  }

  return (
      <Form className='account-info' style={{marginTop: '5rem', padding: '1rem'}} onSubmit={handleSubmit}>
        <h2>Account Information</h2>
        {success && <Alert variant='success' className="success-alert">{success}</Alert>}
        <Form.Group id='display-name'>
          <Form.Label>Name</Form.Label>
          <Form.Control className='update-name' type='text' placeholder={currentName} ref={name}></Form.Control>
        </Form.Group>
        <Button className='account-button' type='submit'>Update Account</Button>
      </Form>
  )
}

export default Account
