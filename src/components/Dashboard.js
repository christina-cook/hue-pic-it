import React, {useState, useEffect} from 'react';
import ColorCard from './ColorCard';
import { Container } from 'react-bootstrap';

const Dashboard = () => {
  const colorKeys = ['red', 'green', 'blue', 'black and white']
  const cards = colorKeys.map(color => {
    return <ColorCard key={color} id={color} />
  })

  return (
    <>
      <Container className='d-flex w-100'>
        {cards}
      </Container>
    </>
  )
}

export default Dashboard;
