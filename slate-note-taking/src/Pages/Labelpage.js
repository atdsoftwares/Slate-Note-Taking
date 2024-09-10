// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Footer, Header, Sidebar } from "../Components/IndexAllComponents";
// import LabelNotesCard from "../Components/NotesCard/LabelNotesCard";
// import { useNoteTakingContext } from "../Context/NotetakingContext";
// import { getNotesDataFromAPIFn } from "../Services/NoteTakingServices";

// function Labelpage() {
//   const { notesTakingFn, getNotesData, priorityData } = useNoteTakingContext();
//   console.log(
//     "🚀 ~ file: Labelpage.js ~ line 10 ~ Labelpage ~ priorityData",
//     priorityData
//   );

//   const params = useParams();
//   console.log("🚀 ~ file: Labelpage.js ~ line 12 ~ Labelpage ~ params", params);

//   const labeledData = priorityData.filter(
//     (f) => f.labelInputBoxValue === params.label
//   );

//   useEffect(() => {
//     getNotesDataFromAPIFn(notesTakingFn);
//   }, []);

//   return (
//     <div>
//       <Header />
//       <Sidebar />
//       <div className="notes-container" style={{ marginTop: "5rem" }}>
//         {labeledData &&
//           labeledData.map((labeledNotesData) => (
//             <LabelNotesCard
//               key={labeledNotesData._id}
//               labeledNotesData={labeledNotesData}
//             />
//           ))}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Labelpage;
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Flex, Box, VStack } from "@chakra-ui/react";
import { Footer, Header, Sidebar } from "../Components/IndexAllComponents";
import LabelNotesCard from "../Components/NotesCard/LabelNotesCard";
import { useNoteTakingContext } from "../Context/NotetakingContext";
import { getNotesDataFromAPIFn } from "../Services/NoteTakingServices";

function Labelpage() {
  const { notesTakingFn, getNotesData, priorityData } = useNoteTakingContext();
  const params = useParams();

  const labeledData = priorityData.filter(
    (f) => f.labelInputBoxValue === params.label
  );

  useEffect(() => {
    getNotesDataFromAPIFn(notesTakingFn);
  }, [notesTakingFn]);

  return (
    <VStack spacing={0} align="stretch" height="100vh">
      <Header />
      <Flex flex={1} overflow="hidden">
        <Sidebar />
        <Box flex={1} p={4} overflowY="auto">
          <Box mt={4}>
            {labeledData.length === 0 ? (
              <Box textAlign="center" fontSize="lg" color="gray.500">
                No notes found for this label.
              </Box>
            ) : (
              <VStack spacing={4}>
                {labeledData.map((labeledNotesData) => (
                  <LabelNotesCard
                    key={labeledNotesData._id}
                    labeledNotesData={labeledNotesData}
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

export default Labelpage;
