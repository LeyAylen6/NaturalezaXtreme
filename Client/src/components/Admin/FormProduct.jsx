import { Box, Button, Card, Container, FormControl, FormLabel, Heading, Input, Select, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions/actions";
import { useState } from "react";
import { Link } from "react-router-dom";

const FormProduct = () => {
  const shoeSize = Array.from({ length: 12 }, (_, index) => index + 35);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    description: "",
    type: "",
    gender: "",
    color: "",
    price: 0,
    articleID: "",
    active: true,
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(form);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(form));
  };
  const handleReset = (event) => {
    event.preventDefault();
    setForm({
      name: "",
      description: "",
      type: "",
      gender: "",
      color: "",
      price: 0,
      articleID: "",
      active: true,
      image: "",
      size: "",
      shoeSize: "",
    });
  };

  return (
    <Container marginTop={10}>
      <Box display={"flex"} justifyContent={"space-between"} border={"1px"} marginBottom="15px">
        <Button colorScheme="cyan" size="lg" variant="solid" m="6">
          <Link to="/CrudProduct">Back</Link>
        </Button>
        <Button colorScheme="orange" size="lg" variant="solid" m="6">
          <Link to="/">Home</Link>
        </Button>
      </Box>
      <Card padding={4}>
        <Heading>Add Product</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" placeholder="name of product" value={form.name} onChange={handleChange} />
            <Text mb="8px">Description:</Text>
            <Input type="text" placeholder="description" size={"md"} />
            <FormLabel>Type</FormLabel>
            <Select name="type" value={form.type} onChange={handleChange}>
              <option value="none">none</option>
              <option value="Tshirt">Tshirt</option>
              <option value="sweatshirt">sweatshirt</option>
              <option value="jacket">jacket</option>
              <option value="pant">pant</option>
              <option value="accesories">accesories</option>
              <option value="shoes">shoes</option>
              <option value="equipment">equipment</option>
            </Select>
            <FormLabel>Gender</FormLabel>
            <Select name="gender" value={form.gender} onChange={handleChange}>
              <option value="none">none</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
            <FormLabel>Color</FormLabel>
            <Select name="color" value={form.color} onChange={handleChange}>
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
            <Select placeholder="shoe size" name="shoeSize" value={form.shoeSize} onChange={handleChange}>
              {shoeSize.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Select>
            <FormLabel>Size</FormLabel>
            <Select name="size" value={form.size} onChange={handleChange}>
              <option value="option1">none</option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extra Large</option>
              <option value="Unique">Unique</option>
            </Select>
            <FormLabel>ArticleID</FormLabel>
            <Input type="text" placeholder="ArticleID" name="articleID" value={form.articleID} onChange={handleChange} />
            <FormLabel>Stock</FormLabel>
            <Input type="number" placeholder="Stock" name="stock" value={form.stock} onChange={handleChange} />
            <FormLabel>Price: U$S</FormLabel>
            <Input type="number" placeholder="Price" name="price" value={form.price} onChange={handleChange} />
            <FormLabel>Image</FormLabel>
            <Input type="text" placeholder="Image" name="image" value={form.image} onChange={handleChange} />
          </FormControl>
          <Box marginTop={4} display={"flex"} justifyContent={"space-between"}>
            <Button type="submit">Add</Button>
            <Button onClick={handleReset}>Cancel</Button>
          </Box>
        </form>
      </Card>
    </Container>
  );
};

export default FormProduct;
