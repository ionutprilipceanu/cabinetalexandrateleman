import React from 'react'
import Helmet from 'react-helmet'
import favicon from '..//..//..//static/images/favicon.png'
import imagineFundal from "..//..//..//static/images/cover-img-update.jpg" 


function SeoComponent() {
  return (
        <div>
            <Helmet>
            {/* <!-- Primary Meta Tags --> */}
            <title>Alexandra Teleman - Psihoterapeut | Iași</title>
            <meta name="title" content="Alexandra Teleman - Psihoterapeut | Iași"/>
            <meta name="description" content="Mă numesc Alexandra și sunt psihoterapeut. Cabinetul este deschis pentru ședințe personalizate, de psihoterapie și coaching, pentru adulți și adolescenți. Investește în tine!"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta name="keywords" content="psiholog iasi, psiholog online, psiholog de familie, psihoterapeut iasi, psiholog, depresie, anxietate, tristețe, dezvoltare personală, psihoterapie, anxietate simptome, terapie de familie, terapie de cuplu, terapie online, terapie individuala"></meta>
            <meta name="author" content="Alexandra Teleman"/>
            <meta property="og:locale" content="ro_RO"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Alexandra Teleman - Psihoterapeut | Iași"/>
            <meta property="og:site_name" content="Alexandra Teleman - Psihoterapeut | Iași"></meta>
            <meta property="og:image" content={imagineFundal}/>
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="630"/>
            <meta property="og:image:type" content="image/jpeg" />
            <link rel="icon" href={favicon} />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://www.psiholog-iasi-teleman.com/"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Alexandra Teleman - Psihoterapeut | Iași"/>
            <meta property="og:description" content="Mă numesc Alexandra și sunt psihoterapeut. Cabinetul este deschis pentru ședințe personalizate, de psihoterapie și coaching, pentru adulți și adolescenți. Investește în tine!"/>
            {/* <meta property="og:image" content={imagineFundal}/> */}
	          <meta property="og:image:width" content="1200"/>
	          <meta property="og:image:height" content="630"></meta>

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://www.psiholog-iasi-teleman.com/"/>
            <meta property="twitter:title" content="Alexandra Teleman - Psihoterapeut | Iași"/>
            <meta property="twitter:description" content="Mă numesc Alexandra și sunt psihoterapeut. Cabinetul este deschis pentru ședințe personalizate, de psihoterapie și coaching, pentru adulți și adolescenți. Investește în tine!"/>
            {/* <meta property="og:image" content={imagineFundal}/> */}
          </Helmet>
        </div>
  )
}
export default SeoComponent