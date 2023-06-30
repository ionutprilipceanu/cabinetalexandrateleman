import React, { useState } from "react"
import Modal from "react-modal"
// import Zoom from "react-reveal/Zoom";
import "..//Servicii/SecondBtn.css"
import pozaDouaDp from "..//ServiciiDuplicate/image/poza2.jpg"

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
        {/* <Zoom> */}
        <h1 className="ModalTitle">Terapie de cuplu</h1>
        <p className="ModalText">
          {" "}
          Această formă de terapie are în prin plam reconcilierea cuplului și a
          familiei, ca atare participanții la terapie vor fi cuplul, cât și
          copiii, de la caz la caz. Durata terapiei poate oscila între 60 minute
          și 1h30 minute. Strategia de intervenție va fi personalizată în
          funcție de particularitățile cuplului.
          <br />
        </p>

        <button onClick={() => setModalIsOpen(false)} className="CloseModal">
          X
        </button>

        <img src={pozaDouaDp} alt="pozaPrima" className="pozaEdit"></img>
        {/* </Zoom> */}
      </Modal>
    </div>
  )
}
export default SecondBtn
