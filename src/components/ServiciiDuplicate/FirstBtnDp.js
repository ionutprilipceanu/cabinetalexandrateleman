import React, { useState } from "react"
import Modal from "react-modal"
import Reveal from "..//Reveal"
import "..//ServiciiDuplicate/FirstBtnDp.css"
import pozaPrimaDp from "..//ServiciiDuplicate/image/poza1.jpg"

function FirstBtn() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div>
      <button className="btn-alls btn-gos" onClick={() => setModalIsOpen(true)}>
        Citește mai mult
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        ariaHideApp={false}
        className="modalOpen"
      >
        <button onClick={() => setModalIsOpen(false)} className="CloseModal">
          X
        </button>
        <Reveal>
          <h1 className="ModalTitle">Terapie individuală</h1>
          <p className="ModalText">
            {" "}
            După cum am spus și mai devreme, această formă de terapie este
            gândită pentru a se lucra individual. Ca atare în acest cadru va
            participa doar terapeutul și pacientul. Este o terapie indicată
            pentru numeroase probleme sau nevoi, care pot fi remediate, precum:
            atacul de panică, anxietatea, fobii, depresie, traumă și pierderi,
            probleme de comunicare, dezvoltarea personală etc. Durata ședinței
            este de 60 minute.
            <br />
          </p>

          <img src={pozaPrimaDp} alt="pozaPrima" className="pozaEdit"></img>
        </Reveal>
      </Modal>
    </div>
  )
}
export default FirstBtn
