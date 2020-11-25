import React, { Component } from 'react'
import "./Articole.css"
import { Card, Button } from 'react-bootstrap'
import decor from "..//..//..//static/images/img-cover.jpg"


import Fade from "react-reveal/Fade"

class ServiciiComponent extends Component {
  render() {
    return (

      <article>
        
        <div className="titluArticole">
          <h1>Articole</h1>
          <div className="backgroundLineArticole"></div>
        </div>

        <Fade>
          <div className="cardStyle">
            <Card style={{ width: '18rem', margin: '5%' }}>
              <Card.Img variant="top" src={decor} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                <Button variant="dark">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin: '5%' }}>
              <Card.Img variant="top" src={decor} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                <Button variant="dark">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin: '5%' }}>
              <Card.Img variant="top" src={decor} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                <Button variant="dark">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </Fade>
      </article>
    )
  }
}

export default ServiciiComponent