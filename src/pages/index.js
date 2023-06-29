import React from "react"
import SeoComponent from "../components/SeoComponent/SeoComponent"
import NavBar from "../components/NavBar/NavBar"
import Acasa from "..//components/Acasa/Acasa"
import Intro from "..//components/Intro/Intro"
import Servicii from "..//components/Servicii/Servicii"
import Review from "..//components/Review/Review"
import FooterBottom from "..//components/FooterBottom/FooterBottom"

const index = () => {
  return (
    <div>
      <SeoComponent />
      <NavBar />
      <Acasa />
      <Intro />
      <Servicii />
      <Review />
      <FooterBottom />
    </div>
  )
}

export default index
