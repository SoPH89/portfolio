import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Skills.css";


const Skills = ()=>{
    return (
    <Container className="skillsCont">
        <h2 className="h2Skills">
MY<span style={{color: '#07D665'}}> SKILLS</span>
    </h2>
  <Row className="first4Skills">
    <Col> <CircularProgressbar value={90} text={`${90}%`} />
    <h3 className="programmingHeadline">&nbsp; HTML / CSS</h3>
    </Col>

    <Col><CircularProgressbar value={70} text={`${70}%`} /> 
    <h3 className="programmingHeadline"> PHP / MYSQL</h3>
    </Col>
    <Col><CircularProgressbar value={75} text={`${75}%`} />
    <h3 className="programmingHeadline"> JAVASCRIPT</h3>
    </Col>
    <Col><CircularProgressbar value={60} text={`${60}%`} />
    <h3 className="programmingHeadline"> &nbsp; &nbsp; &nbsp;&nbsp; REACT</h3>
    </Col>
  </Row>

  <Row className="second4Skills">
    <Col> <CircularProgressbar value={65} text={`${65}%`} />
    <h3 className="programmingHeadline">&nbsp;&nbsp;ANGULAR</h3>
    </Col>

    <Col><CircularProgressbar value={90} text={`${90}%`} /> 
    <h3 className="programmingHeadline"> WORDPRESS</h3>
    </Col>
    <Col><CircularProgressbar value={70} text={`${70}%`} />
    <h3 className="programmingHeadline">&nbsp;&nbsp;&nbsp; NODE.JS</h3>
    </Col>
    <Col><CircularProgressbar value={90} text={`${90}%`} />
    <h3 className="programmingHeadline"> &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;SEO</h3>
    </Col>
  </Row>
  </Container>
    )
}

export default Skills;