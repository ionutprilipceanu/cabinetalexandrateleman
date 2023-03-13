import React, { Component } from "react"
import "./FormContact.css"
// import { Col } from "react-bootstrap"
import { Button } from "react-bootstrap"
import Form from "react-bootstrap/Form"
import Fade from "react-reveal/Fade"

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
            onSubmit="submit"
            // action="/thank-you" //mesaj de informare dupa submit
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="person" />
            <Fade left cascade>
              <div className="titluFrm">
                <h3>Formular de contact</h3>
              </div>
              {/* <Form.Row>
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
              </Form.Row> */}

              {/* <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label htmlFor="phone">Telefon</Form.Label>
                  <Form.Control
                    placeholder=""
                    // id="phone-input"
                    type="text"
                    // name="phone"
                    required
                    onChange={this.handInput}
                  />
                </Form.Group>
              </Form.Row> */}

              {/* <Form.Row>
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
              </Form.Row> */}

              {/* <Form.Group>
                <Form.Label>Scrie mesajul tău</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  columns={2}
                  id="text-area"
                  type="text"
                  name="comment"
                  required
                  onChange={this.handInput}
                />
              </Form.Group> */}

              {/* <Button variant="primary" type="submit" className="send_BtnFrm">
                Trimite
              </Button> */}
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
                  <input id="name" type="name" name="name" />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <br />
                  <input id="email" type="email" name="email" />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="number">Telefon</Form.Label>
                  <br />
                  <input id="number" type="number" name="number" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>
                    Scrie mesajul tău <br />
                    <textarea name="comments"></textarea>
                  </Form.Label>
                </Form.Group>

                <Button variant="primary" type="submit" className="send_BtnFrm">
                  Send
                </Button>
              </form>
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
