import React, { useState } from "react"
import Modal from "react-modal"
import Reveal from "..//Reveal"
import "..//Servicii/ThirdBtn.css"
import pozaTreia from "..//Servicii/image/poza3.jpg"

function ThirdBtn() {
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
          <h1 className="ModalTitle">Terapie de grup </h1>
          <p className="ModalText">
            {" "}
            În cadrul acestei terapii vedeta este grupul. Participanții la
            terapie este format dintr-un grup de aproximativ 10-20 de persoane.
            Această formă de terapie este potrivită pentru foarte multe aspecte,
            recunoscute la nivelul dezvoltării umane. În ultima vreme se
            vorbește foarte des despre inteligență emoțională. Ei bine această
            inteligență emoțională se poate dezvolta cu ajutorul și datorită
            grupului. De ce? Și am să-ți dau doar un exemplu minor: Ai putea să
            te cunoști prin ochii celuilalt fără să privești prin ochii lui?{" "}
            <br />
          </p>

          <img src={pozaTreia} alt="pozaPrima" className="pozaEdit"></img>
        </Reveal>
      </Modal>
    </div>
  )
}
export default ThirdBtn
