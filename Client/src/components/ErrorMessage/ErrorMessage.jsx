import { Box, Flex, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
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
        >

            <Flex 
            pos={"relative"}
                top={300}
                h={300}
                w={400}
                fontWeight={"bold"}
                color="black"
                bgGradient="linear(to-b,white,grey)"
                borderRadius={30}
                flexDirection={"column"}
                alignItems={"center"}
                justify="space-evenly"
                boxShadow='lg'
            >
                
                <Box fontSize={23} padding={5}>
                    {props.message}
                </Box>

                <Button fontSize={20} onClick={closeMessage} w={150} border= {"none"} boxShadow='lg' _hover={{ 
                    bg: "gray.300"
                }}>
                    Acept
                </Button>
            </Flex>
        </Flex> 
    )
}

export default ErrorMessage;