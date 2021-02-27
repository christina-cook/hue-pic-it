import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ImageCard = ({info}) => {
  const {alt, color, description, id, image, photographer, download} = info
  return (
    <Card style={{ width: 'auto', height: '100%', border: 'none'}} key={id} id={id}>
      <Card.Img style={{objectFit: 'cover', justifyContent: 'center', height: '100%', width: '100%'}} src={image} alt={alt} fluid/>
      {/* <Card.Body style={{ height: '25%'}}>
        <Card.Title>{alt}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text><span>Hex: </span>{color.toUpperCase()}</Card.Text>
        <Card.Text><span>Photographer: </span>{photographer} </Card.Text>
      </Card.Body> */}
      {/* <a href={download}>
        <Button style={{backgroundColor: 'white', fontSize: '2rem'}}>⬇️</Button>
      </a> */}
    </Card>
  )
}

export default ImageCard;
