// import { React, useEffect } from "../Utils/CustomUtils";
// import { useArchiveContext } from "../Context/IndexAllContext";
// import {
//   ArchiveNotesCard,
//   Footer,
//   Header,
//   Sidebar,
// } from "../Components/IndexAllComponents";
// import { getArchiveNotesFn } from "../Services/ArchiveNotesServices";

// function Archivespage() {
//   const { getArchivedNotes, notesArchiveFn } = useArchiveContext();

//   useEffect(() => {
//     getArchiveNotesFn(notesArchiveFn);
//   }, []);

//   return (
//     <div>
//       <Header />
//       <Sidebar />

//       <div>
//         {getArchivedNotes.length <= 0 ? (
//           <h1 className="header-text">
//             {" "}
//             No notes to display in archive page, add some !
//           </h1>
//         ) : (
//           <div className="notes-container" style={{ marginTop: "5rem" }}>
//             {getArchivedNotes.map((archivenotesdata) => (
//               <ArchiveNotesCard
//                 archivenotesdata={archivenotesdata}
//                 key={archivenotesdata._id}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Archivespage;

import { useEffect } from "react";
import { Box, Container, Flex, VStack, Heading, Text } from "@chakra-ui/react";
import { useArchiveContext } from "../Context/IndexAllContext";
import {
  ArchiveNotesCard,
  Footer,
  Header,
  Sidebar,
} from "../Components/IndexAllComponents";
import { getArchiveNotesFn } from "../Services/ArchiveNotesServices";

function Archivespage() {
  const { getArchivedNotes, notesArchiveFn } = useArchiveContext();

  useEffect(() => {
    getArchiveNotesFn(notesArchiveFn);
  }, [notesArchiveFn, getArchiveNotesFn]);

  return (
    <VStack spacing={0} align="stretch" height="100vh">
      <Header />
      <Flex flex={1} overflow="hidden">
        <Sidebar />
        <Container maxW="container.lg" flex={1} p={4} overflowY="auto">
          {getArchivedNotes.length <= 0 ? (
            <Box textAlign="center" mt={8}>
              <Heading as="h1" size="lg">
                No notes to display in the archive page, add some!
              </Heading>
            </Box>
          ) : (
            <VStack spacing={4} align="stretch">
              {getArchivedNotes.map((archivenotesdata) => (
                <ArchiveNotesCard
                  archivenotesdata={archivenotesdata}
                  key={archivenotesdata._id}
                />
              ))}
            </VStack>
          )}
        </Container>
      </Flex>
      <Footer />
    </VStack>
  );
}

export default Archivespage;
