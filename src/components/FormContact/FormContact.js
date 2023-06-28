import React, { Component } from "react"
import "./FormContact.css"
<<<<<<< HEAD
import { Form } from "react-bootstrap"
import { Col } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import { FormControl, FormGroup, Button } from "react-bootstrap"
// import { Card } from 'react-bootstrap'
// import favicon from '..//Form_contact/'
=======
// import { Col } from "react-bootstrap"
import { Button } from "react-bootstrap"
import Form from "react-bootstrap/Form"
import Fade from "react-reveal/Fade"
>>>>>>> f4149e99f0cf0b757edffcc0b3b83ea6d2262f87

// cabinetteleman@gmail.com

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
<<<<<<< HEAD
=======
            onSubmit="submit"
>>>>>>> f4149e99f0cf0b757edffcc0b3b83ea6d2262f87
            // action="/thank-you" //mesaj de informare dupa submit
          >
            {/* <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="person" /> */}
            <Fade left cascade>
              <div className="titluFrm">
                <h3>Formular de contact</h3>
              </div>
<<<<<<< HEAD
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
=======
              <form
                name="Contact"
                method="post"
                data-netlify="true"
                onSubmit="submit"
              >
                <input type="hidden" name="form-name" value="Contact"></input>
                <Form.Group>
                  <Form.Label htmlFor="name">Nume</Form.Label>
                  <br />
                  <input
                    id="name"
                    type="name"
                    name="name"
                    className="inputField"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <br />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="inputField"
>>>>>>> f4149e99f0cf0b757edffcc0b3b83ea6d2262f87
                  />
                </Form.Group>

<<<<<<< HEAD
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

              {/* <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Textarea</ControlLabel>
      <Form.Label>Scrie mesajul tău</Form.Label>
      <FormControl componentClass="textarea" placeholder="textarea" />
    </FormGroup> */}

              <Button variant="primary" type="submit" className="send_BtnFrm">
                Trimite
              </Button>
=======
                <Form.Group>
                  <Form.Label htmlFor="number">Telefon</Form.Label>
                  <br />
                  <input
                    id="number"
                    type="number"
                    name="number"
                    className="inputField"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>
                    Scrie mesajul tău <br />
                    <textarea name="comments" className="inputField"></textarea>
                  </Form.Label>
                </Form.Group>

                <Button type="submit" className="send_BtnFrm">
                  Send
                </Button>
              </form>
>>>>>>> f4149e99f0cf0b757edffcc0b3b83ea6d2262f87
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
                      Nume: Alexandra Teleman <br />
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
