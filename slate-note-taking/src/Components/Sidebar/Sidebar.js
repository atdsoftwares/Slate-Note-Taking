// import { useNoteTakingContext } from "../../Context/NotetakingContext";
// import { getNotesDataFromAPIFn } from "../../Services/NoteTakingServices";
// import { React, NavLink as Link, useEffect } from "../../Utils/CustomUtils";
// import NotesModal from "../Modal/NotesModal";

// function Sidebar() {
//   const { getNotesData, notesTakingFn } = useNoteTakingContext();
//   useEffect(() => {
//     getNotesDataFromAPIFn(notesTakingFn);
//   }, []);

//   return (
//     <div>
//       <aside class="flex flex-col w-56 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-white dark:border-gray-700">
//         <div class="flex flex-col justify-between flex-1 mt-6">
//           <nav>
//             <div class="flex items-center  content-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md">
//               <Link to="/Home">
//                 <div className="flex items-center content-center">
//                   <span className="material-icons" title="Home">
//                     home
//                   </span>
//                   Home
//                 </div>
//               </Link>
//             </div>

//             <div class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
//               <Link to="/Archives">
//                 <div className="flex items-center content-center">
//                   <span className="material-icons sidebarmi" title="Playlists">
//                     archive
//                   </span>{" "}
//                   Archive
//                 </div>
//               </Link>
//             </div>

//             <div class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
//               <Link to="/Trash">
//                 <div className="flex items-center content-center">
//                   <span className="material-icons sidebarmi" title="History">
//                     delete
//                   </span>{" "}
//                   Trash
//                 </div>
//               </Link>
//             </div>

//             {getNotesData &&
//               getNotesData.map((notes) => (
//                 <Link to={`/${notes.labelInputBoxValue}`}>
//                   {console.log(notes.labelInputBoxValue)}
//                   <div className="watchlater">
//                     <span className="material-icons sidebarmi" title="History">
//                       label
//                     </span>
//                     {notes && notes.labelInputBoxValue}
//                   </div>
//                 </Link>
//               ))}

//             <div class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
//               <Link to="/accounts">
//                 <div className="flex items-center content-center">
//                   <span className="material-icons sidebarmi" title="History">
//                     account_circle
//                   </span>{" "}
//                   Account
//                 </div>
//               </Link>
//             </div>

//             <hr class="my-6 border-gray-200 dark:border-gray-600" />

//             <div class="flex items-center px-4 py-2 mt-5 text-gray-800 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
//               <div className="flex items-center content-center cursor-pointer">
//                 Notes 👉
//                 <NotesModal />
//               </div>
//             </div>
//           </nav>
//         </div>
//       </aside>
//     </div>
//   );
// }

// export default Sidebar;

import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Divider,
  IconButton,
  useDisclosure,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaHome, FaArchive, FaTrash, FaUser, FaTag } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import { useNoteTakingContext } from "../../Context/NotetakingContext";
import { getNotesDataFromAPIFn } from "../../Services/NoteTakingServices";
import NotesModal from "../Modal/NotesModal";
import { useEffect } from "react";

function Sidebar() {
  const { getNotesData, notesTakingFn } = useNoteTakingContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    getNotesDataFromAPIFn(notesTakingFn);
  }, [notesTakingFn]);

  const navLinkStyle = {
    display: "flex",
    alignItems: "center",
    py: 2,
    px: 4,
    borderRadius: "md",
    _hover: {
      bg: useColorModeValue("gray.100", "gray.700"),
    },
  };

  return (
    <Box
      as="aside"
      width="56"
      height="100vh"
      p={4}
      bg={useColorModeValue("white", "gray.800")}
      borderRightWidth={1}
      borderColor={useColorModeValue("gray.200", "gray.700")}
    >
      <VStack spacing={4} align="start">
        <Link to="/Home">
          <HStack {...navLinkStyle}>
            <FaHome />
            <Text>Home</Text>
          </HStack>
        </Link>

        <Link to="/Archives">
          <HStack {...navLinkStyle}>
            <FaArchive />
            <Text>Archive</Text>
          </HStack>
        </Link>

        <Link to="/Trash">
          <HStack {...navLinkStyle}>
            <FaTrash />
            <Text>Trash</Text>
          </HStack>
        </Link>

        {getNotesData &&
          getNotesData.map((notes) => (
            <Link to={`/${notes.labelInputBoxValue}`} key={notes._id}>
              <HStack {...navLinkStyle}>
                <FaTag />
                <Text>{notes.labelInputBoxValue}</Text>
              </HStack>
            </Link>
          ))}

        <Link to="/accounts">
          <HStack {...navLinkStyle}>
            <FaUser />
            <Text>Account</Text>
          </HStack>
        </Link>

        <Divider my={6} />

        <HStack {...navLinkStyle} cursor="pointer" onClick={onOpen}>
          <Text>
            Notes
            <NotesModal isOpen={isOpen} onClose={onClose} />
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}

export default Sidebar;
