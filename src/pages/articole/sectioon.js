import React, { Component } from "react"
import NavBar from "../../components/NavBar/NavBar"
import FooterBottom from "../../components/FooterBottom/FooterBottom"
import "..//articole/style-edit.css"
import cazuistica from "..//..//..//static/images/articole/cazuisticaFR.jpg"
import Reveal from "..//..//components/Reveal"
import Helmet from "react-helmet"
import favicon from "..//..//..//static/images/favicon.png"
import imagineArticol from "..//..//..//static/images/articole/cazuisticaFR.jpg"

class Stresul extends Component {
  render() {
    return (
      <div>
        <Helmet>
          {/* <!-- Primary Meta Tags --> */}
          <title>Alexandra Teleman - Psihoterapeut | Iași</title>
          <meta
            name="title"
            content="Alexandra Teleman - Psihoterapeut | Iași"
          />
          <meta
            name="description"
            content="Mă numesc Alexandra și sunt psihoterapeut. Cabinetul este deschis pentru ședințe personalizate, de psihoterapie și coaching, pentru adulți și adolescenți. Investește în tine!"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta
            name="keywords"
            content="psiholog iasi, psiholog online, psiholog de familie, psihoterapeut iasi, psiholog, depresie, anxietate, tristețe, dezvoltare personală, psihoterapie, anxietate simptome, terapie de familie, terapie de cuplu, terapie online, terapie individuala"
          ></meta>
          <meta name="author" content="Alexandra Teleman" />
          <meta property="og:locale" content="ro_RO" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Alexandra Teleman - Psihoterapeut | Iași"
          />
          <meta
            property="og:site_name"
            content="Alexandra Teleman - Psihoterapeut | Iași"
          ></meta>
          <meta property="og:image" content={imagineArticol} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:type" content="image/jpeg" />
          <link rel="icon" href={favicon} />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://www.psiholog-iasi-teleman.com/articole/cazuistica/"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Alexandra Teleman - Psihoterapeut | Iași"
          />
          <meta
            property="og:description"
            content="Mă numesc Alexandra și sunt psihoterapeut. Cabinetul este deschis pentru ședințe personalizate, de psihoterapie și coaching, pentru adulți și adolescenți. Investește în tine!"
          />
          <meta property="og:image" content={imagineArticol} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630"></meta>

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://www.psiholog-iasi-teleman.com/articole/cazuistica/"
          />
          <meta
            property="twitter:title"
            content="Alexandra Teleman - Psihoterapeut | Iași"
          />
          <meta
            property="twitter:description"
            content="Mă numesc Alexandra și sunt psihoterapeut. Cabinetul este deschis pentru ședințe personalizate, de psihoterapie și coaching, pentru adulți și adolescenți. Investește în tine!"
          />
          {/* <meta property="og:image" content={imagineArticol}/> */}
        </Helmet>
        <NavBar />
        <article>
          <div className="titluArticoleScrise">
            <h1>Mon experience profesionelle</h1>
            <div className="backgroundLineArticoleScrise"></div>
          </div>

          <div className="text-articole">
            <p>
              <i>
                Cabinet Individuel de Psychologie Alexandra Teleman Iasi, rue
                Theodor Pallady nr 8{" "}
              </i>
            </p>

            <ul>
              <li>Manque de confiance en Soi</li>
              <li>Attaque de panique</li>
              <li>Blocages emotionelles</li>
              <li>Le stress et l anxiete </li>
              <li>Trouble anxio-depressif</li>
              <li>L anxiete généralisée </li>

              <Reveal>
                <div className="neascultare">
                  <img src={cazuistica} alt="stres"></img>
                </div>
              </Reveal>
              <li>Les phobies specifique</li>
              <dd>
                - Peur de voyage avec l avion ou avec un moyen de transport en
                commun{" "}
              </dd>
              <dd>- Claustrophobie</dd>
              <dd>- Phobie social</dd>
              <li>Soucis psyhosomatiques qui declanchent: </li>
              <dd>- Problemes digestifs</dd>
              <dd>- Migraine</dd>
              <dd>- Probleme d urine</dd>
              <dd>- Manque d’ appétit, le corp refuse la nuriture</dd>
              <dd>- Peur de manger</dd>
              <li>Perfectionisme maladaptative</li>
              <li>Les troubles sur l instabilité emotionelle</li>
              <li>Trouble de personnalité borderline </li>
              <li>Soucis dans le couple et les relations inter-individuell</li>
            </ul>
          </div>
        </article>
        <FooterBottom />
      </div>
    )
  }
}
export default Stresul
