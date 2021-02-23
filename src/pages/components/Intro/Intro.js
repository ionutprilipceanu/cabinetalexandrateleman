import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import "./Intro.css"
import Fade from "react-reveal/Fade"
import profilePhoto from "./images/profilePhoto.jpg"
import Link from 'gatsby-link';



export class Intro extends Component {
  constructor(props) {
    super(props)

    this.state = {
      size: "",
      sort: "",
    }
  }

  render() {
    return (
      <div className="containerBodyCarder" id="about">
        <Fade left cascade>
          <Card className="about_body">
            <Card.Body>
              <Card.Title className="abouttitle"><span className="border-bottom">Introducere</span> </Card.Title>
              <div className="aboutContent">

                <div className="profilePhoto">
                  <img src={profilePhoto} alt="logo"></img>
                </div>

                <div className="aboutSection">
                  <Card.Subtitle className="cardSubtitleSection">Bună, sunt Alexandra. <br /> Îmi pare bine să te cunosc!</Card.Subtitle>
                  <Card.Text className="aboutText">
                    Nimeni nu este în totalitate imun în fața emoțiilor în situații în care este nevoit să accepte că trece printr-o perioadă dificilă. De cele mai multe ori considerăm că putem trece de unii singuri prin orice situație complicată însă în timp constatăm că ar fi mai util să beneficiem de ajutorul unui expert.

                    De-a lungul timpului am întâlnit și ajutat foarte mulți oameni să se cunoască mai bine, să-și valorifice mai bine resursele interioare, să ajungă la un echilibru și mai ales să aibă rezultate pozitive în diferite aspecte ale vieții.
                </Card.Text>
                </div>

              </div>

            </Card.Body>
          </Card>
        </Fade>

        <Fade left cascade>
          <div className="experience">
            <h3>Primul pas</h3>
            <p>
              Știu cât de greu poate fi să vorbești cu cineva, din acest motiv te invit să programezi o primă ședință în care îți voi da mai multe detalii despre cum se va desfășura consilierea, îți voi răspunde la întrebări și în acest mod vei ști exact cum va avea loc progresul tău.
              <br /><br />
              De asemenea îți voi oferi informații valoroase din experiența mea de până acum, este necesar doar să le implementezi și curând vei simți efecte pozitive pe termen lung.
            </p>

            <div className="btn-alls">
              <Link to="/contact/" className="btn-go" > Programează ședința </Link>
            </div>

          </div>
        </Fade>
      </div>
    )
  }
}

export default Intro
