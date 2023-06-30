import React, { Component } from "react"
import "./FormContact.css"
import { Form } from "react-bootstrap"
import { Col } from "react-bootstrap"
import Reveal from "..//Reveal"
import { FormControl, FormGroup, Button } from "react-bootstrap"
// Mail: cabinetteleman@gmail.com

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
            name="person"
          >
            <Reveal>
              <div className="titluFrm">
                <h3>Formular de contact</h3>
              </div>

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

              <FormGroup>
                <Form.Label>Scrie mesajul tău</Form.Label>
                <FormControl
                  as="textarea"
                  rows="5"
                  columns="2"
                  id="text-area"
                  type="text"
                  name="comment"
                  required
                  onChange={this.handInput}
                />
              </FormGroup>

              <Button variant="primary" type="submit" className="send_BtnFrm">
                Trimite
              </Button>
            </Reveal>
          </Form>

          <div className="contactInfoFormFrm">
            {this.state.showText ? (
              <div className="titluFrm">
                <h3>Informații de contact</h3>
              </div>
            ) : (
              <div className="titluShowFrm">
                <h3>Informații de contact</h3>
                <Reveal>
                  <div className="contactNameFrm">
                    <p>
                      Nume: Alexandra Teleman <br />
                      Număr telefon: (+40) 756 660 085 <br />
                      E-mail: cabinetteleman@gmail.com <br />
                      Adresa: str. Theodor Pallady nr. 8 Iași
                    </p>
                  </div>
                </Reveal>
              </div>
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
        {/* <div>
          <form
            name="Contact Form"
            method="POST"
            data-netlify="true"
            action="#"
            className="formBodyFrm"
          >
            <input type="hidden" name="form-name" value="Contact Form" />
            <div className="sections">
              <div className="form-group">
                <div>
                  <label htmlFor="name">Nume:</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div>
                  <label htmlFor="phoneNumber">Telefon:</label>
                  <input
                    type="number"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input type="email" name="email" id="email" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="comments">Comment:</label>
              <br />
              <textarea name="comments" id="comments"></textarea>
              <Button type="submit" variant="dark" className="btnSend">
                Send
              </Button>
            </div>
          </form>
        </div> */}
      </div>
    )
  }
}

export default FormContact
