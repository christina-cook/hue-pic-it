import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

const Loading = () => {
  return (
    <div className="loading" style={{height: "100vh", width: "100vw", display: "flex",alignItems: "center", justifyContent: "center"}} fluid role="status">
    <span className="sr-only">Loading...</span>
      <Spinner className="dotRed mr-3" animation="grow" variant="danger" />
      <Spinner className="dotGreen mr-3" animation="grow" variant="success" />
      <Spinner className="dotBlue mr-3" animation="grow" variant="primary"  />
      <Spinner className="dotBlack" animation="grow" variant="secondary"  />   
    </div>
  )
}

export default Loading;
