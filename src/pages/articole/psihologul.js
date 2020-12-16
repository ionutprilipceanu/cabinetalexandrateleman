import React, { Component } from 'react'
import NavBar from "..//../components/NavBar/NavBar"
import FooterBottom from "..//../components/FooterBottom/FooterBottom"
import "..//articole/style-edit.css"
import neascultare from "..//..//..//static/images/articole/psihologul.jpg"
import Fade from "react-reveal/Fade"
import Helmet from 'react-helmet'
import favicon from '..//..//..//static/images/favicon.png'
import imagineArticol from "..//..//..//static/images/articole/psihologul.jpg"

class Psihologul extends Component {
  render() {
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
            <meta property="og:image" content={imagineArticol}/>
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="630"/>
            <meta property="og:image:type" content="image/jpeg" />
            <link rel="icon" href={favicon} />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://www.psiholog-iasi-teleman.com/articole/psihologul/"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Alexandra Teleman - Psihoterapeut | Iași"/>
            <meta property="og:description" content="Mă numesc Alexandra și sunt psihoterapeut. Cabinetul este deschis pentru ședințe personalizate, de psihoterapie și coaching, pentru adulți și adolescenți. Investește în tine!"/>
            <meta property="og:image" content={imagineArticol}/>
	          <meta property="og:image:width" content="1200"/>
	          <meta property="og:image:height" content="630"></meta>

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://www.psiholog-iasi-teleman.com/articole/psihologul/"/>
            <meta property="twitter:title" content="Alexandra Teleman - Psihoterapeut | Iași"/>
            <meta property="twitter:description" content="Mă numesc Alexandra și sunt psihoterapeut. Cabinetul este deschis pentru ședințe personalizate, de psihoterapie și coaching, pentru adulți și adolescenți. Investește în tine!"/>
            {/* <meta property="og:image" content={imagineArticol}/> */}
          </Helmet>
        <NavBar />
        <article>
          <div className="titluArticoleScrise">
            <h1>Cum să-ți alegi psihologul?</h1>
            <div className="backgroundLineArticoleScrise"></div>
          </div>

          <div className="text-articole">
          
            <p>
              Nu există un manual care să stipuleze care sunt pașii, după care ar trebui să ne alegem psihologul. Cu toate acestea este important să înțelegem care sunt aștepările noastre în urma intervenției psihologice, pentru a avea un rezultat pe măsură. De cele mai multe ori oamenii aleg să meargă la un psiholog recomandat de alții, văzut la televizor, la autorul unei cărți, de pe Internet etc. Cu toate acestea vă puteți întreba dacă ați ajuns exact la psihologul de care aveți nevoie. Iată câte idei în funcție de care vă puteți alege psihologul:
              <ul>
                  <li>Care este formarea și școala pe care a absolvit-o;</li>
                  <li>Ce experiență are și de cât timp practică psihoterapia;</li>
                  <li>Cât timp durează ședința terapeutică;</li>
                  <li>Care este tariful perceput pentru fiecare ședință;</li>
                  <li>Care este frecvența ședințelor terapeutice;</li>
                  <li>Care este forma ședințelor terapeutice;</li>
                  <li>Care sunt problemele pe care le tratează;</li>
                  <li>Care este modalitatea de plată;</li>
                  <li>Lucrează  cu CNAS?</li>
                  <li>Dacă contează vârsta și genul psihologului, bineînțeles veți ține cont și de aceste aspecte.</li>
              </ul>
            </p>

            <Fade bottom cascade>
              <div className="neascultare">
                <img src={neascultare} alt="neascultare"></img>
                  
              </div>
            </Fade>

            <p> 
              Din păcate nu există o formulă magică după care să vă alegeți psihoterapeutul. Pentru că suntem ființe umane și reacționăm la schimbul de energie și emoție, atunci când veți simți că trăiți la unison cu terapeutul vostru, înseamnă că ați ales psihologul perfect pentru voi. Există clienți care au schimbat până la patru psihologi până au găsit psihologul ,,perfect" pentru ei. Dacă simțiți că nu rezonați cu un anumit psiholog este perfect normal să mai încercați și altceva.
            </p>

            <p>Bernard G, Valerie Jalfre <i>Les Psychoterapies (2008)</i></p>
          </div>
        </article>
        <FooterBottom />
      </div>
    )
  }
}
export default Psihologul
