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
      <Nav.Link href="#Home" style={footerStyle}>Home</Nav.Link>
      <Nav.Link href="#About"style={footerStyle}>About</Nav.Link>
      <Nav.Link href="#Portfolio"style={footerStyle}>Portfolio</Nav.Link>
      <Nav.Link href="#Contact"style={footerStyle}>Contact</Nav.Link>
    </Nav>
     </Navbar>
     </div>

 


    )
}
export default Footer;