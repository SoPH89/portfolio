import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Footer.css";

const footerStyle={
    backgroundColor: "black",
    color: "white",
    fontWeight: "700",
    fontSize: "1.5em",
    textAlign: "center",
}
const Footer= ()=>{
    return (
        <div className="ContainerStyle">
 <Navbar className="footerStyle">
    
    <Navbar.Brand></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home" style={footerStyle}>Home</Nav.Link>
      <Nav.Link href="#about"style={footerStyle}>About</Nav.Link>
      <Nav.Link href="#portfolio"style={footerStyle}>Portfolio</Nav.Link>
      <Nav.Link href="#contact"style={footerStyle}>Contact</Nav.Link>
    </Nav>
     </Navbar>
     </div>

 


    )
}
export default Footer;