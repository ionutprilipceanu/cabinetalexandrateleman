import React, { Component } from 'react'
import SeoComponent from "../components/SeoComponent/SeoComponent"
import NavBar from "../components/NavBar/NavBar"

import FooterBottom from "../components/FooterBottom/FooterBottom"


export default class index extends Component {
  render() {
    return (
      <div>
        <SeoComponent/>
        <NavBar />
        <br/><br/><br/><br/><br/>
        <h1 style={{margin:"15%"}}>In work...</h1>
        <br/><br/><br/><br/><br/>
        <FooterBottom />
      </div>
    )
  }
}

