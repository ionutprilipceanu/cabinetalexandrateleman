import React, { Component } from "react"
import NavBar from "..//../components/NavBar/NavBar"
import FooterBottom from "..//../components/FooterBottom/FooterBottom"
import "..//articole/style-edit.css"
import neascultare from "..//..//..//static/images/articole/hipnoza.jpg"
// import Fade from "react-reveal/Fade"
import Helmet from "react-helmet"
import favicon from "..//..//..//static/images/favicon.png"
import imagineArticol from "..//..//..//static/images/articole/hipnoza.jpg"

class Hipnoza extends Component {
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
            content="https://www.psiholog-iasi-teleman.com/articole/hipnoza/"
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
            content="https://www.psiholog-iasi-teleman.com/articole/hipnoza/"
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
            <h1>Ce este hipnoza?</h1>
            <div className="backgroundLineArticoleScrise"></div>
          </div>

          <div className="text-articole">
            <p>
              În primul rând hipnoza este o tehnică folosită în actul
              terapeutic.
            </p>

            <p>
              Conform unui renumit psihoterapeut american, pe nume M. Erickson
              hipnoza este o stare modificată a conştiinţei.
            </p>

            <p>
              De cele mai multe ori noi trăim zilnic, transe hipnotice dar fără
              să conştientizăm. De pildă atunci când vizionăm un film care ne
              place, ne absoarbe complet, trăim o transă hipnotică. O parte din
              noi controlează minimal ceea ce se întâmplă în jurul nostru, este
              ceea ce psihologii numesc mintea conştientă, iar o altă parte
              plonjează cu totul într-o altă realitate, care uită unde se află,
              uită cum trece timpul, şi din spectator devine actor. Această
              parte este ceea ce psihologii numesc mintea inconştientă.
            </p>

            {/* <Fade bottom cascade> */}
            <div className="neascultare">
              <img src={neascultare} alt="neascultare"></img>
            </div>
            {/* </Fade> */}

            <p>
              <ul>
                <h3>
                  Asociaţia Psihologilor Amercicani (2005), prezintă o descriere
                  detaliată a hipnozei după cum urmează:
                </h3>
                <li>
                  Hipnoza, implică un proces prin intermediul căruia pacientului
                  i se administrează o serie de sugestii menite să-l determine
                  pe client să trăiască anumite experienţe în plan imaginativ;
                </li>
                <li>
                  În timpul hipnozei pacientul va fi ghidat de către terapeut
                  pentru a reacţiona la sugestii, sugestii care îi pot modifica
                  starea perceptivă, senzorială, emoţională, cognitivă sau
                  comportamentală;
                </li>
                <li>
                  În cazul în care pacientul răspunde la sugestii se presupune
                  că hipnoza a fost indusă;
                </li>
                <li>
                  Detaliile referitoare la procedurile şi sugestiile hipnotice
                  sunt alese în funcţie de obiectivele alese de către terapeut
                  şi nevoile clientului.{" "}
                </li>
              </ul>
            </p>

            <p>
              De exemplu Weitzenhofer, un terapeut german în cazul unui pacient
              bulimic, foloseşte următoarea sugestie:
            </p>

            <p>
              <b>
                "De acum înainte, când vei mânca, te vei sătura foarte repede şi
                mâncatul va deveni ceva neplăcut".
              </b>
            </p>

            <p>
              Pentru că suntem oameni, şi suntem diferiţi, transa hipnotică este
              trăită în mod unic, de fiecare dintre noi. Există pacienţi care
              relatează experienţe trăite în transa hipnotică precum o plăcută
              stare de relaxare, sau o stare de amorţeală , sau de plutire. Unii
              povestesc că în timpul transei au călătorit în trecut, în timp ce
              alţii în viitor.
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
export default Hipnoza
