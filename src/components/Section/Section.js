import React, { Component } from "react"
import "./Section.css"
import { Card, Button } from "react-bootstrap"
import cazuisticaFr from "..//..//..//static/images/articole/cazuisticaFR.jpg"
import { Link } from "gatsby"

// import Fade from "react-reveal/Fade"

class ServiciiComponent extends Component {
  render() {
    return (
      <article>
        <div className="titluArticole">
          <h1>Section</h1>
          <div className="backgroundLineArticole"></div>
        </div>

        {/* <Fade> */}
        <Button variant="dark" className="borderFix">
          <Link to="/articole/" className="link-articole">
            {" "}
            Vezi sectiunea in română
          </Link>
        </Button>

        <div className="cardStyle">
          <Card className="card-Container" style={{ width: "20rem" }}>
            <Card.Img variant="top" src={cazuisticaFr} />
            <Card.Body>
              <Card.Title className="title-Card-title">
                Casuistique personnelle
              </Card.Title>
              <Card.Text>
                Vous pouvez voir mon cas des deux dernières années en accédant
                au bouton ci-dessous...
              </Card.Text>
              <Button variant="dark">
                <Link to="/section/cazuisticaFr/" className="link-articole">
                  {" "}
                  Lire la suite{" "}
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </div>

        {/* </Fade> */}
      </article>
    )
  }
}

export default ServiciiComponent
