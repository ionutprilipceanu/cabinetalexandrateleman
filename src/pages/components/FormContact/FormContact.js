import React, { Component } from "react"
import "./FormContact.css"
import { Form } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { Button } from "react-bootstrap"
import Fade from "react-reveal/Fade"
// import { Card } from 'react-bootstrap'
// import favicon from '..//Form_contact/'

class FormContact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showText: true,
    }
  }

  butonulMeu() {
    this.setState({
      showText: !this.state.showText,
    })
  }

  render() {
    return (
      <div id="contactFrm">
        <div className="titluServiciiContact">
          <h1>Contact</h1>
          <div className="backgroundLineServiciiContact"></div>
        </div>

        <div className="continutFormFrm">
          <Form
            className="formBodyFrm"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="last-form-contact-up"
            // action="/thank-you" //mesaj de informare dupa submit
          >
            <input type="hidden" name="bot-field" />
            <input
              type="hidden"
              name="form-name"
              value="last-form-contact-up"
            />
            <Fade left cascade>
              <div className="titluFrm">
                <h3>Formular de contact</h3>
              </div>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label htmlFor="name">Nume</Form.Label>
                  <Form.Control
                    id="name-input"
                    type="text"
                    name="name"
                    placeholder=""
                    required
                    onChange={this.handInput}
                  />
                </Form.Group>

                {/* <Form.Group as={Col} >
            <Form.Label htmlFor="lastname" >Last Name</Form.Label>
            <Form.Control 
            id="lastname-input" 
            type="text" 
            name="name" 
            placeholder="" 
            required onChange={this.handInput}
            />
          </Form.Group>  */}
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label htmlFor="phone">Telefon</Form.Label>
                  <Form.Control
                    placeholder=""
                    id="phone-input"
                    type="text"
                    name="phone"
                    required
                    onChange={this.handInput}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control
                    id="address-input"
                    type="email"
                    name="address"
                    placeholder=""
                    required
                    onChange={this.handInput}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group>
                <Form.Label>Scrie mesajul tău</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="5"
                  columns="2"
                  id="text-area"
                  type="text"
                  name="comment"
                  required
                  onChange={this.handInput}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="send_BtnFrm">
                Trimite
              </Button>
            </Fade>
          </Form>

          <div className="contactInfoFormFrm">
            {this.state.showText ? (
              <Fade top cascade>
                <div className="titluFrm">
                  <h3>Informații de contact</h3>
                </div>
              </Fade>
            ) : (
              <Fade bottom cascade>
                <div className="titluShowFrm">
                  <h3>Informații de contact</h3>

                  <div className="contactNameFrm">
                    <p>
                      Nume: Andreea Teleman <br />
                      Număr telefon: (+40) 756 660 085 <br />
                      E-mail: cabinetteleman@gmail.com <br />
                      Adresa: str. Theodor Pallady nr. 8 Iași
                    </p>
                  </div>
                </div>
              </Fade>
            )}

            <Button
              variant="primary"
              className="send_BtnFrm"
              onClick={() => this.butonulMeu()}
            >
              {" "}
              {this.state.showText ? "Arată" : "Ascunde"}
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default FormContact
