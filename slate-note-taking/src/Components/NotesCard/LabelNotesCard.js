// function LabelNotesCard({ labeledNotesData }) {
//   const {
//     notesBgColor,
//     labelInputBoxValue,
//     textareaBoxValue,
//     inputTextTitleValue,
//     priorityRadioBoxValue,
//     noteCreationTime,
//   } = labeledNotesData;

//   return (
//     <div>
//       <div style={{ margin: "0.5rem" }}>
//         <div className="notes-card" style={{ backgroundColor: notesBgColor }}>
//           <h3 className="input-text-value"> {inputTextTitleValue}</h3>
//           <div
//             dangerouslySetInnerHTML={{ __html: textareaBoxValue }}
//             className="title"
//           />

//           <div className="chips-container">
//             <span className="material-icons notesmi chips">
//               label
//               <span className="label-text"> {labelInputBoxValue}</span>
//             </span>
//           </div>
//           <div className="chips-container">
//             <span className="material-icons notesmi chips">
//               priority_high
//               <span className="label-text"> {priorityRadioBoxValue}</span>
//             </span>
//           </div>
//           <sub> created at : {noteCreationTime} </sub>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LabelNotesCard;

import { Box, Text, Tag, VStack, HStack } from "@chakra-ui/react";

function LabelNotesCard({ labeledNotesData }) {
  const {
    notesBgColor,
    labelInputBoxValue,
    textareaBoxValue,
    inputTextTitleValue,
    priorityRadioBoxValue,
    noteCreationTime,
  } = labeledNotesData;

  return (
    <Box
      bg={notesBgColor}
      p={4}
      borderRadius="md"
      boxShadow="md"
      margin="0.5rem"
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
      </VStack>
    </Box>
  );
}

export default LabelNotesCard;
