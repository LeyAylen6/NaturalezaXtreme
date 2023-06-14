import { Container, Card, Heading, FormControl, FormLabel, Input, Select, Button, Textarea, Text, Option } from "@chakra-ui/react";
import { useState } from "react";

const AddProduct = () => {
  const [value, setValue] = useState("Here is a sample placeholder");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Container marginTop={8}>
      <Card padding={4}>
        <Heading textAlign="center">Add Product</Heading>
        <form>
          <FormControl>
            <FormLabel>name</FormLabel>
            <Input type="text" placeholder="name of product" />
            <Text mb="8px">Description: {value}</Text>
            <Textarea value={value} onChange={handleInputChange} placeholder="description" size={"md"} />

            <Select placeholder="color">
              <Option value="option1">black</Option>
            </Select>
            <FormLabel>size</FormLabel>
            <Select />
            <FormLabel>price</FormLabel>
            <Input type="number" placeholder="price" />
            <FormLabel>stock</FormLabel>
            <Input type="number" placeholder="stock" />
            <FormLabel>image</FormLabel>
            <Input type="file" placeholder="image" />
            <FormLabel>gender</FormLabel>
            <Select />
          </FormControl>
          <Button type="submit">Add</Button>
        </form>
      </Card>
    </Container>
  );
};

export default AddProduct;
