import React, { Component } from "react"
import NavBar from "..//../components/NavBar/NavBar"
import FooterBottom from "..//../components/FooterBottom/FooterBottom"
import "..//articole/style-edit.css"
import stres from "..//..//..//static/images/articole/stres.jpg"
import Reveal from "..//..//components/Reveal"
import Helmet from "react-helmet"
import favicon from "..//..//..//static/images/favicon.png"
import imagineArticol from "..//..//..//static/images/articole/stres.jpg"

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
            content="https://www.psiholog-iasi-teleman.com/articole/stresul/"
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
            content="https://www.psiholog-iasi-teleman.com/articole/stresul/"
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
            <h1>De la stres la psihosomatizare</h1>
            <div className="backgroundLineArticoleScrise"></div>
          </div>

          <div className="text-articole">
            <p>
              Trăim în era vitezei! Dezvoltarea societății prin schimbarea
              rolurilor pune presiune atât pe femei cât și pe bărbați.
              Așteptările celorlați sunt mari! Dar sunt ele mai mari decât
              propriile așteptări? O femeie de succes în zilele noastre pe lângă
              faptul că trebuie să aibă o carieră zdravănă, trebuie să fie o
              mamă model, o soție desăvârșită, o noră decentă, o prietenă de
              nădejde, o bucătăreasă bună, să pună cele mai bune murături și
              lista poate continua! Pe scurt, un bărbat bun trebuie să susțină
              toată descrierea anterioară plus suținere financiară! Ce se
              întâmplă când simți acea presiune socială și familială din cauza
              faptului că nu reușești să le faci pe toate? Organismul
              reacționează și intră în stres.
            </p>

            <p>
              După S.Taylor (1998), stresul este procesul de evaluare al
              evenimetelor, ca fiind dificile, periculoase, provocatoare
              etc.Tulburările la care stresul poate conduce pot fi: tulburări
              somatice (dureri de cap, probleme gastrointestinale, diabet
              zaharat, probleme imunitare, etc) tulburări comportamnetale,
              (alcoolism, obezitate, tulburări de somn, etc) tulburări
              emoționale, (anxietate cronică, fobii, depresii etc), probleme
              cognitive (probleme de memorie, gânduri obsesive etc).
            </p>

            <Reveal>
              <div className="neascultare">
                <img src={stres} alt="stres"></img>
              </div>
            </Reveal>
            <p>
              Dacă simți că faci parte din categoria persoanelor stresate și
              presate de timp, de societate, de iubită, de iubit, de soție, de
              soț, de soacră, de amantă, de amant, te invit să îți oferi luxul
              de a lua o pauză de la toate acestea! O pauză mentală, în primul
              rând! De fapt ce sunt toatea astea? Tu pe unde ești? Prioritizarea
              propriei persoane este primul pas. La fel cum într-un avion în caz
              de turbulențe primul care își pune masca este părintele și mai
              apoi copilul, la fel se procedează și aici .Timpul pe care îl avem
              la dispoziție este limitat. Stabilirea listei de sarcini poate fi
              reevaluată. Găsirea unei metode de relaxare este primordială! Omul
              este cel care stabilește targhete și tot omul este cel care le
              restabilește! <br />
              Găsește-ți propia metodă de relaxare care distruge stresul! <br />
              Fă o pauză și investește-n tine!
              <br />
              Recadrare mintală!
            </p>

            <p>
              <b>Peter J. Hawkins, (2009) -</b> <i>Hipnoza și stresul.</i>
              Polirom
            </p>
          </div>
        </article>
        <FooterBottom />
      </div>
    )
  }
}
export default Stresul
