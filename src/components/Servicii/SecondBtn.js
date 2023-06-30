import React, { useState } from "react"
import Modal from "react-modal"
import Reveal from "..//Reveal"
import "..//Servicii/SecondBtn.css"
import pozaDoua from "..//Servicii/image/poza2.jpg"

function SecondBtn() {
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
          <h1 className="ModalTitle">Terapie de cuplu</h1>
          <p className="ModalText">
            {" "}
            Această formă de terapie are în prim plan reconcilierea cuplului și
            a familiei, ca atare participanții la terapie vor fi cuplul, cât și
            copiii, de la caz la caz. Durata terapiei poate oscila între 60
            minute și 1h30 minute. Strategia de intervenție va fi personalizată
            în funcție de particularitățile cuplului.
            <br />
          </p>

          <img src={pozaDoua} alt="pozaPrima" className="pozaEdit"></img>
        </Reveal>
      </Modal>
    </div>
  )
}
export default SecondBtn
