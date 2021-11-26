import React from "react";
import {Container, Row, Col, Form, Button, ButtonGroup} from "react-bootstrap";
import "./Contact.css";

const formButton ={
  marginTop: "5%",
  backgroundColor: "#07D665",
  color: "white",
  fontWeight: "600"
}
const Contact = ()=>{
    return(
  
        <Container>
  <Row>
      <div className="h2Div">
    <h2 className="h2About">
My<span style={{color: '#07D665'}}> Contact</span>
    </h2>
    <p className="pContact"> I'm looking forward for my next challenge and opportunity to develop my skills as a Full Stack programmer. Feel free to send me a message.</p>
    </div>
    <Col sm={5}>
    
    <Form style={{marginBottom: "10%"}}>
  <Row className="mb-3">
    <Form.Group  as={Col} controlId="formGridName">
      <Form.Label></Form.Label>
      <Form.Control className="inputForm" style={{color: "white"}} type="text" placeholder="Name" />
    </Form.Group>

   <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label></Form.Label>
      <Form.Control className="inputForm" type="email" placeholder="Email" />
    </Form.Group>
  </Row>
  <Row>
      <Form.Group as={Col} controlId="formGridSubject">
      <Form.Label></Form.Label>
      <Form.Control className="inputForm" type="text" placeholder="Subject" />
    </Form.Group>
  </Row>
  <Row>
      <Form.Group as={Col} controlId="formGridMessage">
      <Form.Label></Form.Label>
    <Form.Control className="inputForm" type="textarea" rows="4" as="textarea" placeholder="Type your message here..." />
    </Form.Group>
  </Row>

  <Row>
    <ButtonGroup className="d-flex">
       <Button variant="primary" type="submit" style={formButton}>
    Submit
  </Button>
  </ButtonGroup>
  </Row>

</Form>
    </Col>
    <Col>
    <Row>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.786374597604!2d34.76849181498122!3d32.07502622675305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c7e2fd9d35b%3A0x3af585a9d8cdd413!2sTrumpeldor%20St%2036%2C%20Tel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1637678839544!5m2!1sen!2sil" width="300" height="335" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
    </Row>
    </Col>
  </Row>
  </Container>
    )
}

export default Contact;