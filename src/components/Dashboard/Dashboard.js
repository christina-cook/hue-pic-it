import React, {useState, useEffect} from 'react';
import ColorCard from './ColorCard'
import cards from '../../assets/colorCardInfo'
import './Dashboard.css'
import { Container } from 'react-bootstrap';

const Dashboard = () => {
  const colorKeys = Object.keys(cards)
  const colorCards = colorKeys.map(color => {
    return <ColorCard key={color} id={color} />
  })

  return (
    <>
      <Container className='card-container' style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gridGap: "5rem", padding: "5rem"}}>
        {colorCards}
      </Container>
    </>
  )
}

export default Dashboard;
