// import {
//   Account,
//   Footer,
//   Header,
//   Sidebar,
// } from "../Components/IndexAllComponents";

// function Accountpage() {
//   return (
//     <div>
//       <Header />
//       <Sidebar />
//       <Account />
//       <Footer />
//     </div>
//   );
// }

// export default Accountpage;
import {
  Box,
  Flex,
  Spacer,
  Container,
  VStack,
} from "@chakra-ui/react";
import {
  Account,
  Footer,
  Header,
  Sidebar,
} from "../Components/IndexAllComponents";

function Accountpage() {
  return (
    <VStack spacing={0} align="stretch" height="100vh">
      <Header />
      <Flex flex={1} overflow="hidden">
        <Sidebar />
        <Container maxW="container.lg" flex={1} p={4} overflowY="auto">
          <Account />
        </Container>
      </Flex>
      <Footer />
    </VStack>
  );
}

export default Accountpage;
