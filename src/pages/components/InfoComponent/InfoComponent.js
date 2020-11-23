import React, { Component } from 'react'
import "./InfoComponent.css"
import image from "./images/poza1.jpg"
import Fade from "react-reveal/Fade"

class InfoComponent extends Component {
  render() {
    return (

      <article>
        <div className="titlu">
          <h1>Despre mine</h1>
          <div className="backgroundLine"></div>
        </div>

        <div className="continut">
        <Fade left cascade>
        <div className="poza1">
          <img src={image} alt="poza1"  ></img>
          <p>
          ”<i>Pe oameni îi tulbură nu ce se întâmplă, ci gândurile lor legate de ce se întâmplă.</i>” - <b>Epictet</b>
          </p>
        </div>
        </Fade>
        <div className="text">
          

          <p>
          Bună! <br/> Alexandra este numele meu și sunt psihoterapeut acreditat în <i>Hipnoză Clinică și Terapie Ericksoniană</i>, membru în Colegiul Psihologilor din România, am urmat cursurile a două mastere din cadrul Universității Alexandru Ioan Cuza din Iași, Facultatea de Psihologie și Științe ale Educației, obținând titlurile de masterat în <i>Psihologie Clinică</i> respectiv masterat în <i>Relații Umane și Comunicare</i>. 
          </p>

          <p>
          Experiența mea ca psiholog este variată și complexă deoarece am lucrat atât în spital, centre de copii, și trecând granițele spațiului românesc am ocazia să colaborez și cu pacienți străini. Perspectiva terapeutică pe care îndrăznesc să v-o propun este o abordare eclectică. Această perspectivă îmi oferă posibilitatea ca din toate școlile de psihoterapie existente să personalizez intervenția terapeutică după caracteristicile și nevoile pacientului.
          </p>

          <p>
          Ajungând la partea mai plăcută, pentru a descriere ce este psihoterapia, unui om pasionat de dans, i-as spune că terapia este un dans, unde ambii parteneri colaborează și se lasă purtați de ritmurile muzicii, condus de pașii celuilalt, fără teamă, cu încrederea că fiecare căzătură reprezintă un motiv de a se ridica și mai sus. 
          </p>

          <p>
          Pentru mine, în calitate de psihoterapeut a face psihoterapie este un dar, un vis, o pasiune. Afirm că este un dar deoarece viața și oamenii au contribuit ca eu să ajung aici. Este un vis deoarece am visat să ajut oameni. Este o pasiune deoarece nu mă satur în a descoperi oameni și felul în care oamenii gândesc, percep, simt și se comportă. Pe lângă aceste trei aspecte psihoterapia înseamnă și <b>Responsabilitate</b>. 
          </p>

          <h4>
          Formări profesionale:
          </h4>
          

          <ul>
            <li>Facultatea de Psihologie și Științe ale Educației, Universitatea Alexandru Ioan Cuza, Iași</li>
            <li>Master în Psihologie clinică</li>
            <li>Master în Științe ale Educației</li>
            <li>Drept de liberă practică acordat de Colegiul Psihologilor din Romania</li>
            
          </ul>

          
        </div>

        
        </div>
      </article>
    )
  }
}

export default InfoComponent