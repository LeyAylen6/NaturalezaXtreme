import { useState } from "react";
import { validationsignup } from "../../Validation/validationsignup";
import { Box, Button, Card, Container, FormControl, FormLabel, HStack, Heading, Input, Select, Text } from "@chakra-ui/react";
import { createNewAccount } from "../../../redux/actions/actionsUsers";
import { useDispatch } from "react-redux"
import {useNavigate } from "react-router-dom";

const Signup = () => {
  const [signuserData, setsignUserData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    adress: '',
    city: '', 
    rol: '', 
    active: true
  });

  const [errors, setErrors] = useState({}); 
  const [errorMessage, setErrorMessage] = useState(""); // Agregar estado para el mensaje de error

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (event) => {
    event.preventDefault();
    setsignUserData({
      ...signuserData,
      [event.target.name]: event.target.value
    });
    setErrors(validationsignup({
      ...signuserData,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createNewAccount(signuserData, dispatch);
       navigate("/")
    } catch (error) {
      setErrorMessage(error.response.data.error); // Obtener el mensaje de error desde la respuesta del servidor
    }
   
  };

  return (
    <Container marginTop={10}>
      <Card padding={4} background={`rgba(255, 255, 255, 0.3)`}>
        <Heading fontSize="25px" marginBottom="25px" marginTop="20px">
          I WANT TO BE PART
        </Heading>
        <Heading fontSize="X" marginBottom="20px">
          complete the information
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              type="text"
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {errors.name && <p>{errors.name}</p>}
            <FormLabel>Lastname</FormLabel>
            <Input
              name="lastname"
              type="text"
              onChange={handleChange}
              placeholder="Enter your LastName"
            />
            {errors.lastname && <p>{errors.lastname}</p>}
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="text"
              onChange={handleChange}
              placeholder="Enter your Email ej: Email@gmail.com"
            />
            {errors.email && <p>{errors.email}</p>}
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              onChange={handleChange}
              placeholder="Enter your new password"
            />
            {errors.password && <p>{errors.password}</p>}
            {errorMessage && <p>{errorMessage}</p>} {/* Mostrar el mensaje de error */}
            <FormLabel>Adress</FormLabel>
            <Input
              name="adress"
              type="adress"
              onChange={handleChange}
              placeholder="Enter your adress"
            />
            <FormLabel>City</FormLabel>
            <Input
              name="city"
              type="city"
              onChange={handleChange}
              placeholder="Enter your city"
            />
            <FormLabel>Rol</FormLabel>
            <Input
              name="rol"
              type="rol"
              onChange={handleChange}
              placeholder="Enter your rol ej: User"
            />
            <Button
              backgroundColor="black"
              color="white"
              marginTop="15px"
              type="submit"
              disabled={
                errors.email ||
                errors.password ||
                errors.name ||
                errors.lastname ||
                !signuserData.email ||
                !signuserData.password ||
                !signuserData.name ||
                !signuserData.lastname
              }
            >
              Sign Up
            </Button>
          </FormControl>
        </form>
      </Card>
    </Container>
  );
};

export default Signup;