import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import { Box, HStack, Stack } from "@chakra-ui/react";

const Loginsingup = () => {
    return (
        <Box 
        backgroundImage= {"url(https://i.blogs.es/199e7b/simon-english-672450-unsplash/1366_2000.jpeg)"}
        backgroundSize="cover"
        backgroundPosition="center"
        >
        <HStack spacing='24px'>
        <Box display="flex" justifyContent="center" alignItems="center" h="100vh" marginLeft="300px">
            <Login/> 
        </Box>
        <Box>
            <Signup/> 
        </Box>
        </HStack> 
        </Box>
    )
}
export default Loginsingup;