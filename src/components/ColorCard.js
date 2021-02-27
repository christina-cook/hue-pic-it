import React, {useState, useEffect} from 'react';
import {Card, i} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import card from './colorCardInfo'

const ColorCard = (props) => {
  const { id } = props
  const color = Object.keys(card).find(e => e === id)

  return (
    <Card style={{ backgroundColor: `${card[color].colors.light}`, boxShadow: `7px 7px 7px -5px ${card[color].colors.soft}`}} className={`${card[color].name} pantone-card`}>
      <div className={`${card[color].name} color-block`} style={{ backgroundColor: `${card[color].colors.strong}`, boxShadow: `10px 10px 20px 0px ${card[color].colors.soft}` }}></div>
      <Card.Body className="content">
        <Card.Text className={`${card[color].name} hue`} style={{ color: card[color].colors.soft }}>{card[color].colors.strong}</Card.Text>
        <Card.Title className={`${card[color].name} title`} style={{ color: `${card[color].colors.font}`}}>{card[color].name}</Card.Title>
        <Card.Text className={`${card[color].name} flavor-text`} style={{ color: `${card[color].colors.strong}`}}>
          {card[color].text}
        </Card.Text>
        <Link to={`/results/${id}`}>
          <button style={{ color: `${card[color].colors.font}`, backgroundColor: `${card[color].colors.soft}`, fontFamily: "Bungee Inline, cursive" }} className={`${card[color].name}-button color-button`}>
            Pic It!
            <i class="bi bi-caret-right" />
          </button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default ColorCard;
