// import { React } from "../../Utils/CustomUtils";
// import { useNoteTakingContext } from "../../Context/IndexAllContext";

// function Filter() {
//   const { notesTakingFn, priorityLabel } = useNoteTakingContext();

//   return (
//     <div>
//       <div className="flex justify-center items-center absolute top-28 left-64">
//         <div className="priority">
//           <label for="priority" className="flex justify-center items-center">
//             <b>Priority</b>
//             <span className="material-icons">tag</span>:
//           </label>
//           <select
//             name="priority"
//             onChange={(e) =>
//               notesTakingFn({ type: "PRIORITY_LABEL", payload: e.target.value })
//             }
//           >
//             <option value="All" onChange={() => notesTakingFn({ type: "All" })}>
//               All
//             </option>
//             <option value="top" onChange={() => notesTakingFn({ type: "top" })}>
//               Top
//             </option>
//             <option
//               value="medium"
//               onChange={() => notesTakingFn({ type: "medium" })}
//             >
//               Medium
//             </option>
//             <option value="low" onChange={() => notesTakingFn({ type: "low" })}>
//               Low
//             </option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Filter;

import { Select, Box, Flex, Icon, Text } from "@chakra-ui/react";
import { MdLabel } from "react-icons/md";
import { useNoteTakingContext } from "../../Context/IndexAllContext";

function Filter() {
  const { notesTakingFn } = useNoteTakingContext();

  return (
    <Flex
      justify="center"
      align="center"
      position="absolute"
      top="28"
      left="64"
    >
      <Box>
        <Flex align="center">
          <Text fontWeight="bold" mr={2}>
            Priority
          </Text>
          <Icon as={MdLabel} />
        </Flex>
        <Select
          onChange={(e) =>
            notesTakingFn({ type: "PRIORITY_LABEL", payload: e.target.value })
          }
        >
          <option value="All">All</option>
          <option value="top">Top</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </Select>
      </Box>
    </Flex>
  );
}

export default Filter;
