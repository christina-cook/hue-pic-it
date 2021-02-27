import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ImageCard = ({info}) => {
  const {alt, color, description, id, image, photographer, download} = info
  return (
    <Card style={{ width: '100%', boxShadow: `5px 5px 20px 0px ${color}`}} key={id} id={id}>
      <Card.Img variant="top" src={image} alt={alt} />
      <Card.Body>
        <Card.Title>{alt}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text><span>Hex: </span>{color}</Card.Text>
        <Card.Text><span>Photographer: </span>{photographer} </Card.Text>
      </Card.Body>
      <a href={download}>
        <Button style={{backgroundColor: 'white', fontSize: '2rem'}}>⬇️</Button>
      </a>
    </Card>
  )
}

export default ImageCard;
