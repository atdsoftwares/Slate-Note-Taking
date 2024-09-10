// import {
//   EditForm,
//   Footer,
//   Header,
//   Sidebar,
// } from "../Components/IndexAllComponents";

// function Editnotespage() {
//   return (
//     <div>
//       <Header />
//       <Sidebar />
//       <EditForm />
//       <Footer />
//     </div>
//   );
// }

// export default Editnotespage;

import { Flex, VStack } from "@chakra-ui/react";
import {
  EditForm,
  Footer,
  Header,
  Sidebar,
} from "../Components/IndexAllComponents";

function Editnotespage() {
  return (
    <VStack spacing={0} align="stretch" height="100vh">
      <Header />
      <Flex flex={1} overflow="hidden">
        <Sidebar />
        <Flex as="main" flex={1} direction="column" p={4} overflowY="auto">
          <EditForm />
        </Flex>
      </Flex>
      <Footer />
    </VStack>
  );
}

export default Editnotespage;
