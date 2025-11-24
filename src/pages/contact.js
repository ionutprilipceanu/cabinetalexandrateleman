import React from "react"
import SeoComponent from "../components/SeoComponent/SeoComponent"
import NavBar from "../components/NavBar/NavBar"
import FormContact from "../components/FormContact/FormContact"
import MapComponent from "../components/MapComponent/MapComponent"
import FooterBottom from "../components/FooterBottom/FooterBottom"

export default function Contact() {
  return (
    <div>
      <SeoComponent />
      <NavBar />
      <FormContact />
      <MapComponent />
      <FooterBottom />
    </div>
  )
}
