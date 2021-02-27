import React, {useState, useEffect} from 'react';
import ColorCard from './ColorCard'
import cards from './colorCardInfo'
import './Dashboard.css'
import { Container } from 'react-bootstrap';

const Dashboard = () => {
  const colorKeys = Object.keys(cards)
  const colorCards = colorKeys.map(color => {
    return <ColorCard key={color} id={color} />
  })

  return (
    <>
      <Container className='card-container'>
        {colorCards}
      </Container>
    </>
  )
}

export default Dashboard;
