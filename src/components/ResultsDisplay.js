import React, {useState, useEffect} from 'react';
import ImageCard from './ImageCard'
import unsplash from '../contexts/ApiCalls'
import { CardColumns } from 'react-bootstrap';

const ResultsDisplay = ({color}) => {
  const [imageData, setImageData] = useState([])
  const [error, setError] = useState('')
  let imagesArr

  if(imageData.length > 0){
    imagesArr = imageData.map(image => {
     const {alt_description, color, description, links, id, urls, user} = image
    const info = {
      alt: alt_description,
      color,
      description,
      id,
      image: urls.small,
      photographer: user.name,
      download: links.download
    }

      return <ImageCard info={info} key={id} />
    })
  }

  const getImages = async () => {
    setError('')

    try {
      const response = await unsplash.fetchSingleColor(color)
      const images = await response.json()
      console.log(images.results)
      setImageData(images.results)
    } catch(error) {
      setError(error)
    }
  }

  useEffect(() => {
    getImages()
  }, [])

  return (
    <CardColumns>
      {imagesArr}
    </CardColumns>
  )
}

export default ResultsDisplay;
