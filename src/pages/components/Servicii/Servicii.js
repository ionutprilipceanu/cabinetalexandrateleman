import React from 'react'
import { Card } from 'react-bootstrap'
import Fade from "react-reveal/Fade"
import "..//Servicii/Servicii.css"
import FirstBtn from "..//Servicii/FirstBtn"
import SecondBtn from "..//Servicii/SecondBtn"
import ThirdBtn from "..//Servicii/ThirdBtn"
import ForthBtn from "..//Servicii/ForthBtn"

function Servicii() {

  return (
    <div>
      <Fade bottom cascade>
        <div className="skillsContainer">
          <Card.Title className="cardSkills">Servicii</Card.Title>
          <Card className="card-final">


            <div className="Separator1">
              <Card className="carder_body">
                <Card.Body>
                  <Card.Subtitle className="cardSubtitle">Terapie individuală</Card.Subtitle>
                  <div className="bottomLine"></div>
                  <Card.Text className="cardText">
                    Această formă de consiliere este gândită pentru a se lucra individual. Ca atare în acest cadru va participa doar terapeutul și pacientul...
                  </Card.Text>

                  <FirstBtn />

                </Card.Body>
              </Card>

              <Card className="carder_body">
                <Card.Body>
                  <Card.Subtitle className="cardSubtitle">Terapie de familie</Card.Subtitle>
                  <div className="bottomLine"></div>
                  <Card.Text className="cardText">
                    Această formă de terapie are în prin plan reconcilierea cuplului, familiei și tot ce ține de problemele familiale întâlnite zi de zi...
                  </Card.Text>

                  <SecondBtn />

                </Card.Body>
              </Card>
            </div>

            <div className="Separator2">
              <Card className="carder_body">
                <Card.Body>
                  <Card.Subtitle className="cardSubtitle">Terapie de grup</Card.Subtitle>
                  <div className="bottomLine"></div>
                  <Card.Text className="cardText">
                    În cadrul acestei terapii vedeta este grupul. Participanții la terapie este format dintr-un grup de maxim 20 de persoane...
                  </Card.Text>

                  <ThirdBtn />

                </Card.Body>
              </Card>

              <Card className="carder_body">
                <Card.Body>
                  <Card.Subtitle className="cardSubtitle">Terapie online</Card.Subtitle>
                  <div className="bottomLine"></div>
                  <Card.Text className="cardText">
                    Pentru că suntem în era vitezei, ne-am automatizat suficient de mult astfel încât să folosim orice resură aflată la dispoziția noastră...
                  </Card.Text>

                  <ForthBtn />

                </Card.Body>
              </Card>
            </div>

          </Card>
        </div>
      </Fade>
    </div>
  )
}

export default Servicii
