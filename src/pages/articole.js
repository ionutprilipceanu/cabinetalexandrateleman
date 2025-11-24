import React from "react"
import SeoComponent from "../components/SeoComponent/SeoComponent"
import NavBar from "../components/NavBar/NavBar"
import Articole from "../components/Articole/Articole"
import FooterBottom from "../components/FooterBottom/FooterBottom"

export default function ArticolePage() {
  return (
    <div>
      <SeoComponent />
      <NavBar />
      <Articole />
      <FooterBottom />
    </div>
  )
}
