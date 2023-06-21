import { Link } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import { Box, HStack, Stack,Button, Heading, Container, Card } from "@chakra-ui/react";
import { redirectSignUp } from "../../redux/actions/actions";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
const Loginsingup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
  const redirectionSignUp = (event) => {
    event.preventDefault()
   redirectSignUp(dispatch)
   navigate('/signup')

    }

    return (
        <Box 
        backgroundImage= {"url(https://i.blogs.es/199e7b/simon-english-672450-unsplash/1366_2000.jpeg)"}
        backgroundSize="cover"
        backgroundPosition="center"
        >
        <HStack>
        <Box display="flex" justifyContent="center" alignItems="center" h="100vh" marginLeft="300px">
            <Login/> 
        </Box>
        <Container marginTop={10} justifyContent={"center"} maxW={"380px"} ml={"40px"}>
        <Card padding={4} background={`rgba(255, 255, 255, 0.2)`}>
        <Heading fontSize="25px" marginBottom="25px" marginTop="20px">
          I WANT TO BE PART
        </Heading>
        <Heading fontSize="12px" marginBottom="20px" maxW={"200px"} marginLeft={"60px"}>
           ENTER TO CREATE YOUR ACCOUNT IN NATUREXTREME 
        </Heading>
        <Box>
        <Button backgroundColor= "black" color="white"  marginTop= "15px" type="submit"  onClick={redirectionSignUp}>
                Create new Account
         </Button>
         </Box>
         </Card>
        </Container>
        </HStack> 
        </Box>
    )
}
export default Loginsingup;