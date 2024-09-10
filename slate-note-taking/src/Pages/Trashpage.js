// import { useEffect } from "../Utils/CustomUtils";
// import { useTrashNotesContext } from "../Context/IndexAllContext";
// import {
//   Footer,
//   Header,
//   Sidebar,
//   TrashNotesCard,
// } from "../Components/IndexAllComponents";
// import { getTrashedNotesFn } from "../Services/TrashNotesServices";

// function Trashpage() {
//   const { getTrashedNotes, notesTrashFn } = useTrashNotesContext();

//   useEffect(() => {
//     getTrashedNotesFn(notesTrashFn);
//   }, []);

//   return (
//     <div>
//       <Header />
//       <Sidebar />
//       <div>
//         {getTrashedNotes && getTrashedNotes.length <= 0 ? (
//           <h1 className="header-text">
//             No notes to display in trash page, add some ..!
//           </h1>
//         ) : (
//           <div className="notes-container" style={{ marginTop: "5rem" }}>
//             {getTrashedNotes &&
//               getTrashedNotes.map((trashnotesdata) => (
//                 <TrashNotesCard
//                   trashnotesdata={trashnotesdata}
//                   key={trashnotesdata._id}
//                 />
//               ))}
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Trashpage;

import React, { useEffect } from "react";
import { Flex, Box, VStack, Text } from "@chakra-ui/react";
import {
  Footer,
  Header,
  Sidebar,
  TrashNotesCard,
} from "../Components/IndexAllComponents";
import { useTrashNotesContext } from "../Context/IndexAllContext";
import { getTrashedNotesFn } from "../Services/TrashNotesServices";

function Trashpage() {
  const { getTrashedNotes, notesTrashFn } = useTrashNotesContext();

  useEffect(() => {
    getTrashedNotesFn(notesTrashFn);
  }, [notesTrashFn]);

  return (
    <VStack spacing={0} align="stretch" height="100vh">
      <Header />
      <Flex flex={1} overflow="hidden">
        <Sidebar />
        <Box flex={1} p={4} overflowY="auto">
          <Box mt={4}>
            {getTrashedNotes && getTrashedNotes.length === 0 ? (
              <Text textAlign="center" fontSize="lg" color="gray.500">
                No notes to display in trash page, add some..!
              </Text>
            ) : (
              <VStack spacing={4}>
                {getTrashedNotes.map((trashnotesdata) => (
                  <TrashNotesCard
                    key={trashnotesdata._id}
                    trashnotesdata={trashnotesdata}
                  />
                ))}
              </VStack>
            )}
          </Box>
        </Box>
      </Flex>
      <Footer />
    </VStack>
  );
}

export default Trashpage;
