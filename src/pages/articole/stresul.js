import React, { Component } from 'react'
import SeoComponent from "../components/SeoComponent/SeoComponent"
import NavBar from "../components/NavBar/NavBar"
import FooterBottom from "../components/FooterBottom/FooterBottom"
import "..//articole/style-edit.css"


class Stresul extends Component {
  render() {
    return (
      <div> 
        <SeoComponent/>
        <NavBar />
        <article>
          <div className="titluArticoleScrise">
            <h1>De la stres la psihosomatizare</h1>
            <div className="backgroundLineArticoleScrise"></div>
          </div>
        </article>
        <FooterBottom />
      </div>
    )
  }
}
export default Stresul
