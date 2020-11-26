import React, { Component } from 'react'
import SeoComponent from "../components/SeoComponent/SeoComponent"
import NavBar from "../components/NavBar/NavBar"
import FooterBottom from "../components/FooterBottom/FooterBottom"
import "..//articole/style-edit.css"


class Corpul extends Component {
  render() {
    return (
      <div> 
        <SeoComponent/>
        <NavBar />
        <article>
          <div className="titluArticoleScrise">
            <h1>Cum se formează imaginea corporală negativă ?</h1>
            <div className="backgroundLineArticoleScrise"></div>
          </div>
        </article>
        <FooterBottom />
      </div>
    )
  }
}
export default Corpul
