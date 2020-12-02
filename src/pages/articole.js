import React, { Component } from 'react'
import SeoComponentArticle from "../components/SeoComponentArticle/SeoComponentArticle"
import NavBar from "../components/NavBar/NavBar"
import Articole from "..//components/Articole/Articole"
import FooterBottom from "../components/FooterBottom/FooterBottom"


export default class index extends Component {
  render() {
    return (
      <div>
        <SeoComponentArticle/>
        <NavBar />
        <Articole />
        <FooterBottom />
      </div>
    )
  }
}

