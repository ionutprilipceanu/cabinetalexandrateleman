import React from "react"
import "./FooterBottom.css"
import { Form } from "react-bootstrap"
import Reveal from "..//Reveal"
import { Col } from "react-bootstrap"
import { Button } from "react-bootstrap"

const Footer = () => {
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
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="person" />

        <Reveal>
          <div className="titluAbonare">
            <h3>Abonează-te!</h3>
          </div>

          <Form.Group as={Col}>
            <Form.Label htmlFor="name" style={{ color: "white" }}>
              Nume
            </Form.Label>
            <Form.Control
              id="name-input"
              type="text"
              name="name"
              placeholder=""
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label htmlFor="email" style={{ color: "white" }}>
              Email
            </Form.Label>
            <Form.Control
              id="address-input"
              type="email"
              name="address"
              placeholder=""
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="send_BtnAbn btn-primary"
          >
            Trimite
          </Button>
        </Reveal>
      </Form>

      <ul className="componentePhone">
        <p>Alexandra Teleman - Psihoterapeut &copy;Iași România 2021</p>
      </ul>
    </div>
  )
}

export default Footer
