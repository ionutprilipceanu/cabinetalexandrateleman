import React, { Component } from 'react'
// import SeoComponent from "../components/SeoComponent/SeoComponent"
import NavBar from "../components/NavBar/NavBar"
import FooterBottom from "..//components/FooterBottom/FooterBottom"
import InfoComponent from '../components/InfoComponent/InfoComponent'


export default class index extends Component {
  render() {
    return (
      <div>
        {/* <SeoComponent/> */}
        <NavBar />
        <InfoComponent />
        <FooterBottom />
      </div>
    )
  }
}

