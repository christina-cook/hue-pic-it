import React, {useState, useEffect} from 'react';
import ImageCard from './ImageCard'
import unsplash from '../contexts/ApiCalls'
import { CardColumns } from 'react-bootstrap';
import ErrorPage from './Error'
import Loading from './Loading'


const ResultsDisplay = ({color}) => {
  const [imageData, setImageData] = useState([])
  const [error, setError] = useState('')
  let imagesArr

  if(imageData) {
    imagesArr = imageData.map(image => {
      const {alt_description, color, links, id, urls, user} = image
      const info = {
        alt: alt_description,
        color,
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
      if (images.errors) {
        throw new Error(images.errors)
      }
      setImageData(images.results)
    } catch(e) {
      setError(e.message)
    }
  }

  useEffect(() => {
    getImages()
  }, [])

  return (
    <>
      {error && <ErrorPage error={error}/>}
      {!error && !imageData && <Loading />}
      <CardColumns
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gridTemplateRows: "repeat(auto-fill, minmax(200px, 1fr))", gridGap: "1rem", padding: "5rem 2rem 5rem 2rem"}} fluid>
      {imagesArr}
      </CardColumns>
    </>
  )
}

export default ResultsDisplay;
