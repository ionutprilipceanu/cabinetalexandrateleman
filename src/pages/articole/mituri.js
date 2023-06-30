import React, { Component } from "react"
import NavBar from "..//../components/NavBar/NavBar"
import FooterBottom from "..//../components/FooterBottom/FooterBottom"
import "..//articole/style-edit.css"
import neascultare from "..//..//..//static/images/articole/mituri.jpg"
import Reveal from "..//..//components/Reveal"
import Helmet from "react-helmet"
import favicon from "..//..//..//static/images/favicon.png"
import imagineArticol from "..//..//..//static/images/articole/mituri.jpg"

class Mituri extends Component {
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
            content="https://www.psiholog-iasi-teleman.com/articole/mituri/"
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
            content="https://www.psiholog-iasi-teleman.com/articole/mituri/"
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
            <h1>2 Mituri ale Hipnozei</h1>
            <div className="backgroundLineArticoleScrise"></div>
          </div>

          <div className="text-articole">
            <h3>1. Pierderea totală a controlului asupra minţii</h3>

            <h3>2. Poţi rămâne blocat în transa hipnotică</h3>

            <p>
              Le vom lua pe rând şi am să încep cu mitul conform căruia "În
              transă pierdem orice control asupra propriei minţi".
            </p>

            <p>
              Aşa cum am spus hipnoza utilizează sugestii. Sugestiile acceptate
              de către client produc efecte reale şi observabile astfel încât se
              presupune că terapeutul controlează. În realitate cei care
              accesează transa hipnotică nu predau deloc controlul teraputului,
              ci defapt predau controlul propriului inconştient, inconştient
              care gestionează răspunsurile în locul minţii conştiente.
            </p>

            <Reveal>
              <div className="neascultare">
                <img src={neascultare} alt="neascultare"></img>
              </div>
            </Reveal>

            <p>
              Puterea de a trăi o transă hipnotică se află în softul oricărui
              individ. Toate formele de hipnoză sunt de fapt{" "}
              <b>un proces de autohipnoză</b>. Hipnotizatorul nu este nimic
              altceva decât un simplu ghid care îţi poate arăta calea pe care
              poţi merge pentru a realiza anumite fenomene intrapsihice, însă
              ceea ce faci tu ţine doar de decizia proprie.
            </p>

            <p>
              Următorul mit este cel conform căruia "Poţi rămâne blocat în
              transa hipnotică". Acest mit este foarte strâns legat de mitul
              precedent, deoarece dacă ai rămas blocat în transă înseamnă
              totodată că nu ai control asupra propriei minţi.
            </p>

            <p>
              n peste 200 de ani de istorie documentată a hipnozei clinice nu a
              existat nici măcar un singur astfel de caz.
            </p>

            <p>
              Chiar dacă terapeutul, ar pleaca brusc din camera, în timpul
              inducţiei şi nu ar mai reveni, te vei putea trezi la starea
              normală de veghe în ritmul tău propriu exact ca atunci când te
              trezeşti după un pui de somn sau după o scurtă reverie din timpul
              zilei.
            </p>

            <p>
              Holdevici, I. (2010).<i> Hipnoza clinică.</i> Editura Trei.
            </p>
          </div>
        </article>
        <FooterBottom />
      </div>
    )
  }
}
export default Mituri
