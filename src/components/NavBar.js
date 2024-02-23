import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from "react";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.png';
import {
    BrowserRouter as Router
  } from "react-router-dom";

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() =>{
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    },[]);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='navbar-toggler-icon'>
                </span>
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link 
                    href="#home"
                    className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => onUpdateActiveLink('home')}>
                        Home</Nav.Link>
                <Nav.Link 
                    href="#experience"
                    className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => onUpdateActiveLink('experience')}>
                        Experience</Nav.Link>
                <Nav.Link 
                    href="#project"
                    className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => onUpdateActiveLink('projects')}>
                        Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                <a href="https://www.linkedin.com/in/noopur-agarwal02"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://github.com/tinaAgarwal"><img src={navIcon2} alt="Github" /></a>

                </div>
                <button className="vvd" onClick={() => console.log('connect')}>
                    <span>Let's Connect</span>
                </button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </Router>
    )
}