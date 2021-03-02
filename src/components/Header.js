import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuth } from '../contexts/AuthContext';

import {Link, Redirect} from 'react-router-dom';

const Header = () => {
  const {signOut, currentUser, displayName} = useAuth()
  let userName

  if(currentUser){
    userName = displayName ? displayName : currentUser.email
  } else {
    userName = "User"
  }

  async function handleClick(event) {
    event.preventDefault()
    try {
      await signOut()
    } catch(error){
      console.log('error', error)
    }

}

  return (
    <>
    {!currentUser && <Redirect to="/login"/>}
    <Navbar className="header" bg="dark" expand="lg" fixed="top" variant="dark">
      <Navbar.Brand className="logo" as={Link} to="/" style={{fontFamily: "Bungee Inline, cursive"}}>
        <i className="bi bi-hexagon"/> Hue Pic It
      </Navbar.Brand>
      {currentUser &&
      <NavDropdown className="userDropdown" title={userName} id="basic-nav-dropdown" style={{fontFamily: "Bungee Inline, cursive"}}>
        <NavDropdown.Item className="accountLink" as={Link} to="/account">Account</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item className="signOutLink" onClick={handleClick}>Sign Out</NavDropdown.Item>
      </NavDropdown>
    }
    </Navbar>
    </>
  )
}

export default Header;
