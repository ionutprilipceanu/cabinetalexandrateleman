import React, { Component } from 'react'
import SeoComponentArticle from "..//..//components/SeoComponentArticle/SeoComponentArticle"
import NavBar from "..//../components/NavBar/NavBar"
import FooterBottom from "..//../components/FooterBottom/FooterBottom"
import "..//articole/style-edit.css"
import oglinda from "..//..//..//static/images/articole/oglinda.jpg"
import Fade from "react-reveal/Fade"

class Corpul extends Component {
  render() {
    return (
      <div> 
        <SeoComponentArticle/>
        <NavBar />
        <article>
          <div className="titluArticoleScrise">
            <h1>Cum se formează imaginea corporală negativă ?</h1>
            <div className="backgroundLineArticoleScrise"></div>
          </div>

          <div className="text-articole">
          
            <p>
              Oamenii nu se trezesc de la o zi la alta, spunând că aspectul lor este inadecvat. Imaginea corporală se dezvoltă gradual, începând încă din perioada copilăriei. Există studii care au descoperit insatisfacție a imaginii corporale, la copii cu vârsta de 4 ani. Există o serie de factori care sunt răspunzători în dezvoltarea imaginii corporale. Temperamentul, predispoziția genetică cât și atributele fizice reale, contribuie la dezvoltarea imaginii corporale.  
            </p>
            
            <p>
              Temperamentul este prezent încă de la naștere. Există copii care se nasc cu un temperament facil, este vorba de acei copii care dorm bine noaptea și acceptă ușor alimente noi în alimentație. Alți copii se nasc cu temperamente mai dificile. Aceștia plâng foarte mult, prezintă crize de irascibilitate, unii pot fi mai lenți în comportament iar alții mai anxioși sau inhibați în situații noi. Așa cum temperamentele dificile pot crește riscul de a dezvolta depresie și anxietate la fel pot contribui în dezvoltarea unei imagini corporale disfuncționale.  
            </p>

            <Fade bottom cascade>
              <div className="neascultare">
                <img src={oglinda} alt="oglinda"></img>
                  
              </div>
            </Fade>

            <p> 
              De cele mai multe ori copii moștenesc trăsăturile părinților. În viața cotidiană de câte ori nu auzim: ,,Este toată mamă-sa în picioare". Uitați-vă la ea ce fată zdravănă!" Imaginați-vă ce se întâmpă când Măriuca ajunge acasă și se măsoară în oglindă din toate unghiurile și constată că întradevăr moștenește fesele mamei ei! O perioadă critică în conturarea imaginii corporale este perioada pubertății. De cele mai multe ori în cazul fetelor unele zone precum coapsele și sânii se dezvoltă. În cazul băieților apar primele fire de păr facial. De la caz la caz acneea poate da bătăi de cap ambelor sexe. Aceste schimbări vizibile aduc la pachet și primele tachinări dintre adolescenți. Etichetarea venită din partea unui coleg de clasă poate fi mult mai dureroasă și stânjenitoare comparativ cu formele de alint ale unui părinte,  precum  ,,balenuța mea".  Experinețele stânjenitoare din sânul familiei și a grupului de prieteni pot contribui la dezvoltarea unei imagini corporale negative. 
            </p>

            <p>
              Mass-media contribuie la conturarea idealului de frumusețe. De obicei fetele aspiră la o siluetă și fizonomie precum păpușa Barbie iar băieții precum păpușa Ken. Imagini pe care și ,,vedetele" le promovează recurgând la tot felul de intervenții chirurgicale. Din dorința de a pierde în greutate pot apărea o seamă de probleme în alimentație. Anorexia și bulimia sunt principalele probleme legate de alimentație. Aceste două probleme de obicei vin la pachet cu probleme grave de sănătate. Organismul unei persoane anorectice poate ajunge să nu mai asimileze alimentele. Această problemă necesită spitalizare imediată în centre specializate în tratarea anorexiei. 
            </p>

            <p>
              Problemele psihologie asociate unei imagini corporale negative pot varia de la lipsa încrederii în sine ajung până la depresie. Relațiile sociale cât și cele de cuplu au de suferit. Intervenția psihologică în aceste cazuri este de lungă durată. Cu siguranță cunoașteți persoane care au slăbit considerabil dar ele se văd în continuare grase. Pe același sistem funcționează și persoanele cu o imagine corporală negativă. În loc de sfârșit vreau să vă spun o poveste!<br/> 
              <i>
                "A fost o dată ca niciodată o mașină. Era o mașină vioaie, obișnuia să colinde, să descopere, să călătorească indiferent de e noapte sau zi. Se bucura de fiecare călătorie, avea mereu un nou plan, o nouă aventură și mereu pusă pe șotii. Desigur fiind plină de energie se alimenta corespunzător. Totul părea un vis! Un vis care pur și simplu exista! Într-o zi pe când se afla la  răscrucea unui drum, neștiind pe unde să o ia, a zărit pentru prima dată o altă mașină. Se gândi că poate să o urmeze. Aceasta era mult mai mare decât ea. I se părea că lucește mult mai bine. Nu mai văzuse niciodată o astfel de mașină, atât de luxoasă. Apoi își dădu seama că ea nu este așa. Mare îi fu tristețea când s-a comparat cu acea mașină, astfel încât a hotărât să se întoarcă imediat acasă. Atât de dezamăgită fu, încât a refuzat să se mai alimenteze. Din acea zi mașina noastră deveni o mașinuță tristă și atât de obosită încât dormea indiferent de zi sau noapte..." 
              </i><br/>
              Povestea nu se termină aici, precum nici povestea ta nu se termină aici.... investind in tine, te invit să continui povestea, altfel! 
            </p>
            <p>
              <b>Nadia Gagnier, (2007) - </b> <i>Miroir, miroir...je n'aime pas mon corps!  </i>
            </p>
          
          </div>

        </article>
        <FooterBottom />
      </div>
    )
  }
}
export default Corpul
