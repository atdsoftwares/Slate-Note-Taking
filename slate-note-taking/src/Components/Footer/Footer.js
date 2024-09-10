// function Footer() {
//   return (
//     <div>
//       <header class="text-gray-600 body-font border-solid border-2 border-gray-200">
//         <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               class="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//             </svg>
//             <span class="ml-3 text-xl">Tailblocks</span>
//           </a>
//           <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//             <div className="github">
//               <i className="fa fa-github" />
//             </div>
//             <div className="twitter">
//               <i className="fa fa-twitter" />
//             </div>
//             <div className="Linkedin">
//               <i className="fa fa-linkedin" />
//             </div>
//           </nav>
//           <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
//             Button
//             <svg
//               fill="none"
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               class="w-4 h-4 ml-1"
//               viewBox="0 0 24 24"
//             >
//               <path d="M5 12h14M12 5l7 7-7 7"></path>
//             </svg>
//           </button>
//         </div>
//       </header>
//       {/* <footer className="footer-items">
//         <div className="h4">
//           Made with <code> ❤️ </code>by Prankur Pandey
//         </div>
//         <div className="social-media-links">
//           <div className="github">
//             <i className="fa fa-github" />
//           </div>
//           <div className="twitter">
//             <i className="fa fa-twitter" />
//           </div>
//           <div className="Linkedin">
//             <i className="fa fa-linkedin" />
//           </div>
//         </div>
//         <div className="h4">© 2021 Agri UI</div>
//       </footer> */}
//     </div>
//   );
// }

// export default Footer;

import { Box, Flex, IconButton, Text, Button, Heading } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function Footer() {
  return (
    <Box border="2px" borderColor="gray.200" py={5}>
      <Flex
        maxW="container.md"
        mx="auto"
        flexDirection={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
      >
        <Flex align="center" mb={{ base: 4, md: 0 }}>
          <Box
            as="svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            w={10}
            h={10}
            color="white"
            bg="red.500"
            p={2}
            borderRadius="full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </Box>
          <Heading as="h1" ml={3} size="lg" color="gray.900">
            Notes
          </Heading>
        </Flex>

        <Flex justify="center" mb={{ base: 4, md: 0 }}>
          <IconButton
            as="a"
            href="https://github.com"
            aria-label="GitHub"
            icon={<FaGithub />}
            size="lg"
            variant="ghost"
            colorScheme="gray"
          />
          <IconButton
            as="a"
            href="https://twitter.com"
            aria-label="Twitter"
            icon={<FaTwitter />}
            size="lg"
            variant="ghost"
            colorScheme="gray"
          />
          <IconButton
            as="a"
            href="https://linkedin.com"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            size="lg"
            variant="ghost"
            colorScheme="gray"
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;
