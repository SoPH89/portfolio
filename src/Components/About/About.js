import React, {useEffect} from 'react';
import { Container, Row, Col} from "react-bootstrap";
import Me from "../../images/ProfileImage.jpg";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { IoLocationOutline } from "react-icons/io5";
import {BiCalendar} from "react-icons/bi";
import {FaEnvelope} from "react-icons/fa";
import {MdPhoneInTalk} from "react-icons/md";


const About = ()=>{
  useEffect(() => {
    Aos.init({duration: 2000 });
  }, []);
    return (
      
        <Container class="aboutContainer">
         
          
  <Row className="leftSide">
    <Col>
    
      <div className="h2Div">
    <h2 className="h2About">
      
ABOUT<span style={{color: '#07D665'}}> ME</span>
    </h2>
    <p className="pAbout">After years of working in e-commerce industry I decided to change my path and see how things look behind the hod. I found passion in programming and I am now ready for my next challenge in the programming world.</p>
    </div> 
    </Col>
    <Col> <div className="circle">
      <img src={Me} className="myImage" data-aos="fade-left"/>
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