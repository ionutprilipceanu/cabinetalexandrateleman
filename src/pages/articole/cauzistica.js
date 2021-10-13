import React, { Component } from 'react'
import NavBar from "../../components/NavBar/NavBar"
import FooterBottom from "../../components/FooterBottom/FooterBottom"
import "..//articole/style-edit.css"
import cazuistica from "..//..//..//static/images/articole/cazuistica.jpg"
import Fade from "react-reveal/Fade"
import Helmet from 'react-helmet'
import favicon from '..//..//..//static/images/favicon.png'
import imagineArticol from "..//..//..//static/images/articole/stres.jpg"

class Stresul extends Component {
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
          <meta property="og:url" content="https://www.psiholog-iasi-teleman.com/articole/cazuistica/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Alexandra Teleman - Psihoterapeut | Iași" />
          <meta property="og:description" content="Mă numesc Alexandra și sunt psihoterapeut. Cabinetul este deschis pentru ședințe personalizate, de psihoterapie și coaching, pentru adulți și adolescenți. Investește în tine!" />
          <meta property="og:image" content={imagineArticol} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630"></meta>

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.psiholog-iasi-teleman.com/articole/cazuistica/" />
          <meta property="twitter:title" content="Alexandra Teleman - Psihoterapeut | Iași" />
          <meta property="twitter:description" content="Mă numesc Alexandra și sunt psihoterapeut. Cabinetul este deschis pentru ședințe personalizate, de psihoterapie și coaching, pentru adulți și adolescenți. Investește în tine!" />
          {/* <meta property="og:image" content={imagineArticol}/> */}
        </Helmet>
        <NavBar />
        <article>
          <div className="titluArticoleScrise">
            <h1>Cazuistica personală</h1>
            <div className="backgroundLineArticoleScrise"></div>
          </div>

          <div className="text-articole">

          <ol>
            <li>Probleme legate de stima de Sine</li>
            <li>Atac de panică</li>
            <li>Blocaje emoționale</li>
            <li>Stres și anxietate</li>
            <li>Doliu</li>
            <li>Pierderea unei persoane prin separare sau divorț</li>
            <li>Depresie și stres post-traumatic</li>
            <li>Tulburare anxio-depresivă</li>

            <Fade bottom cascade>
              <div className="neascultare">
                <img src={cazuistica} alt="stres"></img>

              </div>
            </Fade>

            <li>Anxietate generalizată</li>
              <dt>o	Fobii specifice :</dt>
                <dd>- teama de a zbura cu avionul, a merge sau a conduce mașina etc</dd>
                <dd>- claustrofobie</dd>
                <dd>- fobie socială</dd>
                <dd>- frica de examene</dd>
                <dd>- frica de a vorbi în fața unui grup</dd>
            <li>Probleme psihosomatice care declanșează:</li>
                <dd>- Probleme digestive</dd>
                <dd>- Dureri abdominale</dd>
                <dd>- Dureri sau inposibilitatea de a urina</dd>
                <dd>- Lipsa apetitului și frica de a mânca</dd>
                <dd>- Tremur la nivelul mainilor sau diverse spasme ale corpului</dd>
                <dd>- Frica de boală sau de virusul Covid19</dd>
            <li>Burnout – sau epuizare profesională</li>
            <li>Procrastinare și perfecționism mal-adaptativ</li>
            <li>Probleme legate de instabilitatea emoțională și lipsa autocontrolului</li>
            <li>Tulburări de personalitate borderline</li>
            <li>Probleme de integrare și relaționare inter-individuală sau de grup</li>
            <li>Probleme legate de cuplu</li>
            <li>Metode și tehnici de comunicare la locul de muncă</li>
            <li>Dezvoltare personală</li>
          </ol>
          </div>
        </article>
        <FooterBottom />
      </div>
    )
  }
}
export default Stresul
