import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import "./Review.css"
import Fade from "react-reveal/Fade"
import FunctionReview from "..//Review/FunctionReview"


export class Review extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="containerBodyCarder" id="about">
        <Fade bottom cascade>
          <Card className="about_body">
            <Card.Body>
              <Card.Title className="Title"><span className="border-bottom">Recenzii</span> </Card.Title>
              <FunctionReview />

            </Card.Body>
          </Card>
        </Fade>
      </div>
    )
  }
}

export default Review
