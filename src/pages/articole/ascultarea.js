import React, { Component } from 'react'
import NavBar from "..//../components/NavBar/NavBar"
import FooterBottom from "..//../components/FooterBottom/FooterBottom"
import "..//articole/style-edit.css"
import neascultare from "..//..//..//static/images/articole/neascultare.jpg"
import Fade from "react-reveal/Fade"
import Helmet from 'react-helmet'
import favicon from '..//..//static/images/favicon.png'
import imagineArticol from "..//..//static/images/articole/neascultare.jpg"

class Ascultarea extends Component {
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
            <meta property="og:url" content="https://www.psiholog-iasi-teleman.com/articole/"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Alexandra Teleman - Psihoterapeut | Iași"/>
            <meta property="og:description" content="Mă numesc Alexandra și sunt psihoterapeut. Cabinetul este deschis pentru ședințe personalizate, de psihoterapie și coaching, pentru adulți și adolescenți. Investește în tine!"/>
            <meta property="og:image" content={imagineArticol}/>
	          <meta property="og:image:width" content="1200"/>
	          <meta property="og:image:height" content="630"></meta>

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://www.psiholog-iasi-teleman.com/articole/"/>
            <meta property="twitter:title" content="Alexandra Teleman - Psihoterapeut | Iași"/>
            <meta property="twitter:description" content="Mă numesc Alexandra și sunt psihoterapeut. Cabinetul este deschis pentru ședințe personalizate, de psihoterapie și coaching, pentru adulți și adolescenți. Investește în tine!"/>
            {/* <meta property="og:image" content={imagineArticol}/> */}
          </Helmet>
        <NavBar />
        <article>
          <div className="titluArticoleScrise">
            <h1>"Ascultă-mă ca să te-ascult"</h1>
            <div className="backgroundLineArticoleScrise"></div>
          </div>

          <div className="text-articole">
          
            <p>
              Te-ai întrebat vreodată dacă ești un bun ascultător? Ce anume face diferența dintre un bun ascultător și un  ascultător jalnic? Cu siguranță ai remarcat faptul că există o serie de persoane cu care îți dorești să vorbești, în timp ce altele îți aprind o nevoie groaznică de a te face mic, și de a dispărea efectiv din peisaj. 
            </p>
            
            <p>
              Desigur, pot exista mulți alți factori pentru care dialogul cu unele persoane ne displace, dar acum o să ne focusăm exclusiv pe stilul comunicării. Capacitatea de ascultare poate îmbunătăți relațiile cu cei din jur. Pentru a-ți răspunde la prima întrebare te invit să faci un mic experiment: O să am rugămintea să intri în rolul ascultătorului cu prima persoană cu care urmează să interacționezi, nu înainte de a termina de citit acest paragraf. 
            </p>

            <Fade bottom cascade>
              <div className="neascultare">
                <img src={neascultare} alt="neascultare"></img>
                  
              </div>
            </Fade>

            <p> 
              Totodată te invit să devii propriul observator, și să identifici cât de ușor îți este să asculți activ. A asculta activ înseamnă să ai privirea îndreptată către interlocutorul tău, să îi adresezi întrebări deschise, precum ,,Cum anume s-a întâmplat?;  ,,Vrei să îmi povestești despre aceasta? ";  să parafrazezi: ,,Înțeleg că ai mult de lucru, după cum spui ai un termen limită pentru a termina proiectul", să-i numești emoțiile: ,,Observ că ești abătut". Într-un dialog eficient, empatia este primordială. Prin reflectarea emoțiilor, îi demonstrezi partenerului de dialog, faptul că ești empatic. Lista deprinderilor ascultării active poate continua, dar mă opresc aici pentru prima sarcină a primului tău experiment, pe care îl vei pune în practică. <br/>
              Succes și nu uita, <br/>
              <i>Investește-n tine! </i> 
            </p>
            <p>
              <b>Michael P. Nichols -</b> <i>Ascultă-mă ca să te- ascult</i>
            </p>
          
          </div>
        </article>
        <FooterBottom />
      </div>
    )
  }
}
export default Ascultarea
