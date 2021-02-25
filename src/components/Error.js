import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

const Error = () => {
  return (
    <Jumbotron className="error justify-content-center" style={{height: "100vh", width: "100vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}} fluid>
      <h2 className="errorTitle" style={{fontFamily: "Bungee Inline, cursive"}}><i className="bi bi-emoji-dizzy-fill"></i> Error!</h2>
      <p className="errorMessage"> 
        Please reload or try later, or <a href="mailto:aliceruppert@gmail.com">contact us.</a>
      </p>
    </Jumbotron>
    
  )
}

export default Error;
