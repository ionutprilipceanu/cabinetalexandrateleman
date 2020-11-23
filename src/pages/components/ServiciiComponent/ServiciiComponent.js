import React, { Component } from 'react'
import "./ServiciiComponent.css"
import ServiciiDp from "..//ServiciiDuplicate/ServiciiDp"

// import Fade from "react-reveal/Fade"

class ServiciiComponent extends Component {
  render() {
    return (

      <article>
        <div className="titluServicii">
          <h1>Servicii</h1>
          <div className="backgroundLineServicii"></div>
        </div>

        <ServiciiDp />
      </article>
    )
  }
}

export default ServiciiComponent