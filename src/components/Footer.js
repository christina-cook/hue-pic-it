import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';

const Footer = () => {
  const {currentUser} = useAuth()


  return (
    <>
    {currentUser && 
    <Navbar className="footer" bg="dark" expand="lg" fixed="bottom" variant="dark">
      <Navbar.Brand className="aboutLink"as={Link} to="/about" style={{fontFamily: "Bungee Inline, cursive"}}>About Site</Navbar.Brand>
      <Navbar.Brand  className="christina" href="https://github.com/christina-cook" style={{fontFamily: "Bungee Inline, cursive"}}>
        <Image src={require('../assets/christina.jpg').default} width={40} height={40} roundedCircle fluid/> Christina
      </Navbar.Brand>
      <Navbar.Brand className="alice" href="https://github.com/srslie" style={{fontFamily: "Bungee Inline, cursive"}}>
        <Image src={require('../assets/alice.jpg').default} width={40} height={40} roundedCircle fluid/> Alice
      </Navbar.Brand>
      <Navbar.Brand className="kevin" href="https://github.com/kevinhartmann23" style={{fontFamily: "Bungee Inline, cursive"}}>
        <Image src={require('../assets/kevin.jpg').default} width={40} height={40} roundedCircle fluid/> Kevin</Navbar.Brand>
    </Navbar>
    }
    </>
  )
}

export default Footer;
