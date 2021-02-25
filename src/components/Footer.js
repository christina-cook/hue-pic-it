import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <Navbar bg="dark" expand="lg" fixed="bottom" variant="dark">
      <Navbar.Brand as={Link} to="/about">About Site</Navbar.Brand>
      <Navbar.Brand href="https://github.com/christina-cook">Christina</Navbar.Brand>
      <Navbar.Brand href="https://github.com/srslie">
      <Image src={require('../assets/alice.jpg')} roundedCircle />
        Alice</Navbar.Brand>
      <Navbar.Brand href="https://github.com/kevinhartmann23">Kevin</Navbar.Brand>
    </Navbar>
  )
}

export default Footer;
