import React, { Component } from 'react'
import SeoComponent from "..//..//components/SeoComponent/SeoComponent"
import NavBar from "..//../components/NavBar/NavBar"
import FooterBottom from "..//../components/FooterBottom/FooterBottom"
import "..//articole/style-edit.css"
import prostia from "..//..//..//static/images/articole/prostia.jpg"
import Fade from "react-reveal/Fade"

class Prostia extends Component {
  render() {
    return (
      <div> 
        <SeoComponent/>
        <NavBar />
        <article>
          <div className="titluArticoleScrise">
            <h1>Cum să tolerăm prostia?</h1>
            <div className="backgroundLineArticoleScrise"></div>
          </div>

          <div className="text-articole">
          
            <p>
              Plecând de la binele cunoscut proverb românesc care spune ,,Prostia este omenească" putem înțelege foarte multe lucruri. În primul rând putem înțelege că prostia este un efect cauzat de om. În al doilea rând înțelegem că omul stabilește ce e prostie și ce nu e prostie. În al treilea rând putem înțelege că prostia sălășluiește printre oameni. Cu alte cuvinte poate exista între două persoane sau între cel puțin două repere dintre care unul este om. Bineînțeles omul stabilește când e prostie și când nu e. 
            </p>
            
            <p>
              Dar ce se întâmplă atunci când prin introspecție ajungem la un alt răspuns, la un alt adevăr și emitem reflecții precum <i>"Ce prost am fost!"</i>, așadar uneori prostia poate apărea doar prin intermediul propriilor reflecții, la nivel individual fără a fi nevoie de un al doilea participant. Mărturisesc faptul că mult timp am suferit din cauza prostiei. Din cauza faptului că nu puteam tolera prostia. Aceea prostie văzută la ceilalți prin ochii mei. Cândva o prietenă m-a întrebat dacă o carte ne poate ajuta să trecem peste o anumită problemă. 
            </p>

            <Fade bottom cascade>
              <div className="neascultare">
                <img src={prostia} alt="prostia"></img>
                  
              </div>
            </Fade>

            <p> 
              Acum realizez că  raspunsul potrivit era da, poate. O carte bună precum ,,Despre inimă și alte eseuri" a lui Andrei Pleșu, poate! Capitolul patru din această carte mi-a domolit revolta asupra prostiei. Cum altfel să se fi întâmplat când chiar Pleșu, afirma că prostia există pur și simplu, indiferent de nivelul educației sau al inteligenței, diferența o face doar nivelul de manifestare. Cum o fi prostia în cazul intelectualilor comparativ cu prostia angajaților de la drumuri și poduri?   O fi mai mare, o fi mai mică? Despre inimă și alte eseuri, o carte care te îmbie la reflecție, la înțelegere și acceptare. <br/>
              Citește, învață, acceptă, și nu uita  <br/>
              <i>Investește-n tine! </i> 
            </p>
            
            <p>
              <b>Plesu, A. (2017). -</b> <i>Despre inimă și alte eseuri </i>Humanitas SA.
            </p>
          
          </div>
        </article>
        <FooterBottom />
      </div>
    )
  }
}
export default Prostia
