import React, { Component } from 'react'
import NavBar from "..//../components/NavBar/NavBar"
import FooterBottom from "..//../components/FooterBottom/FooterBottom"
import "..//articole/style-edit.css"
import neascultare from "..//..//..//static/images/articole/antidepresie.jpg"
import Fade from "react-reveal/Fade"
import Helmet from 'react-helmet'
import favicon from '..//..//..//static/images/favicon.png'
import imagineArticol from "..//..//..//static/images/articole/antidepresie.jpg"

class Antidepresie extends Component {
  render() {
    return (
      <div>
        <Helmet>
          {/* <!-- Primary Meta Tags --> */}
          <title>Alexandra Teleman - Psihoterapeut | Iași</title>
          <meta name="title" content="Alexandra Teleman - Psihoterapeut | Iași" />
          <meta name="description" content="Mă numesc Alexandra și sunt psihoterapeut. Cabinetul este deschis pentru ședințe personalizate, de psihoterapie și coaching, pentru adulți și adolescenți. Investește în tine!" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <meta name="keywords" content="psiholog iasi, psiholog online, psiholog de familie, psihoterapeut iasi, psiholog, depresie, anxietate, tristețe, dezvoltare personală, psihoterapie, anxietate simptome, terapie de familie, terapie de cuplu, terapie online, terapie individuala"></meta>
          <meta name="author" content="Alexandra Teleman" />
          <meta property="og:locale" content="ro_RO" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Alexandra Teleman - Psihoterapeut | Iași" />
          <meta property="og:site_name" content="Alexandra Teleman - Psihoterapeut | Iași"></meta>
          <meta property="og:image" content={imagineArticol} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:type" content="image/jpeg" />
          <link rel="icon" href={favicon} />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.psiholog-iasi-teleman.com/articole/antidepresie/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Alexandra Teleman - Psihoterapeut | Iași" />
          <meta property="og:description" content="Mă numesc Alexandra și sunt psihoterapeut. Cabinetul este deschis pentru ședințe personalizate, de psihoterapie și coaching, pentru adulți și adolescenți. Investește în tine!" />
          <meta property="og:image" content={imagineArticol} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630"></meta>

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.psiholog-iasi-teleman.com/articole/antidepresie/" />
          <meta property="twitter:title" content="Alexandra Teleman - Psihoterapeut | Iași" />
          <meta property="twitter:description" content="Mă numesc Alexandra și sunt psihoterapeut. Cabinetul este deschis pentru ședințe personalizate, de psihoterapie și coaching, pentru adulți și adolescenți. Investește în tine!" />
          {/* <meta property="og:image" content={imagineArticol}/> */}
        </Helmet>
        <NavBar />
        <article>
          <div className="titluArticoleScrise">
            <h1>5 Tehnici Antidepresive</h1>
            <div className="backgroundLineArticoleScrise"></div>
          </div>

          <div className="text-articole">

            <p>
              Depresia este una dintre tulburările cele mai tratabile. Între 80% și 90% procente din populația afectată de depresie răspund pozitiv la tratament.
            </p>

            <Fade bottom cascade>
              <div className="neascultare">
                <img src={neascultare} alt="neascultare"></img>

              </div>
            </Fade>

            <p><b>Mindfulness:</b> este acel proces de acceptare și conștientizare a propriei persoane. De tipul "Sunt AICI și ACUM". Este o metodă care te ancorează în prezent. </p>

            <p><b>Hipnoză:</b> este o tehnică care utilizează la nivel inconștient toate resursele de care individul dispune.</p>

            <p><b>Activități ce vă binedispun:</b> pot varia de la o persoană la alta. Aici pot intra activități precum: gătitul, ieșitul cu prietenii, vizionarea unui film, scrisul într-un jurnal, shopping-ul etc.</p>

            <p><b>Setarea de noi obiective:</b> obiectivele dau sens vieții. Chiar dacă e greu, încercă să îți setezi noi obiective, realizabile. Vizualizează cum anume te vei simți când vei atinge acel obiectiv? Setează-ți obiectivele în pași mici și fă câte puțin zilnic, pentru a atinge acel obiectiv.</p>

            <p><b>Acceptare și angajament:</b> Accepetă prezentul. Rămâi în prezent și orientează-te spre viitor. Trecutul este trecut și nu îl mai poți schimba. Angajează-te în activități acum, în prezent. Trecutul este un fost prieten de la care ti-ai luat la revedere, acum ești în prezent și prezentul este cel mai bun prieten al tău. </p>

            <i>Teleman, A. (2020)</i>
          </div>
        </article>
        <FooterBottom />
      </div>
    )
  }
}
export default Antidepresie
