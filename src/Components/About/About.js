import React from 'react';
import { Container, Row, Col} from "react-bootstrap";
import "./About.css";
import { IoLocationOutline } from "react-icons/io5";
import {BiCalendar} from "react-icons/bi";
import {FaEnvelope} from "react-icons/fa";
import {MdPhoneInTalk} from "react-icons/md";

const About = ()=>{
    return (
        <Container class="aboutContainer">
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
  </Row >
  <Row md={4} className="contactinfo">
    <Col className="aboutInfo"><IoLocationOutline className="aboutIcons"/> Israel</Col>
    <Col className="aboutInfo"><BiCalendar className="aboutIcons"/></Col>
    <Col className="aboutInfo"><FaEnvelope className="aboutIcons"/> ilanedri1@gmail.com</Col>
    <Col className="aboutInfo"><MdPhoneInTalk className="aboutIcons"/> 054-6393903</Col>
  </Row>
  
</Container>
    )
}

export default About;