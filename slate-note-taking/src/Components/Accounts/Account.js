// import {
//   useLoginSignupContext,
//   useNoteTakingContext,
// } from "../../Context/IndexAllContext";
// function Account() {
//   const { loginData } = useLoginSignupContext();
//   const { getNotesData } = useNoteTakingContext();
//   const { _id, email, name, number } = loginData;
//   return (
//     <div>
//       <h1>Account Details </h1>
//       <table className="table">
//         <tr>
//           <th>_id</th>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Number</th>
//           <th>Notes</th>
//         </tr>
//         <tr>
//           <td>{_id}</td>
//           <td>{name}</td>
//           <td> {email}</td>
//           <td>{number}</td>
//           <td>{getNotesData && getNotesData.length}</td>
//         </tr>
//       </table>
//     </div>
//   );
// }

// export default Account;

import React from "react";
import {
  useLoginSignupContext,
  useNoteTakingContext,
} from "../../Context/IndexAllContext";
import {
  Box,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  TableContainer,
  Text,
  Flex,
} from "@chakra-ui/react";

function Account() {
  const { loginData } = useLoginSignupContext();
  const { getNotesData } = useNoteTakingContext();
  const { _id, email, name, number } = loginData;

  return (
    <Box p={6} bg="gray.100" minHeight="100vh">
      {/* Page Heading */}
      <Flex justify="center" mb={6}>
        <Heading as="h1" size="xl" color="teal.600">
          Account Details
        </Heading>
      </Flex>

      {/* Account Information Table */}
      <Box bg="white" p={6} shadow="md" borderRadius="md">
        <TableContainer>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Th>ID</Th>
                <Td>{_id}</Td>
              </Tr>
              <Tr>
                <Th>Name</Th>
                <Td>{name}</Td>
              </Tr>
              <Tr>
                <Th>Email</Th>
                <Td>{email}</Td>
              </Tr>
              <Tr>
                <Th>Number</Th>
                <Td>{number}</Td>
              </Tr>
              <Tr>
                <Th>Notes</Th>
                <Td>{getNotesData ? getNotesData.length : 0}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default Account;
