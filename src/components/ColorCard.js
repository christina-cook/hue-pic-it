import React, {useState, useEffect} from 'react';
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const red = {
  name: "Red",
  text: "Red provokes the strongest emotions of any color. While cool colors like green and blue are generally considered peaceful and calming, red is considered the warmest and most contradictory of the colors.",
  subtext: "In fact, this fiery hue has more opposing emotional associations than any other color: Red is linked to passion and love as well as power and anger.",
  colors: {
    strong: "#A4161A",
    light: "#F8C9CB",
    font: "#C51B21",
    soft: "#E64C4F",
  }
}

const green = {
  name: "Green",
  text: "For many people, Green has strong associations with nature and immediately brings to mind the lush green of grass, trees, and forests.",
  subtext: "Perhaps because green is so heavily associated with nature, it is often described as a refreshing and tranquil color.",
  colors: {
   strong: "#204625",
   light: "#D5ECD8",
   font: "#33703B",
    soft: "#57B263",
  }
}

const blue = {
  name: "Blue",
  text:"Blue is a color often found in nature such as the pale blue of a daytime sky or the rich dark blue of a deep pool of water.",
  subtext:"It is for this reason perhaps that people often describe the color blue as calm and serene. Yet as a cool color, blue can sometimes seem icy, distant, or even cold.",
  colors: {
    strong: "#3626A7",
    light: "#C2BCF0",
    font: "#100B32",
    soft: "#5948D5",
  }
}

const blackAndWhite = {
  name: "B & W",
  text: "Black is evil; white is good. Yin and Yang! Black traps space, while white opens space. Black evokes sophistication; white communicates innocence.",
  subtext: "It can portray balance and class, or simplicity",
  colors: {
    strong: "#212529",
    light: "#ADB5BD",
    font: "#495057",
    soft: "#DEE2E6",
  }
}

const ColorCard = (props) => {
  const { id } = props
  let renderColor
  
  if(id === 'blue'){
    renderColor = blue
  } else if(id === 'red'){
    renderColor = red
  } else if(id === 'green'){
    renderColor = green
  } else {
    renderColor = blackAndWhite
  }
  
  return (
    <Card style={{ width: '18rem', backgroundColor: `${renderColor.colors.light}` }} className='w-50'>
      <Card.Header variant="top" style={{backgroundColor: `${renderColor.colors.soft}`, color: `${renderColor.colors.strong}`}}>{renderColor.name}</Card.Header>
      <Card.Body>
        <Card.Title>{renderColor.name}</Card.Title>
        <Card.Text style={{ color: `${renderColor.colors.font}`}}>
          {renderColor.text}<br/>{renderColor.subtext} 
        </Card.Text>
        <Link to={`/results/${id}`}>
          <Button style={{color: `${renderColor.colors.strong}`, backgroundColor: `${renderColor.colors.soft}`}} className="w-100">Hue It!</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default ColorCard;
