import { useState } from "react";
import { validation } from "../../Validation/validation";
import { Box, Button, Card, Container, FormControl, FormLabel, Heading, Input, Select, Text } from "@chakra-ui/react";
const Login =()=> {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
      
    const handleChange = (event) => {
        event.preventDefault()
        setUserData({ 
            ...userData,
            [event.target.name]: event.target.value 
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    };
    
 
    return (
        <Container marginTop={10}>
            <Card padding={4} background={`rgba(255, 255, 255, 0.3)`}>
            <Heading fontSize="25px" marginBottom="25px" marginTop="20px">I'M ALREADY PART</Heading>
            <form >
            <FormControl>
            <FormLabel>Email</FormLabel>
                <Input 
                name="email"
                type="text"
                onChange={handleChange}
                value={userData.email}
                placeholder="ej: Email@gmail.com"
                />
              {errors.email && <p>{errors.email}</p>}
           
            <FormLabel>Password</FormLabel>
                <Input 
                name="password"
                type="password"
                onChange={handleChange}
                value={userData.password}
                placeholder="Enter your password"
                />
                 {errors.password && <p>{errors.password}</p>}
                <Button backgroundColor= "black" color="white"  marginTop= "15px" type="submit" disabled={errors.email || errors.password || !userData.email || !userData.password}>Log In</Button>
                </FormControl>
            </form>
            </Card>
            </Container>
    )
}
export default Login; 