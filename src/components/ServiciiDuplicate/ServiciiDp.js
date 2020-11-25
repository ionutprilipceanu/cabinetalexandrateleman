import React from 'react'
import { Card } from 'react-bootstrap'
import Fade from "react-reveal/Fade"
import "..//ServiciiDuplicate/ServiciiDp.css"
import FirstBtnDp from "../ServiciiDuplicate/FirstBtnDp"
import SecondBtnDp from "../ServiciiDuplicate/SecondBtnDp"
import ThirdBtnDp from "../ServiciiDuplicate/ThirdBtnDp"
import ForthBtnDp from "../ServiciiDuplicate/ForthBtnDp"

function ServiciiDp() {
  
  return (
    <div>
      <Fade bottom cascade>
          <div className="skillsContainerDp">
           
            <Card className="card-finalDp">
            
              
              <div className="Separator1">
              <Card className="carder_bodyDp">
                <Card.Body>
                  <Card.Subtitle className="cardSubtitleDp">Terapie individuală</Card.Subtitle>
                  <div className="bottomLineDp"></div>
                  <Card.Text className="cardTextDp">
                    Această formă de consiliere este gândită pentru a se lucra individual. Ca atare în acest cadru va participa doar terapeutul și pacientul...
                  </Card.Text>

                  <FirstBtnDp />

                </Card.Body>
              </Card>

              <Card className="carder_bodyDp">
                <Card.Body>
                  <Card.Subtitle className="cardSubtitleDp">Terapie de cuplu</Card.Subtitle>
                  <div className="bottomLineDp"></div>
                  <Card.Text className="cardTextDp">
                    Această formă de terapie are în prin plan reconcilierea cuplului, familiei și tot ce ține de problemele familiale întâlnite zi de zi...
                  </Card.Text>
                  
                  <SecondBtnDp />

                </Card.Body>
              </Card>
              </div>


              <div className="Separator2">
              <Card className="carder_bodyDp">
                <Card.Body>
                  <Card.Subtitle className="cardSubtitleDp">Terapie de grup</Card.Subtitle>
                  <div className="bottomLineDp"></div>
                  <Card.Text className="cardTextDp">
                    În cadrul acestei terapii vedeta este grupul. Participanții la terapie este format dintr-un grup de maxim 20 de persoane...
                  </Card.Text>

                  <ThirdBtnDp />

                </Card.Body>
              </Card>

              <Card className="carder_bodyDp">
                <Card.Body>
                  <Card.Subtitle className="cardSubtitleDp">Terapie online</Card.Subtitle>
                  <div className="bottomLineDp"></div>
                  <Card.Text className="cardTextDp">
                    Pentru că suntem în era vitezei, ne-am automatizat suficient de mult astfel încât să folosim orice resură aflată la dispoziția noastră...
                  </Card.Text>

                  <ForthBtnDp />

                </Card.Body>
              </Card>
              </div>
              

            </Card> 
          </div>
        </Fade>
    </div>
  )
}

export default ServiciiDp
