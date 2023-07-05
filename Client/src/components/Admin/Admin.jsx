import { Box, HStack, VStack, Flex, Center, Button, Heading, Grid, background } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import Stadistics from "./Statistics";
import { originalColors } from "./../../theme/palette"

const Admin = () => {

  const buttons = [{ name: "Products", link:'/crudProduct' }, { name: "Users", link:'/crudUsers' }, { name: "Blog", link:'/blogEditor' }]

  return (
    <Grid paddingTop={"120px"} marginBottom={10} gridTemplateRows={'70px 50px 120px 480px'} gap={4} >
      
      <Heading as='h1' fontSize={50} noOfLines={1}>
        Welcome Admin!
      </Heading>

      <Heading as='h2' fontSize={25} fontWeight={"light.200"} noOfLines={1}>
        Here you can see all the important information about your page
      </Heading>

      <Flex justify={"space-evenly"} alignItems={"center"} >
        
      {buttons.map(item => {
        return (
          <Button 
            h={"100px"} 
            w={"350px"} 
            background={"green.300"}
            color={originalColors.darkgrey}
            boxShadow="lg"
            borderRadius={10} 
            borderBottom="2px solid rgb(155,155,155,0.2)"
            fontSize={28}
            display={"Flex"}
            alignItems={"center"}
            justifyContent={"center"}
            border={"none"}
            _hover={{
              background: "green.200",
            }}
          >      
          <Link to={item.link}>{item.name}</Link>
        </Button>
        )
      })}

      </Flex>

      <Center>
        <Box color={originalColors.darkgrey} bg={originalColors.white} w={"1000px"} h={"400px"} borderRadius={30} >
          <Stadistics></Stadistics>
        </Box>
      </Center>

    </Grid>
  );
};

export default Admin;
