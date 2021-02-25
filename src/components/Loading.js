import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

const Loading = () => {
  return (
    <div className="loading" style={{height: "100vh", width: "100vw", display: "flex",alignItems: "center", justifyContent: "center"}} fluid role="status">
    <span className="sr-only">Loading...</span>
      <Spinner className="dot mr-3" animation="grow" variant="danger" />
      <Spinner className="dot mr-3" animation="grow" variant="success" />
      <Spinner className="dot mr-3" animation="grow" variant="primary"  />
      <Spinner className="dot" animation="grow" variant="secondary"  />   
    </div>
  )
}

export default Loading;
