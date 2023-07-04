import { useAuth0 } from "@auth0/auth0-react";
import { VStack, Avatar, Heading, TableContainer, TableCaption, Thead, Th, Card, Table, Tr, Td, Tbody, Tfoot } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Account = () => {
  const usersDB = useSelector((state) => state.users);

  const { user } = useAuth0();

  const userFinded = usersDB.filter((element) => element.email === user?.email);

  return (
    <VStack pt={124} height={"container.xl"}>
      <Avatar src={user?.picture} size={10} />
      <Heading>Welcome, {user?.name}</Heading>
      <Card pt={10}>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Your password was encrypted successfully</TableCaption>
            <Thead>
              <Tr>
                <Th>Account Info</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Email</Td>
                <Td>{user.email}</Td>
              </Tr>
              <Tr>
                <Td>Password</Td>
                <Td>{userFinded[0]?.password}</Td>
              </Tr>
              <Tr>
                <Td>Verifed</Td>
                {user.email_verified !== false ? <Td>Succesfull Verifed</Td> : <Td>Not Verified</Td>}
              </Tr>
              {userFinded[0]?.rol && (
                <Tr>
                  <Td>Account Level</Td>
                  <Td>{userFinded[0].rol}</Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
    </VStack>
  );
};

export default Account;
