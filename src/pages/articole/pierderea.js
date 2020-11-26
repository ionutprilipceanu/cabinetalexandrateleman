import React, { Component } from 'react'
import SeoComponent from "../components/SeoComponent/SeoComponent"
import NavBar from "../components/NavBar/NavBar"
import FooterBottom from "../components/FooterBottom/FooterBottom"
import "..//articole/style-edit.css"


class Pierderea extends Component {
  render() {
    return (
      <div> 
        <SeoComponent/>
        <NavBar />
        <article>
          <div className="titluArticoleScrise">
            <h1>Durerea cauzată de pierderi</h1>
            <div className="backgroundLineArticoleScrise"></div>
          </div>
        </article>
        <FooterBottom />
      </div>
    )
  }
}
export default Pierderea
