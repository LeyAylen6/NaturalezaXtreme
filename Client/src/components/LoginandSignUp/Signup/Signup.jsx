import { useState } from "react";
import { validationsignup } from "../../Validation/validationsignup"; 
import { Box, Button, Card, Container, FormControl, FormLabel, HStack, Heading, Input, Select, Text } from "@chakra-ui/react";
const Signup =()=> {
    const [signuserData, setsignUserData] = useState({
        name: '',
        lastname: '',
        email: '',
        password: ''
    })
 
   const [errors, setErrors] = useState({}) 
      
    const handleChange = (event) => {
        event.preventDefault()
        setsignUserData({ 
            ...signuserData,
            [event.target.name]: event.target.value 
        })
        setErrors(validationsignup({
            ...signuserData,
            [event.target.name]: event.target.value
        }))
    };
 
    return (
        <Container marginTop={10} >
          <Card padding={4} background={`rgba(255, 255, 255, 0.3)`}>
            <Heading fontSize="25px" marginBottom="25px" marginTop="20px">I WANT TO BE PART</Heading>
            <Heading fontSize="X" marginBottom="20px"> complete the information</Heading>
            <form>
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
                  {errors.password&& <p>{errors.password}</p>}
                <Button backgroundColor= "black" color="white" marginTop= "15px" type="submit" disabled={errors.email || errors.password || errors.name || errors.lastname || !signuserData.email || !signuserData.password || !signuserData.name ||  !signuserData.lastname }>Sign Up</Button>
                </FormControl>
            </form>
            </Card>
        </Container>
        
    )
}
export default Signup; 