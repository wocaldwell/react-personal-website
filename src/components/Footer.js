import React from 'react';
// import Grid from '../../node_modules/react-bootstrap/lib/Grid'
// import Row from '../../node_modules/react-bootstrap/lib/Row'
// import Col from '../../node_modules/react-bootstrap/lib/Col'
import Glyphicon from '../../node_modules/react-bootstrap/lib/Glyphicon'
import Navbar from '../../node_modules/react-bootstrap/lib/Navbar'
import Nav from '../../node_modules/react-bootstrap/lib/Nav'
import NavItem from '../../node_modules/react-bootstrap/lib/NavItem'


const Footer = props => {
    return(
        <Navbar id="navbar" fixedBottom fluid>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="" className="nav-link">William|O|Caldwell</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} href="#intro"><p><Glyphicon glyph="thumbs-up" className="icon"/>Intro</p></NavItem>
                <NavItem eventKey={2} href="#projects"><p><Glyphicon glyph="globe" className="icon"/>Projects</p></NavItem>
                <NavItem eventKey={3} href="#technologies"><p><Glyphicon glyph="wrench" className="icon"/>Technologies</p></NavItem>
                <NavItem eventKey={4} href="#contact"><p><Glyphicon glyph="user" className="icon"/>Contact Me</p></NavItem>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Footer;