import React, { Component } from 'react'
import NavBar from "../components/NavBar/NavBar"
import FooterBottom from "..//components/FooterBottom/FooterBottom"
import InfoComponent from '../components/InfoComponent/InfoComponent'


export default class index extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <InfoComponent />
        <FooterBottom />
      </div>
    )
  }
}

