// import { useArchiveContext } from "../../Context/IndexAllContext";
// import {
//   deleteArchiveNotesFn,
//   restoreArchiveNotesFn,
// } from "../../Services/ArchiveNotesServices";

// function ArchiveNotesCard({ archivenotesdata }) {
//   const { notesArchiveFn } = useArchiveContext();
//   const {
//     inputTextTitleValue,
//     priorityRadioBoxValue,
//     textareaBoxValue,
//     notesBgColor,
//     noteCreationTime,
//     labelInputBoxValue,
//     _id,
//   } = archivenotesdata;

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
//             onClick={() => restoreArchiveNotesFn(_id, notesArchiveFn)}
//           >
//             unarchive
//           </span>
//           <span
//             className="material-icons notesmi"
//             onClick={() => deleteArchiveNotesFn(_id, notesArchiveFn)}
//           >
//             delete
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ArchiveNotesCard;

import { useArchiveContext } from "../../Context/IndexAllContext";
import {
  deleteArchiveNotesFn,
  restoreArchiveNotesFn,
} from "../../Services/ArchiveNotesServices";
import { Box, Text, Tag, IconButton, HStack, VStack } from "@chakra-ui/react";
import { DeleteIcon, RepeatIcon } from "@chakra-ui/icons";

function ArchiveNotesCard({ archivenotesdata }) {
  const { notesArchiveFn } = useArchiveContext();
  const {
    inputTextTitleValue,
    priorityRadioBoxValue,
    textareaBoxValue,
    notesBgColor,
    noteCreationTime,
    labelInputBoxValue,
    _id,
  } = archivenotesdata;

  return (
    <Box
      bg={notesBgColor}
      p={4}
      borderRadius="md"
      boxShadow="md"
      margin="0.5rem"
      width="25%"
    >
      <VStack align="start" spacing={4}>
        <Text fontSize="lg" fontWeight="bold">
          {inputTextTitleValue}
        </Text>

        <Box dangerouslySetInnerHTML={{ __html: textareaBoxValue }} />

        <HStack spacing={2}>
          <Tag colorScheme="blue" size="sm">
            Label: {labelInputBoxValue}
          </Tag>
          <Tag colorScheme="red" size="sm">
            Priority: {priorityRadioBoxValue}
          </Tag>
        </HStack>

        <Text fontSize="sm" color="gray.500">
          Created at: {noteCreationTime}
        </Text>

        <HStack spacing={4}>
          <IconButton
            icon={<RepeatIcon />}
            aria-label="Restore"
            size="sm"
            onClick={() => restoreArchiveNotesFn(_id, notesArchiveFn)}
          />
          <IconButton
            icon={<DeleteIcon />}
            aria-label="Delete"
            size="sm"
            onClick={() => deleteArchiveNotesFn(_id, notesArchiveFn)}
          />
        </HStack>
      </VStack>
    </Box>
  );
}

export default ArchiveNotesCard;
