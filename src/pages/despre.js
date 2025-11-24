import React from "react";
import SeoComponent from "../components/SeoComponent/SeoComponent";
import NavBar from "../components/NavBar/NavBar";
import FooterBottom from "../components/FooterBottom/FooterBottom";
import InfoComponent from "../components/InfoComponent/InfoComponent";

export default function Index() {
  return (
    <div>
      <SeoComponent />
      <NavBar />
      <InfoComponent />
      <FooterBottom />
    </div>
  );
}
