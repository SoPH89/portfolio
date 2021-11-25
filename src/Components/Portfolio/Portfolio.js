import React from "react";
import {Card, Container, Row, Col, Button} from "react-bootstrap";
import mardi from '../../images/Mardi.jpeg';
import "./Portfolio.css";
import {BsFillPlayFill} from "react-icons/bs";
import {VscGithub} from "react-icons/vsc";

const cardStyle={
  width: '22rem',
  backgroundColor: "#2F303A",
  color: "white",
  fontFamily: "Poppins",
  fontWeight: "600"
}
const demoButton={
  backgroundColor: "#07D665",
  fontWeight: "600",
  fontFamily: "Poppins",
  fontSize: "1.2rem",
  color: "white"
}
const repositoryButton={
  backgroundColor: "black",
  fontWeight: "600",
  fontFamily: "Poppins",
  fontSize: "1.2rem",
  
}

const Portfolio = ()=> {
    return(
   
        <Container>
   <Row className="rowStyle">
        <h2 className="h2Portfolio">
MY<span style={{color: '#07D665'}}> PORTFOLIO</span></h2>
    <Col className="portfolioColumn"> <Card style={cardStyle}>
  <Card.Img variant="top" src={mardi} />
  {/* <Card.Body className="cardBodyStyle">
    <Card.Title>Mardi Gras Festival</Card.Title>
    <Card.Text>
      This project was done only with HTML & CSS and some JS.
    </Card.Text>
      <Button size="lg" style={demoButton}>Live Demo <BsFillPlayFill/></Button>{' '}
  <Button size="lg" style={repositoryButton}>Repository <VscGithub/>{' '}</Button>
  </Card.Body> */}
</Card>
</Col>

    <Col  className="portfolioColumn"> <Card style={cardStyle}>
  <Card.Img variant="top" src={mardi} />
  <Card.Body className="cardBodyStyle">
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card></Col>

    <Col className="portfolioColumn"> <Card style={cardStyle}>
  <Card.Img variant="top" src={mardi} />
  <Card.Body className="cardBodyStyle">
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card></Col>
  </Row>
</Container>
    )
}

export default Portfolio;