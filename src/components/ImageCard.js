import React, {useState} from 'react';
import './ImageCard.css'
import { Card, Button } from 'react-bootstrap';

const ImageCard = ({info}) => {
  const [hidden, setHidden] = useState('hidden')
  const {alt, color, id, image, photographer, download} = info

  const handleClick = event => {
    event.preventDefault()
    if (hidden) {
      setHidden('')
    } else {
      setHidden('hidden')
    }
  }

  const handleDownload = event => {
    event.preventDefault()
    window.open(download, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
  }

  return (
    <Card style={{border: 'none'}} key={id} id={id}>
      <Card.Img style={{objectFit: 'cover', justifyContent: 'center', height: '100%', width: '100%'}} onClick={handleClick} src={image} alt={alt}/>
      <Card.ImgOverlay className={`card-info ${hidden}`} onClick={handleClick}>
        <Card.Title style={{fontFamily: "Bungee Inline, cursive"}}>
          {alt}
        </Card.Title>
        <Card.Text>
          <span>
            <i className="bi bi-hexagon-fill" title="Hex"/>
          </span>
          {color.toUpperCase()}
        </Card.Text>
        <Card.Text>
          <span>
          <i className="bi bi-camera-fill" title="Photographer"/>
          </span>
          {photographer}
        </Card.Text>
      <a href={download}>
        <Button onClick={handleDownload}>
          <i className="bi bi-download" /> Download
        </Button>
      </a>
      </Card.ImgOverlay>
    </Card>
  )
}

export default ImageCard;
