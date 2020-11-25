import React, { Component } from 'react'
import "./Articole.css"
import { Card, Button } from 'react-bootstrap'
import decor from "..//..//..//static/images/img-cover.jpg"


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
            <Card style={{ width: '18rem', margin: '5%' }}>
              <Card.Img variant="top" src={decor} />
              <Card.Body>
                <Card.Title>Durerea cauzată de pierderi</Card.Title>
                  <Card.Text>
                  "Viața normală este o viață cu probleme".  Aceasta este fraza cu care mentorul meu obișnuia să înceapă un discurs. 
                  </Card.Text>
                <Button variant="dark">Citește mai mult</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin: '5%' }}>
              <Card.Img variant="top" src={decor} />
              <Card.Body>
                <Card.Title>Ascultă-mă ca să te-ascult</Card.Title>
                  <Card.Text>
                  Te-ai întrebat vreodată dacă ești un bun ascultător? Ce anume face diferența dintre un bun ascultător și un  ascultător jalnic? 
                  </Card.Text>
                <Button variant="dark">Citește mai mult</Button>
              </Card.Body>
            </Card>
            
            <Card style={{ width: '18rem', margin: '5%' }}>
              <Card.Img variant="top" src={decor} />
              <Card.Body>
                <Card.Title>Cum să tolerăm prostia?</Card.Title>
                  <Card.Text>
                  Plecând de la binele cunoscut proverb românesc care spune ,,Prostia este omenească" putem înțelege foarte multe lucruri. 
                  </Card.Text>
                <Button variant="dark">Citește mai mult</Button>
              </Card.Body>
            </Card>

          </div>

          <div className="cardStyle">

            <Card style={{ width: '18rem', margin: '5%' }}>
              <Card.Img variant="top" src={decor} />
              <Card.Body>
                <Card.Title>Cum se formează imaginea corporală negativă ?</Card.Title>
                  <Card.Text>
                  Oamenii nu se trezesc de la o zi la alta, spunând că aspectul lor este inadecvat. Imaginea corporală se dezvoltă gradual, începând încă din perioada copilăriei. 
                  </Card.Text>
                <Button variant="dark">Citește mai mult</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin: '5%' }}>
              <Card.Img variant="top" src={decor} />
              <Card.Body>
                <Card.Title>De la stres la psihosomatizare</Card.Title>
                  <Card.Text>
                  Trăim în era vitezei! Dezvoltarea societății prin schimbarea rolurilor pune presiune atât pe femei cât și pe bărbați. 
                  </Card.Text>
                <Button variant="dark">Citește mai mult</Button>
              </Card.Body>
            </Card>
          </div>
        </Fade>
      </article>
    )
  }
}

export default ServiciiComponent