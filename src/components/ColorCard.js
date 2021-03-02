import React, {useState, useEffect} from 'react';
import {Card, i} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import card from './colorCardInfo'

const ColorCard = (props) => {
  const { id } = props
  const color = Object.keys(card).find(e => e === id)

  return (
    <Card style={{ backgroundColor: `${card[color].colors.light}`, boxShadow: `7px 7px 7px -5px ${card[color].colors.soft}`}} className={`${card[color].name} pantone-card`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="120%" height="120%" style={{fill: `${card[color].colors.strong}`}} className={`${card[color].name} color-block bi bi-hexagon-fill`} viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"/>

      </svg>
      {/* <div className={`${card[color].name} color-block`} style={{ backgroundColor: `${card[color].colors.strong}`, boxShadow: `10px 10px 20px 0px ${card[color].colors.soft}` }}></div> */}
      <Card.Body className="content">
        <Card.Text className={`${card[color].name} hue`} style={{ color: card[color].colors.soft }}>{card[color].colors.strong}</Card.Text>
        <Card.Title className={`${card[color].name} title`} style={{ color: `${card[color].colors.font}`, fontFamily: "Bungee Inline, cursive"}}>{card[color].name}</Card.Title>
        <Card.Text className={`${card[color].name} flavor-text`} style={{ color: `${card[color].colors.strong}`}}>
          {card[color].text}
        </Card.Text>
        <Link to={`/results/${id}`}>
          <button style={{backgroundColor: `${card[color].colors.soft}`, fontFamily: "Bungee Inline, cursive" }} className={`${card[color].name}-button color-button`}>
            Pic It!
            <i class="bi bi-caret-right" />
          </button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default ColorCard;
