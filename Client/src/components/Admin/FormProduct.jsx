import { Box, Button, Card, Container, FormControl, FormLabel, Heading, Input, Select, Text } from "@chakra-ui/react";
const FormProduct = () => {
  const shoeSize = Array.from({ length: 12 }, (_, index) => index + 35);
  return (
    <Container marginTop={10}>
      <Card padding={4}>
        <Heading>Add Product</Heading>
        <form>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="name of product" />
            <Text mb="8px">Description:</Text>
            <Input type="text" placeholder="description" size={"md"} />
            <FormLabel>Type</FormLabel>
            <Select>
              <option value="option1">none</option>
              <option value="option2">Tshirt</option>
              <option value="option3">sweatshirt</option>
              <option value="option4">jacket</option>
              <option value="option5">pant</option>
              <option value="option6">accesories</option>
              <option value="option7">shoes</option>
              <option value="option8">equipment</option>
            </Select>
            <FormLabel>Gender</FormLabel>
            <Select>
              <option value="option1">none</option>
              <option value="option2">Male</option>
              <option value="option3">Female</option>
            </Select>
            <FormLabel>Color</FormLabel>
            <Select>
              <option value="option1">none</option>
              <option value="option2">Black</option>
              <option value="option3">White</option>
              <option value="option4">Grey</option>
              <option value="option5">Blue</option>
              <option value="option6">Red</option>
              <option value="option7">Yellow</option>
              <option value="option8">Brown</option>
              <option value="option9">Pink</option>
            </Select>
            <FormLabel>Shoe size</FormLabel>
            <Select placeholder="shoe size">
              {shoeSize.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Select>
            <FormLabel>Size</FormLabel>
            <Select>
              <option value="option1">none</option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extra Large</option>
              <option value="Unique">Unique</option>
            </Select>
            <FormLabel>Stock</FormLabel>
            <Input type="number" placeholder="Stock" />
            <FormLabel>Price: U$S</FormLabel>
            <Input type="number" placeholder="Price" />
          </FormControl>
          <Box marginTop={4} display={"flex"} justifyContent={"space-between"}>
            <Button type="submit">Add</Button>
            <Button>Cancel</Button>
          </Box>
        </form>
      </Card>
    </Container>
  );
};

export default FormProduct;
