import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const Admin = () => {
  return (
    <Card>
      <h1>Admin</h1>
      <SimpleGrid columns={2} spacing={10}>
        <CardBody>
          <CardHeader>Products</CardHeader>
          <Button colorScheme="blue">Add </Button>
          <Button colorScheme="orange">Edit</Button>
          <Button colorScheme="red">Delete</Button>
        </CardBody>
        <CardBody>
          <CardHeader>Users</CardHeader>
          <Button colorScheme="blue">Add User</Button>
          <button>Edit User</button>
          <button>Delete User</button>
        </CardBody>
        <CardBody>
          <CardHeader>Orders</CardHeader>
          <Button colorScheme="blue">Add Order</Button>
          <button>Edit Order</button>
          <button>Delete Order</button>
        </CardBody>
        <CardBody>
          <CardHeader>Categories</CardHeader>
          <Button colorScheme="blue">Add Category</Button>
          <button>Edit Category</button>
          <button>Delete Category</button>
        </CardBody>
        <CardBody>
          <CardHeader>Reviews</CardHeader>
          <Button colorScheme="blue">Add Review</Button>
          <button>Edit Review</button>
          <button>Delete Review</button>
        </CardBody>
        <CardBody>
          <CardHeader>Admins</CardHeader>
          <Button colorScheme="blue">Add Admin</Button>
          <button>Edit Admin</button>
          <button>Delete Admin</button>
        </CardBody>
        <CardBody>
          <CardHeader>Images</CardHeader>
          <Button colorScheme="blue">Add Image</Button>
          <button>Edit Image</button>
          <button>Delete Image</button>
        </CardBody>
      </SimpleGrid>
    </Card>
  );
};

export default Admin;
