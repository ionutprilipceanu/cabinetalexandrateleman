import React from 'react'
import Helmet from 'react-helmet'
import favicon from '..//..//..//static/images/favicon.png'
import imagineFundal from "..//..//..//static/images/cover-img-update.jpg"


function SeoComponent() {
  return (
        <div>
            <Helmet>
            {/* <!-- Primary Meta Tags --> */}
            <title>Andreea Teleman - Psihoterapeut | Iași</title>
            <meta name="title" content="Andreea Teleman - Psihoterapeut | Iași"/>
            <meta name="description" content="Alexandra mă numesc și sunt psihoterapeut, cabinetul este deschis pentru ședințe personalizate de psihoterapie și consiliere pentru adulți. Învinge depresia și anxietatea."/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta name="keywords" content="psiholog iasi, psihoterapeut iasi, psiholog, depresie, anxietate, tristețe, dezvoltare personală, psihoterapie, anxietate simptome, terapie de familie, terapie de cuplu, terapie online, terapie individuala"></meta>
            <meta name="author" content="Andreea Teleman"/>
            <meta property="og:locale" content="ro_RO"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Andreea Teleman - Psihoterapeut | Iași"/>
            <meta property="og:site_name" content="Andreea Teleman - Psihoterapeut | Iași"></meta>
            <meta property="og:image" content={imagineFundal}/>
            <meta property="og:image:width" content="1000"/>
            <meta property="og:image:height" content="430"/>
            <link rel="icon" href={favicon} />
            <meta property="og:image" content={imagineFundal}/>
	          <meta property="og:image:width" content="1000"/>
	          <meta property="og:image:height" content="430"></meta> 


            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://alexandra-teleman.netlify.app/"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Andreea Teleman - Psihoterapeut | Iași"/>
            <meta property="og:description" content="Alexandra mă numesc și sunt psihoterapeut, cabinetul este deschis pentru ședințe personalizate de psihoterapie și consiliere pentru adulți. Învinge depresia și anxietatea."/>
            <meta property="og:image" content={imagineFundal}/>
	          <meta property="og:image:width" content="1000"/>
	          <meta property="og:image:height" content="430"></meta>

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://metatags.io/"/>
            <meta property="twitter:title" content="Andreea Teleman - Psihoterapeut | Iași"/>
            <meta property="twitter:description" content="Alexandra mă numesc și sunt psihoterapeut, cabinetul este deschis pentru ședințe personalizate de psihoterapie și consiliere pentru adulți. Învinge depresia și anxietatea."/>
            <meta property="og:image" content={imagineFundal}/>
          </Helmet>
        </div>
  )
}
export default SeoComponent