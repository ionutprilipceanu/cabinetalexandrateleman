import React from 'react'
import './FooterBottom.css'
import { Form } from 'react-bootstrap'
import Fade from "react-reveal/Fade"
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
// import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';
// import Link from 'gatsby-link';

function Footer() {
  return (
    <div className="footer">
      <ul className="componenteDesktop">
        <p>Alexandra Teleman - Psihoterapeut&copy;Iași România 2021 </p>
        <p> Investește-n tine! </p>
      </ul>

      <Form
        className="Abonare"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="person"
      // action="/thank-you" //mesaj de informare dupa submit
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="person" />

        <Fade left cascade>
          <div className="titluAbonare"><h3>Abonează-te!</h3></div>
          <Form.Row>
            <Form.Group as={Col} >
              <Form.Label htmlFor="name" style={{ color: "white" }}>Nume</Form.Label>
              <Form.Control
                id="name-input"
                type="text"
                name="name"
                placeholder=""
              // required onChange={this.handInput}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label htmlFor="email" style={{ color: "white" }} >Email</Form.Label>
              <Form.Control
                id="address-input"
                type="email"
                name="address"
                placeholder=""
              // required onChange={this.handInput}
              />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit" className="send_BtnAbn">
            Trimite
            </Button>
        </Fade>
      </Form>

      <ul className="componentePhone">
        <p>Alexandra Teleman - Psihoterapeut &copy;Iași România 2021</p>
      </ul>

    </div>
  )
}

export default Footer
