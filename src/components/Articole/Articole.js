import React, { Component } from 'react'
import "./Articole.css"
import { Card, Button } from 'react-bootstrap'
import pierderi from "..//..//..//static/images/articole/pierderi.jpg"
import neascultare from "..//..//..//static/images/articole/neascultare.jpg"
import oglinda from "..//..//..//static/images/articole/oglinda.jpg"
import prostia from "..//..//..//static/images/articole/prostia.jpg"
import stres from "..//..//..//static/images/articole/stres.jpg"
import Link from 'gatsby-link';


import Fade from "react-reveal/Fade"

class ServiciiComponent extends Component {
  render() {
    return (

      <article>
        
        <div className="titluArticole">
          <h1>Articole</h1>
          <div className="backgroundLineArticole"></div>
        </div>

        <Fade>
          <div className="cardStyle">

            <Card className="card-Container" style={{ width: '20rem'}}>
              <Card.Img variant="top" src={neascultare} />
              <Card.Body>
                <Card.Title className="title-Card-title">Ascultă-mă ca să te-ascult</Card.Title>
                  <Card.Text>
                    Te-ai întrebat vreodată dacă ești un bun ascultător? Ce anume face diferența dintre un bun ascultător și un  ascultător jalnic? 
                  </Card.Text>
                  <Button variant="dark"><Link 
                    to="/articole/ascultarea/" 
                    className="link-articole" 
                  >  Citește mai mult </Link>
                  </Button>
              </Card.Body>
            </Card>
            
            <Card className="card-Container" style={{ width: '20rem'}}>
              <Card.Img variant="top" src={prostia} />
              <Card.Body>
                <Card.Title className="title-Card-title">Cum să tolerăm prostia?</Card.Title>
                  <Card.Text>
                  Plecând de la binele cunoscut proverb românesc care spune ,,Prostia este omenească" putem înțelege foarte multe lucruri. 
                  </Card.Text>
                  <Button variant="dark"><Link 
                    to="/articole/prostia/" 
                    className="link-articole" 
                  >  Citește mai mult </Link>
                  </Button>
              </Card.Body>
            </Card>

          </div>

          <div className="cardStyle">

            <Card className="card-Container" style={{ width: '20rem'}}>
              <Card.Img variant="top" src={pierderi} />
              <Card.Body>
                <Card.Title className="title-Card-title">Durerea cauzată de pierderi</Card.Title>
                  <Card.Text>
                  Viața normală este o viață cu probleme".  Aceasta este fraza cu care mentorul meu obișnuia să înceapă un discurs. 
                  </Card.Text>
                  <Button variant="dark"><Link 
                    to="/articole/pierderea/" 
                    className="link-articole" 
                  >  Citește mai mult </Link>
                  </Button>
              </Card.Body>
            </Card>

          </div>

          <div className="cardStyle">

            <Card className="card-Container" style={{ width: '20rem'}}>
              <Card.Img variant="top" src={oglinda} />
              <Card.Body>
                <Card.Title className="title-Card-title">Imaginea corporală negativă</Card.Title>
                  <Card.Text>
                  Oamenii nu se trezesc de la o zi la alta, spunând că aspectul lor este inadecvat. Imaginea corporală se dezvoltă gradual.
                  </Card.Text>
                  <Button variant="dark"><Link 
                    to="/articole/corpul/" 
                    className="link-articole" 
                  >  Citește mai mult </Link>
                  </Button>
              </Card.Body>
            </Card>

            <Card className="card-Container" style={{ width: '20rem'}}>
              <Card.Img variant="top" src={stres} />
              <Card.Body>
                <Card.Title className="title-Card-title">De la stres la psihosomatizare</Card.Title>
                  <Card.Text>
                  Trăim în era vitezei! Dezvoltarea societății prin schimbarea rolurilor pune presiune atât pe femei cât și pe bărbați. 
                  </Card.Text>
                  <Button variant="dark"><Link 
                    to="/articole/stresul/" 
                    className="link-articole" 
                  >  Citește mai mult </Link>
                  </Button>
              </Card.Body>
            </Card>
          </div>
        </Fade>
      </article>
    )
  }
}

export default ServiciiComponent