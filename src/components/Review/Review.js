import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Card } from "react-bootstrap"
import "./Review.css"
import Reveal from "..//Reveal"
import FunctionReview from "..//Review/FunctionReview"

export class Review extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="containerBodyCarder" id="about">
        <Reveal>
          <Card className="about_body">
            <Card.Body>
              <Card.Title className="Title">
                <span className="border-bottom">Recenzii</span>{" "}
              </Card.Title>
              <FunctionReview />
            </Card.Body>
          </Card>
        </Reveal>
      </div>
    )
  }
}

export default Review
