import React, { Component } from 'react'
import SeoComponent from "../components/SeoComponent/SeoComponent"
import NavBar from "../components/NavBar/NavBar"
import FormContact from "..//components/FormContact/FormContact"
import FooterBottom from "../components/FooterBottom/FooterBottom"


export default class index extends Component {
  render() {
    return (
      <div>
        <SeoComponent/>
        <NavBar />
        <FormContact />
        <FooterBottom />
      </div>
    )
  }
}

