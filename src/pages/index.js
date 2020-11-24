import React, { Component } from 'react'
// import SeoComponent from "../components/SeoComponent/SeoComponent"
import Helmet from 'react-helmet'
import favicon from '..//..//static/images/favicon.png'
import NavBar from "../components/NavBar/NavBar"
import Acasa from "..//components/Acasa/Acasa"
import Intro from "..//components/Intro/Intro"
import Servicii from "..//components/Servicii/Servicii"
import Review from "..//components/Review/Review"
import FooterBottom from "..//components/FooterBottom/FooterBottom"
// import imageCover from "..//..//static/images/img-cover.jpg"


export default class index extends Component {
  render() {
    return (
      <div>

<Helmet>
            {/* <!-- Primary Meta Tags --> */}
            <title>Marian Mihalache - Handcrafted leather | Iași  </title>
            <meta name="title" content="Marian Mihalache - Handcrafted leather | Iași  "/>
            <meta name="description" content="My name is Marian Mihalache and I love to do stuff from handcrafted leather. Shop handcrafted wallets, bags, watch straps, accessories, gifts and more."/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta name="keywords" content="wallets from leather, bags, watch straps, trouser straps, dog collars, harnesses, agenda / book covers, keychains, bracelets, handmade crafts, portofele din piele, genti din piele, curele pentru ceasuri, zgarda pentru caine, coperti din piele, serviete din piele, strapuri aparate foto,"></meta>
            <meta name="author" content="Marian Mihalache"/>
            <meta property="og:locale" content="ro_RO"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Marian Mihalache - Handcrafted leather | Iași"/>
            <meta property="og:site_name" content="Marian Mihalache - Handcrafted leather | Iași"></meta>
            <meta property="og:image" content="/images/cover-img.jpg"/>
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="630"/>
            <link rel="icon" href={favicon} />
            <meta property="og:image" content="/images/cover-img.jpg"/>
	          <meta property="og:image:width" content="1200"/>
	          <meta property="og:image:height" content="630"></meta>


            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://metatags.io/"/>
            <meta property="og:title" content="Marian Mihalache - Handcrafted leather | Iași  "/>
            <meta property="og:description" content="My name is Marian Mihalache and I love to do stuff from handcrafted leather. Shop handcrafted wallets, bags, watch straps, accessories, gifts and more."/>
            <meta property="og:image" content="/images/cover-img.jpg"/>
	          <meta property="og:image:width" content="1200"/>
	          <meta property="og:image:height" content="630"></meta>

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://metatags.io/"/>
            <meta property="twitter:title" content="Marian Mihalache - Handcrafted leather | Iași  "/>
            <meta property="twitter:description" content="My name is Marian Mihalache and I love to do stuff from handcrafted leather. Shop handcrafted wallets, bags, watch straps, accessories, gifts and more."/>
            <meta property="twitter:image" content="/images/cover-img.jpg"/>
          </Helmet>
        {/* <SeoComponent/> */}
        <NavBar />
        <Acasa />
        <Intro />
        <Servicii />
        <Review />
        <FooterBottom />
      </div>
    )
  }
}

