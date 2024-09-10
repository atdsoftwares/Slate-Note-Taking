// import { useNoteTakingContext } from "../../Context/NotetakingContext";
// import { React, useState, Modal } from "../../Utils/CustomUtils";
// import InputNotes from "../InputNotes/InputNotes";

// function NotesModal() {
//   const [isOpen, setIsOpen] = useState(true);
//   function toggleModal() {
//     setIsOpen(!isOpen);
//   }

//   return (
//     <div>
//       <div onClick={toggleModal} className="cursor-pointer">
//         <span class="material-icons singlevideomi">note_add</span>

//         <Modal
//           isOpen={!isOpen}
//           setIsOpen={setIsOpen}
//           onRequestClose={toggleModal}
//           contentLabel="My dialog"
//           className="modal"
//         >
//           <div className="modal-form">
//             <InputNotes
//             // toggleModal={toggleModal}
//             />
//           </div>
//           {/* <button onClick={toggleModal} className="btn btn-close">
//             X
//           </button> */}
//         </Modal>
//       </div>{" "}
//     </div>
//   );
// }

// export default NotesModal;

import { useNoteTakingContext } from "../../Context/NotetakingContext";
import { React, useState } from "../../Utils/CustomUtils";
import { Button, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import InputNotes from "../InputNotes/InputNotes";

function NotesModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <div>
      <IconButton
        icon={<AddIcon />}
        aria-label="Add Note"
        onClick={onOpen}
        variant="outline"
        colorScheme="teal"
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputNotes />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default NotesModal;
