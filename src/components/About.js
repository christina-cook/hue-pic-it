import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';


const About = () => {
  return (
    <Card className="text-center">
      <Card.Img variant="top" src="../assets/colors.jpg" fluid/>
      <Card.Body>
        <Card.Title style={{fontFamily: "Bungee Inline, cursive"}}>About Hue Pic It</Card.Title>
        <Card.Subtitle style={{fontFamily: "Bungee Inline, cursive"}}>What, Why, and Who</Card.Subtitle>
        <Card.Text> This site uses <a href="https://unsplash.com/developers">Unsplash API</a> to help provide specific-colored pictures to users that might need that thematic image in their blogs or websites. From the user's home dashboard, simply click on the color that you want to search by, and images featuring that color will be populated for you to view!
        <br />
        We're students at <a href="https://turing.io">Turing School of Software and Design</a> and we were tasked with creating an app using an untaught 'stretch' method of our chosing. We choose to focus on user authentication using <a href="https://firebase.google.com/">Firebase</a>.
        <br />
        In addition, sites like <a href="https://labs.tineye.com/multicolr/">TinEye</a> and <a href="https://www.stocksy.com/blog/search-by-color/">Stocksy</a> inspired us to make app with some fun and practical purpose!
        <br />
        Check out our <a href="https://github.com/christina-cook/stretch-project">Github Repo</a> to see our code, check our process, and learn more. Or see each of our individual Github accounts by clicking on our names in the footer below!
        <br />
        Thank for for visiting!
        </Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" src="../assets/colors/condeNextTravelerImage.jpeg" fluid/>
    </Card>
    
  )
}

export default About;