import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MailchimpForm } from './MailchimpForm'
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.png';

export const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-item-center'>
                <MailchimpForm />
                <Col sm={6}>
                    <img src={logo} alt="Logo" />
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    <div className='social-icon'>
                        <a href="https://www.linkedin.com/in/noopur-agarwal02"><img src={navIcon1} alt="LinkedIn" /></a>
                        <a href="https://github.com/tinaAgarwal"><img src={navIcon2} alt="Github" /></a>
                    </div>
                    <p>CopyRight 2024. All Rights Reserved.</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
