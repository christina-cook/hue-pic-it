import React from 'react';
import Card from 'react-bootstrap/Card';

const About = () => {
  return (
    <Card className="about text-center">
      <Card.Img className="aboutTopImage" variant="top" height="300px" src={require('../assets/condeNextTravelerImage.jpg').default} alt="" fluid/>
      <Card.Body className="aboutInfo">
        <Card.Title className="aboutTitle" style={{fontFamily: "Bungee Inline, cursive"}}>About Hue Pic It</Card.Title>
        <Card.Subtitle className="aboutSubtitle mb-4" style={{fontFamily: "Bungee Inline, cursive"}}>What, Why, and Who</Card.Subtitle>
        <Card.Text className="infoTextOne"> This site uses <a className="unsplashLink" href="https://unsplash.com/developers">Unsplash API</a> to help provide specific-colored pictures to users that might need that thematic image in their blogs or websites. From the user's home dashboard, simply click on the color that you want to search by, and images featuring that color will be populated for you to view!
        </Card.Text>
        <Card.Text className="infoTextTwo">
        We're students at <a className="turingLink" href="https://turing.io">Turing School of Software and Design</a> and we were tasked with creating an app using an untaught 'stretch' method of our chosing. We choose to focus on user authentication using <a className="firebaseLink" href="https://firebase.google.com/">Firebase</a>.
        </Card.Text>
        <Card.Text className="infoTextThree">
        In addition, sites like <a className="tineyeLink" href="https://labs.tineye.com/multicolr/">TinEye</a> and <a className="stocksyLink" href="https://www.stocksy.com/blog/search-by-color/">Stocksy</a> inspired us to make app with some fun and practical purpose!
        </Card.Text>
        <Card.Text className="infoTextFour">
        Check out our <a className="githubrepoLink" href="https://github.com/christina-cook/stretch-project">Github Repo</a> to see our code, check our process, and learn more. Or see each of our individual Github accounts by clicking on our names in the footer below!
        </Card.Text>
        <Card.Text className="infoTextFive">
        Thank you for visiting!
        </Card.Text>
      </Card.Body>
      <Card.Img className="aboutBottomImage" variant="bottom" src={require('../assets/andrewWatsonGettyImages.jpg').default} alt="Colorful quilt image from Conde Next Traveler"fluid/>
    </Card>
    
  )
}

export default About;