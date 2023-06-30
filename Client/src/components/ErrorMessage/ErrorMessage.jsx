import { Box, Flex, VStack, Button, Center, Container, Stack, AbsoluteCenter, Spacer } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "../../redux/actions/actions";

const ErrorMessage = (props) => {
    const dispatch = useDispatch();

    const closeMessage = () => {
        clearMessage(dispatch)
    }

    return (
        
        <Flex 
        bg='black'
        opacity={0.85}
        h="100%" 
        w="100%" 
        pos={"Absolute"} 
        zIndex={1000}
        justify={"center"}  
        _before= {{
            content: `''`,
            opacity: 0.5,
        }}>

            <Flex 
            pos={"relative"}
                top={300}
                h={300} 
                w={400} 
                bg={"blue.200"} 
                borderRadius={30} 
                flexDirection={"column"} 
                alignItems={"center"} 
                justify="space-evenly" 
                boxShadow='lg'
            >
                
                <Box fontSize={23} padding={5}>
                    {props.message}
                </Box>

                <Button onClick={closeMessage} w={150} border= {"none"} boxShadow={""} _hover={{ 
                    bg: "gray.300"
                }}>
                    Acept
                </Button>

            </Flex>
           
        </Flex> 
    )
}

export default ErrorMessage;