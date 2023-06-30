import {
  Container,
  CardBody,
  HStack,
  Progress,
  Divider,
  VStack,
  Avatar,
  Heading,
  TableContainer,
  TableCaption,
  Thead,
  Th,
  Card,
  Table,
  Tr,
  Td,
  Tbody,
  Tfoot,
} from "@chakra-ui/react";

const Shopping = () => {
  return (
    <VStack pt={10}>
      <Heading>Reviews</Heading>
      <Card pt={10}>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>
              Your password was encrypted successfully
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Account Info</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Email</Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td>Password</Td>
                <Td></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
    </VStack>
  );
};
export default Shopping;
