// import { React, Link } from "../../Utils/CustomUtils";
// import { useNoteTakingContext } from "../../Context/IndexAllContext";

// import { postArchiveNotesFn } from "../../Services/ArchiveNotesServices";
// import { postNotesToTrashFn } from "../../Services/TrashNotesServices";
// import { editData } from "../../Services/NoteTakingServices";
// function Notescard({ notesData }) {
//   const { notesTakingFn } = useNoteTakingContext();
//   const {
//     inputTextTitleValue,
//     priorityRadioBoxValue,
//     textareaBoxValue,
//     notesBgColor,
//     noteCreationTime,
//     labelInputBoxValue,
//     _id,
//     noteUpdatedAt,
//   } = notesData;

//   return (
//     <div style={{ margin: "0.5rem" }}>
//       <div className="notes-card" style={{ backgroundColor: notesBgColor }}>
//         <h3 className="input-text-value"> {inputTextTitleValue}</h3>
//         <div
//           dangerouslySetInnerHTML={{ __html: textareaBoxValue }}
//           className="title"
//         />

//         <div className="chips-container">
//           <span className="material-icons notesmi chips">
//             label
//             <span className="label-text"> {labelInputBoxValue}</span>
//           </span>
//         </div>
//         <div className="chips-container">
//           <span className="material-icons notesmi chips">
//             priority_high
//             <span className="label-text"> {priorityRadioBoxValue}</span>
//           </span>
//         </div>
//         <div className="note-timing">
//           <sub> created at : {noteCreationTime} </sub>
//           <sub> updated at : {noteUpdatedAt} </sub>{" "}
//         </div>

//         <div className="action-icons">
//           <Link to={`/Edit/${_id}`}>
//             <span
//               className="material-icons notesmi"
//               onClick={() =>
//                 editData(
//                   _id,
//                   labelInputBoxValue,
//                   textareaBoxValue,
//                   priorityRadioBoxValue,
//                   inputTextTitleValue,
//                   notesBgColor
//                 )
//               }
//             >
//               edit{" "}
//             </span>
//           </Link>
//           <span
//             className="material-icons notesmi"
//             onClick={() => postNotesToTrashFn(_id, notesData, notesTakingFn)}
//           >
//             delete{" "}
//           </span>
//           <span
//             className="material-icons notesmi"
//             onClick={() => postArchiveNotesFn(_id, notesData, notesTakingFn)}
//           >
//             archive{" "}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Notescard;

import {
  Box,
  Text,
  Tag,
  HStack,
  VStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { EditIcon, DeleteIcon, ArchiveIcon } from "@chakra-ui/icons";
import { useNoteTakingContext } from "../../Context/IndexAllContext";
import { postArchiveNotesFn } from "../../Services/ArchiveNotesServices";
import { postNotesToTrashFn } from "../../Services/TrashNotesServices";
import { editData } from "../../Services/NoteTakingServices";
import { IoMdArchive } from "react-icons/io";
function Notescard({ notesData }) {
  const { notesTakingFn } = useNoteTakingContext();
  const {
    inputTextTitleValue,
    priorityRadioBoxValue,
    textareaBoxValue,
    notesBgColor,
    noteCreationTime,
    labelInputBoxValue,
    _id,
    noteUpdatedAt,
  } = notesData;

  return (
    <Box bg={notesBgColor} p={4} borderRadius="md" boxShadow="md" m={2}>
      <VStack align="start" spacing={4}>
        <Text fontSize="lg" fontWeight="bold">
          {inputTextTitleValue}
        </Text>

        <Box dangerouslySetInnerHTML={{ __html: textareaBoxValue }} />

        <HStack spacing={2}>
          <Tag colorScheme="blue">
            <span className="material-icons">label</span>
            {labelInputBoxValue}
          </Tag>
          <Tag colorScheme="red">
            <span className="material-icons">priority_high</span>
            {priorityRadioBoxValue}
          </Tag>
        </HStack>

        <HStack spacing={4} fontSize="sm" color="gray.500">
          <Text>Created at: {noteCreationTime}</Text>
          <Text>Updated at: {noteUpdatedAt}</Text>
        </HStack>

        <HStack spacing={4}>
          <Link to={`/Edit/${_id}`}>
            <IconButton
              icon={<EditIcon />}
              aria-label="Edit Note"
              onClick={() =>
                editData(
                  _id,
                  labelInputBoxValue,
                  textareaBoxValue,
                  priorityRadioBoxValue,
                  inputTextTitleValue,
                  notesBgColor
                )
              }
            />
          </Link>
          <IconButton
            icon={<DeleteIcon />}
            aria-label="Delete Note"
            onClick={() => postNotesToTrashFn(_id, notesData, notesTakingFn)}
          />

          <IoMdArchive
            aria-label="Archive Note"
            onClick={() => postArchiveNotesFn(_id, notesData, notesTakingFn)}
          />
        </HStack>
      </VStack>
    </Box>
  );
}

export default Notescard;
