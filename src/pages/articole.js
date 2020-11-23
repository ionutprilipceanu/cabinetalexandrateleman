import React, { Component } from 'react'
import NavBar from "../components/NavBar/NavBar"

import FooterBottom from "../components/FooterBottom/FooterBottom"


export default class index extends Component {
  render() {
    return (
      <div>
        <NavBar />
        
        <FooterBottom />
      </div>
    )
  }
}

