import React, {useState} from 'react'
import Modal from 'react-modal'
import Zoom from "react-reveal/Zoom";
import "..//ServiciiDuplicate/ForthBtnDp.css"
import pozaPatraDp from "..//ServiciiDuplicate/image/poza4.jpg"

 function ForthBtnDp() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div>
      <button className="btn-alls btn-gos"  onClick={() => setModalIsOpen(true)}>Citește mai mult</button>

        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} ariaHideApp={false} className="modalOpen">
          <Zoom>
            
            <h1 className="ModalTitle">Terapie online</h1>
            <p className="ModalText"> Pentru că suntem în era vitezei ne-am automatizat suficient astfel încât să folosim orice resură aflată la dispoziție. Deși sceptică la început în ceea ce privește terapia online după ce am văzut că funcționează am acceptat-o pur și simplu. Iată explicația faptului că omul este o fință adaptabilă! Terapia online funcționează! Ceea ce contează este motivația și resursele investite în terapie. În cadrul terapiei online se pot desfășura toate cele trei forme de terapie: individuală, de cuplu sau de grup. Nu uita, Investeș-n tine!<br/></p>

            <button onClick={() => setModalIsOpen(false)} className="CloseModal">X</button>

            <img src={pozaPatraDp} alt="pozaPrima" className="pozaEdit"></img>
          </Zoom>
        </Modal>
    </div>
  )
}
export default ForthBtnDp