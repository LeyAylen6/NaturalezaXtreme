import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Select, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// const schema = Yup.object().shape({
//   name: Yup.string().required("Name is required"),
//   description: Yup.string().required("Description is required"),
//   stock: Yup.number().required("Stock is required").positive().integer(),
//   price: Yup.number().required("Price is required").positive(),
// });

const EditProduct = () => {
  const shoeSize = Array.from({ length: 12 }, (_, index) => index + 35);

  // const submitForm = (values) => {};
  // const { handleSubmit, handleChange, handleReset, errors, values } = useFormik({
  //   initialValues: {
  //     name: "",
  //     description: "",
  //     Stock: "",
  //     Price: "",
  //   },
  //   onSubmit: submitForm,
  //   validationSchema: schema,
  // });
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    stock: "",
    price: "",
    type: "",
    gender: "",
    color: "",
    size: "",
    shoeSize: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit  " + product.name);
  };
  const handleReset = (e) => {
    e.preventDefault();
    console.log("reset");
  };

  return (
    <Container border="2px" maxWidth="100%" marginTop={10}>
      <Box display={"flex"} justifyContent={"space-between"} border={"1px"} marginBottom="15px">
        <Button colorScheme="cyan" size="lg" variant="solid" m="6">
          <Link to="/admin">Back</Link>
        </Button>
        <Button colorScheme="orange" size="lg" variant="solid" m="6">
          <Link to="/crudProduct">Product</Link>
        </Button>
      </Box>
      <Box width="75%" display="list-item" justifyContent="center" border={"1px"} borderColor={"red"} p="10">
        <Heading>Edit Product</Heading>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="name of product" name="name" autoComplete="off" />
            <br />

            <FormLabel mb="8px">Description:</FormLabel>
            <Input type="text" placeholder="description" size={"md"} name="description" autoComplete="off" />
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
            <Button type="reset">Reset</Button>
            <Button>Cancel</Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default EditProduct;
