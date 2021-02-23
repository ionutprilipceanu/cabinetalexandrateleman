import React, { Component } from 'react'
import NavBar from "..//../components/NavBar/NavBar"
import FooterBottom from "..//../components/FooterBottom/FooterBottom"
import "..//articole/style-edit.css"
import neascultare from "..//..//..//static/images/articole/depresia.jpg"
import Fade from "react-reveal/Fade"
import Helmet from 'react-helmet'
import favicon from '..//..//..//static/images/favicon.png'
import imagineArticol from "..//..//..//static/images/articole/depresia.jpg"

class Depresia extends Component {
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
          <meta property="og:url" content="https://www.psiholog-iasi-teleman.com/articole/depresia/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Alexandra Teleman - Psihoterapeut | Iași" />
          <meta property="og:description" content="Mă numesc Alexandra și sunt psihoterapeut. Cabinetul este deschis pentru ședințe personalizate, de psihoterapie și coaching, pentru adulți și adolescenți. Investește în tine!" />
          <meta property="og:image" content={imagineArticol} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630"></meta>

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.psiholog-iasi-teleman.com/articole/depresia/" />
          <meta property="twitter:title" content="Alexandra Teleman - Psihoterapeut | Iași" />
          <meta property="twitter:description" content="Mă numesc Alexandra și sunt psihoterapeut. Cabinetul este deschis pentru ședințe personalizate, de psihoterapie și coaching, pentru adulți și adolescenți. Investește în tine!" />
          {/* <meta property="og:image" content={imagineArticol}/> */}
        </Helmet>
        <NavBar />
        <article>
          <div className="titluArticoleScrise">
            <h1>Ce este depresia?</h1>
            <div className="backgroundLineArticoleScrise"></div>
          </div>

          <div className="text-articole">

            <p>
              Depresia (depresia majoră) este una dintre cele mai comune tulburări care afectează felul în care te simți, felul în care gândești și felul în care te comporți. Din fericire este tratabilă. Depresia declanșează sentimente de tristețe sau pierderea interesului acelor activități care înainte îți ofereau plăcere. Tulburarea depresivă poate fi legată de numeroase probleme emoționale cât și fiziologice și poate cauza incapacitate de a funcționa ca înainte, atât acasă cât și la serviciu.
            </p>

            <p>
              <ul>
                <h3>Simptomele depresive pot varia de la simptome medii la simptome severe, precum:</h3>
                <li>Sentimente de tristețe sau stare depresivă;</li>
                <li>Pierderea interesului sau a plăcerii activității care înainte îți oferea plăcere;</li>
                <li>Modificări ale apetitului sau pierderea în greutate;</li>
                <li>Probleme de insomnie sau hiposomnie;</li>
                <li>Pierderea energiei sau oboseală crescută;</li>
                <li>Creșterea activității fizice fără scop (de exemplu incapacitatea de a sta liniștit, ritmul, rotirea mâinilor) sau vorbirea încetinită (aceste acțiuni trebuie să fie suficient de severe pentru a fi observate de către ceilalți);</li>
                <li>Trăirea sentimentului de vid și lipsa valorii personale sau sentimente de vinovăție;</li>
                <li>Dificultăți în gândire și luarea deciziilor;</li>
                <li>Gânduri de moarte sau suicid.</li>
              </ul>
            </p>

            <Fade bottom cascade>
              <div className="neascultare">
                <img src={neascultare} alt="neascultare"></img>

              </div>
            </Fade>

            <p>
              Simptomele trebuie să persiste cel puțin 2 săptămâni și trebuie să reprezinte o schimbare a nivelului anterior de funcționare.
              Depresia afectează 1 adult din 15, (6,7%) într-un an,  iar 1 persoane din 6 va dezvolta depresie pe parcursul vieții ei (16,6%). Depresia poate apărea la orice moment din viață, însă media vârstei în instalarea depresiei este estimată la sfârșitul adolescenței până la mijlocul vârstei de 20 ani.

            </p>

            <h3>Factorii de risc ai depresiei</h3>

            <p><b>Biochimici:</b> anumite schimbări chimice la nivelul creierului pot contribui la apariția simptomelor depresive.</p>

            <p><b>Genetici:</b> depresia poate rula genetic. În cazul gemenilor identici există 70% șanse ca celălalt să aibă boala, cândva în viață.</p>

            <p><b>Personalitatea:</b> persoanele pesimiste sau cu o stimă de sine scăzută sunt predispuse în a dezvolta boala depresivă.</p>

            <p><b>Factorii de mediu:</b> expunerea continuă la violență, abuz sau sărăcie poate favoriza instalarea depresiei.</p>

            <i>https://www.psychiatry.org/patients-families/depression/what-is-depression</i>
          </div>
        </article>
        <FooterBottom />
      </div>
    )
  }
}
export default Depresia
