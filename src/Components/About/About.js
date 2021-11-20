import React from 'react';
import { Container, Row, Col} from "react-bootstrap";
import "./About.css";

const About = ()=>{
    return (
        <Container>
  <Row className="leftSide">
    <Col>
      <div className="h2Div">
    <h2 className="h2About">
ABOUT<span style={{color: '#07D665'}}> ME</span>
    </h2>
    </div> 
    </Col>
    <Col> <div className="circle">
        </div>  </Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
  </Row>
</Container>
    )
}

export default About;