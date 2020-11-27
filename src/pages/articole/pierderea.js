import React, { Component } from 'react'
import SeoComponentArticle from "..//..//components/SeoComponentArticle/SeoComponentArticle"
import NavBar from "..//../components/NavBar/NavBar"
import FooterBottom from "..//../components/FooterBottom/FooterBottom"
import "..//articole/style-edit.css"
import pierderi from "..//..//..//static/images/articole/pierderi.jpg"
import Fade from "react-reveal/Fade"

class Pierderea extends Component {
  render() {
    return (
      <div> 
        <SeoComponentArticle/>
        <NavBar />
        <article>
          <div className="titluArticoleScrise">
            <h1>Durerea cauzată de pierderi</h1>
            <div className="backgroundLineArticoleScrise"></div>
          </div>

          <div className="text-articole">
          
            <p>
              "Viața normală este o viață cu probleme".  Aceasta este fraza cu care mentorul meu obișnuia să înceapă un discurs. Analizând ciclul vieții și schimbările la care suntem supuși zilnic, revin din ce în ce mai des la ceea ce supervizorul meu obișnuia să repete. Viața este în mișcare. Nimic nu stă în loc. Pierderile survin în ciclul vieții ca un fel de a fi. Acestea pot varia de la răcirea unei relații de prietenie, trecerea printr-un divorț ajungând până la pierderea unui părinte. Indiferent de tipul de pierdere, diferența o face intensitatea emoțiilor pe care le trăim. 
            </p>
            
            <p>
              Durerea! Întrebarea care se ridică, este până la ce punct  poate ajunge această perioadă de travaliu pentru a nu se ajunge la <i>doliu cronic</i>. O serie de psihologi susțin că perioada normală de doliu variază între 6 luni și 1 an, în timp ce alții susțin că se poate ajunge până la 2 ani și 6 luni. Acest interval de doliu nu a fost însă confirmat în totalitate de cei care trec prin perioada dificilă a pierderii. Se poate ajunge la doliu cronic atunci când cel care trăiește pierderea, oferă o altă semnificație doliului.
            </p>

            <Fade bottom cascade>
              <div className="neascultare">
                <img src={pierderi} alt="pierderi"></img>
                  
              </div>
            </Fade>

            <p> 
              Din dorința de a se simți încă aproape de persoana pierdută, durerea este folosită ca o ancoră între cei doi. Uneori cei suferinzi se simt oarecum vinovați dacă nu mențin această durere la aceeași intensitate. Din nevoia de a regla acest disconfort emoțional, mulți suferinzi își găsesc <i>echilibrul aparent</i> în consumul de alcool, droguri sau pot dezvolta comportamente psihice grave precum depresie cât și comportamente agresive. În aceste situații este indicată intervenția specializată a unui psiholog. De la caz la caz medicamentația poate ajuta procesul de vindecare. 
            </p>
            <p>
              Procesul terapeutic poate fi uneori dureros, deoarece este greu să împărtășim o experiență atât de intimă altei persoane. În plus considerăm că nimeni nu ne poate înțelege propria durere. Chiar și psihologul! Fără să îi dai o șansă, dându-ți o șansă! De cele mai multe ori persoanele care trec prin suferințe mari, nu apelează la ajutorul unui psiholog. Să scoatem la suprafață toată durerea necesită declanșarea altei dureri. Dar nu uita așa cum spunea marele filosof Spinoza, <i>cunoașterea</i> poate survine doar printr-o experiențiere dureroasă. <br/>
              Așa că nu uita, <br/>
              <i>Investește-n tine! </i> 
            </p>
            <p>
              <b>Bucay, J. (2018).  -</b> <i>Calea Lacrimilor, Cap 4. </i>Grup Editorial Litera
            </p>
          
          </div>
        </article>
        <FooterBottom />
      </div>
    )
  }
}
export default Pierderea
