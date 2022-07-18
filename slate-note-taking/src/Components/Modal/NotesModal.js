import { useNoteTakingContext } from "../../Context/NotetakingContext";
import { React, useState, Modal } from "../../Utils/CustomUtils";
import InputNotes from "../InputNotes/InputNotes";
import "./NotesModal.css";

function NotesModal() {
  const { isOpen, notesTakingFn } = useNoteTakingContext();
  function toggleModal() {
    notesTakingFn({ type: "NOTE_TAKING_MODAL", payload: !isOpen });
  }
  return (
    <div>
      <div onClick={toggleModal} className="">
        <span class="material-icons singlevideomi">note_add</span>
      </div>
      <Modal
        isOpen={!isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="modal"
      >
        <div className="modal-form">
          <InputNotes />
        </div>
        <button onClick={toggleModal} className="btn btn-close">
          X
        </button>
      </Modal>
    </div>
  );
}

export default NotesModal;
