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
      size:"",
      sort:"",
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
                <Card.Subtitle className="cardSubtitleSection">Bună, sunt Alexandra. <br/> Îmi pare bine că vrei să mă cunoști! <br/><br/></Card.Subtitle>
                <Card.Text className="aboutText">
                Consider că omul este o ființă rațională. El nu v-a acționa în nici un fel dacă consideră că un comportament nu îi v-a aduce beneficiu. Sunt momente când ne simțim copleșiți emoțional și nu mai vedem luminița de la capătul tunelului. Alteori ne putem întreba de ce nu putem fi așa cum visăm să fim! Suntem triști, cu un sentiment puternic de vid. Observăm că relațiile cu ceilalți sunt deficitare și nu înțelegem de ce. 
                <br/><br/>
                Rolul psihologului este tocmai acela de a te ajuta să înțelegi și să controlezi toate acestea, urcând împreună, același deal, indiferent de plouă sau ninge!
                Noi știm că după toate v-a ieși și soarele!
                Conștientizarea este primul pas care te face să acționezi! <br/>
                Investește-n tine!

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
            Știu cât de greu poate fi să vorbești cu cineva, din acest motiv te invit să programezi o primă ședință în care îți voi da mai multe detalii despre cum se va desfășura procesul terapeutic, îți voi răspunde la întrebări și în acest mod vei ști exact cum va avea loc progresul tău.
              <br/><br/>
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
