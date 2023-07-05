import { Box, Container, Stack, Text, Img, Wrap, WrapItem, Link, Avatar } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

import logo2 from "../../assets/logo-white-v3.png";
import seba from "../../assets/Imagen_perfil_seba.jpg";
import leslie from "../../assets/Leslie.jpeg";

export default function SmallWithLogoLeft() {
  return (
    <Box bg="blackAlpha.900">
      <Container
        as={Stack}
        maxW={"9xl"}
        h={"200"}
        py={8}
        direction={{ base: "column", md: "row" }}
        spacing={6}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Img src={logo2} alt="logo2" maxHeight={"200px"} width={300}></Img>
        <Text color={"white"}>© 2023 Nature Xtreme. All rights reserved</Text>
        <Wrap>
          <WrapItem>
            <Link href="https://www.linkedin.com/in/leslie-quetglas/" isExternal>
              <Avatar name="Leslie Quetglas" src={leslie} />
            </Link>
          </WrapItem>
          <WrapItem>
            <Link href="https://www.linkedin.com/in/sebastian-concheso-83b095246/" isExternal>
              <Avatar name="Sebastián Concheso" src={seba} />
            </Link>
          </WrapItem>
          <WrapItem>
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          </WrapItem>
          <WrapItem>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
          </WrapItem>
          <WrapItem>
            <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
          </WrapItem>
          <WrapItem>
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </WrapItem>
          <WrapItem>
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          </WrapItem>
          <WrapItem>
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          </WrapItem>
        </Wrap>
        <Stack direction={"row"} spacing={6}>
          <Wrap spacing={8} pr={25}>
            <WrapItem color={"white"}>
              <Link href="https://github.com/LeyAylen6/NaturalezaXtreme" target="_blank">
                <FaGithub size={60} />
              </Link>
            </WrapItem>
          </Wrap>
        </Stack>
      </Container>
    </Box>
  );
}
