import React, { Component } from "react"
import "./Acasa.css"
import Reveal from "..//Reveal"
import favicon from "..//..//..//static/images/favicon.png"
import homePrimar from "..//Acasa/images/primaPagina.jpg"
import homeSecundar from "..//Acasa/images/primaSecundar.jpg"
import { Link } from "gatsby"

class Acasa extends Component {
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
      <div className="Intro" id="home">
        <div className="background-Primar">
          <img
            src={homePrimar}
            width="auto"
            height="auto"
            alt="background_logo"
          />
        </div>
        <div className="background-Secundar">
          <img src={homeSecundar} alt="background_logo" />
        </div>
        <div className="contactInfoHome">
          <Reveal>
            <div className="titluShow">
              <h1>Investește-n tine</h1>

              <div className="contactName">
                <img src={favicon} alt="logo" className="contactLogo" />
                <p>
                  Alexandra Teleman <br />
                  (+40) 756 660 085 <br />
                  cabinetteleman@gmail.com
                </p>
              </div>
            </div>
          </Reveal>
          <div className="btn-all">
            <Link
              to="/contact/"
              className="btn-start"
              activeClassName="activeNav"
            >
              Programează ședința{" "}
            </Link>
          </div>
          <div className="btn-cazuistica">
            <Link
              to="/articole/cazuistica/"
              className="btn-start-cazuistica"
              activeClassName="activeNav"
            >
              Cazuistica
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Acasa
