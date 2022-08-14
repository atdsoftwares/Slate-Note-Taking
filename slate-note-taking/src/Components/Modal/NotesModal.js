import { useNoteTakingContext } from "../../Context/NotetakingContext";
import { React, useState, Modal } from "../../Utils/CustomUtils";
import InputNotes from "../InputNotes/InputNotes";
import "./NotesModal.css";

function NotesModal() {
  const [isOpen, setIsOpen] = useState(true);
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div onClick={toggleModal} className="">
        <span class="material-icons singlevideomi">note_add</span>
      </div>
      <Modal
        isOpen={!isOpen}
        setIsOpen={setIsOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="modal"
      >
        <div className="modal-form">
          <InputNotes toggleModal={toggleModal} />
        </div>
        <button onClick={toggleModal} className="btn btn-close">
          X
        </button>
      </Modal>
    </div>
  );
}

export default NotesModal;
