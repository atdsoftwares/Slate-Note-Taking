// import { useTrashNotesContext } from "../../Context/IndexAllContext";
// import {
//   deleteTrashedNotesFn,
//   restoreTrashedNotesFn,
// } from "../../Services/TrashNotesServices";

// function TrashNotesCard({ trashnotesdata }) {
//   const { notesTrashFn } = useTrashNotesContext();
//   const {
//     inputTextTitleValue,
//     priorityRadioBoxValue,
//     textareaBoxValue,
//     notesBgColor,
//     noteCreationTime,
//     labelInputBoxValue,
//     _id,
//   } = trashnotesdata;

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
//         <sub> created at : {noteCreationTime} </sub>
//         <div className="action-icons">
//           <span
//             className="material-icons notesmi"
//             onClick={() => deleteTrashedNotesFn(_id, notesTrashFn)}
//           >
//             delete
//           </span>
//           <span
//             className="material-icons notesmi"
//             onClick={() => restoreTrashedNotesFn(_id, notesTrashFn)}
//           >
//             restore_from_trash
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default TrashNotesCard;

import {
  Box,
  Text,
  Tag,
  HStack,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { DeleteIcon, RepeatIcon } from "@chakra-ui/icons";
import { useTrashNotesContext } from "../../Context/IndexAllContext";
import {
  deleteTrashedNotesFn,
  restoreTrashedNotesFn,
} from "../../Services/TrashNotesServices";

function TrashNotesCard({ trashnotesdata }) {
  const { notesTrashFn } = useTrashNotesContext();
  const {
    inputTextTitleValue,
    priorityRadioBoxValue,
    textareaBoxValue,
    notesBgColor,
    noteCreationTime,
    labelInputBoxValue,
    _id,
  } = trashnotesdata;

  const cardBgColor = useColorModeValue(notesBgColor, "gray.700");

  return (
    <Box
      bg={cardBgColor}
      p={4}
      borderRadius="md"
      boxShadow="md"
      m={2}
      width={"20%"}
    >
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        {inputTextTitleValue}
      </Text>

      <Box dangerouslySetInnerHTML={{ __html: textareaBoxValue }} mb={2} />

      <HStack spacing={2} mb={2}>
        <Tag colorScheme="blue">
          <span className="material-icons">label</span>
          {labelInputBoxValue}
        </Tag>
        <Tag colorScheme="red">
          <span className="material-icons">priority_high</span>
          {priorityRadioBoxValue}
        </Tag>
      </HStack>

      <Text fontSize="sm" color="gray.500" mb={2}>
        Created at: {noteCreationTime}
      </Text>

      <HStack spacing={4}>
        <IconButton
          icon={<DeleteIcon />}
          aria-label="Delete Note"
          onClick={() => deleteTrashedNotesFn(_id, notesTrashFn)}
        />
        <IconButton
          icon={<RepeatIcon />}
          aria-label="Restore Note"
          onClick={() => restoreTrashedNotesFn(_id, notesTrashFn)}
        />
      </HStack>
    </Box>
  );
}

export default TrashNotesCard;
