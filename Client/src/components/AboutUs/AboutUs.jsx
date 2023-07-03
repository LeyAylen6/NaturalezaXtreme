import * as React from "react";
import { Box, Center, Flex, Spacer, Text, Link } from "@chakra-ui/react";
import image from "../../assets/about_bg.jpg";

// bgColor="rgba(63, 36, 36, 0.8)"
// bgColor="rgba(39, 57, 43)"
const AboutUs = () => {
  return (
    <Center bgImage={image} backgroundPosition="absolute" backgroundRepeat="no-repeat" bgSize="cover" height={"100vh"}>
      <Flex direction={"column"} width="85%" margin={7} gap="1.5" m="3.5">
        <Box flex="1" p="5" borderWidth="4px" borderRadius="xl" bgColor="rgba(46, 48, 58, 0.8)">
          <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short" color={"white"}>
            Welcome!
          </Text>
          <Text mt={2} fontSize="md" color={"white"}>
            Welcome to our online store, this could be your go-to destination for everything you need on any type of outdoor adventure.
            <br />
            We are proud to offer you a wide range of specialized articles and clothing for exciting activities such as trekking, climbing,
            and much more.
          </Text>
        </Box>
        <Spacer />
        <Box flex="1" p="5" borderWidth="4px" borderRadius="xl" bgColor="rgba(46, 48, 58, 0.8)">
          <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short" color={"white"}>
            About us?
          </Text>
          <Text mt={2} fontSize="md" color={"white"}>
            We are students at Henry and we developed this project as part of the final stage of our training as full stack developers. We
            are:
          </Text>
          <Text mt={2} fontSize="md" color={"white"}>
            <b>
              <Link
                href="https://www.linkedin.com/in/franco-rodriguez-375423264?trk=contact-info"
                isExternal
                _hover={{ color: "rgb(0, 255, 128)" }}
              >
                Franco Lionel Rodriguez Caserta
              </Link>{" "}
              *
              <Link href="https://www.linkedin.com/in/leslie-quetglas/" isExternal _hover={{ color: "rgb(0, 255, 128)" }}>
                {" "}
                Leslie Quetglas
              </Link>{" "}
              *
              <Link href="https://www.linkedin.com/in/leilaaylensalguero/" isExternal _hover={{ color: "rgb(0, 255, 128)" }}>
                {" "}
                Leila Salguero
              </Link>{" "}
              *
              <Link href="https://www.linkedin.com/in/sebastian-concheso-83b095246/" isExternal _hover={{ color: "rgb(0, 255, 128)" }}>
                {" "}
                Sebastián Concheso
              </Link>{" "}
              *
              <Link
                href="https://www.linkedin.com/in/nicol%C3%A1s-florent%C3%ADn-a3771217a/"
                isExternal
                _hover={{ color: "rgb(0, 255, 128)" }}
              >
                {" "}
                Nicolas Florentin
              </Link>{" "}
              *
              <Link href="https://www.linkedin.com/in/vanina-ramayo-643460264/" isExternal _hover={{ color: "rgb(0, 255, 128)" }}>
                {" "}
                Vanina Ramayo
              </Link>{" "}
              *
              <Link href="https://www.linkedin.com/in/agust%C3%ADn-d%C3%ADaz-garro/" isExternal _hover={{ color: "rgb(0, 255, 128)" }}>
                {" "}
                Agustin Diaz Garro
              </Link>{" "}
              *
              <Link href="https://www.linkedin.com/in/julieta-gimenez-348172a5/" isExternal _hover={{ color: "rgb(0, 255, 128)" }}>
                {" "}
                Julieta Gimenez
              </Link>
            </b>
          </Text>
        </Box>
        <Spacer />
        <Box flex="1" p="5" borderWidth="4px" borderRadius="xl" bgColor="rgba(46, 48, 58, 0.8)">
          <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short" color={"white"}>
            What is NatureXtreme?
          </Text>
          <Text mt={2} fontSize="md" color={"white"}>
            NaturXtreme is a project designed to exercise our use of tools like github and our skills for group work with agile
            methodologies.
            <br />
            Also, through this practice, we consolidate knowledge on tools used during the bootcamp and investigate and put into practice
            the use of new ones.
          </Text>
        </Box>
        <Spacer />
        <Box flex="1" p="5" borderWidth="4px" borderRadius="xl" bgColor="rgba(46, 48, 58, 0.8)">
          <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short" color={"white"}>
            What technologies do we use?
          </Text>
          <Text mt={2} fontSize="md" color={"white"}>
            <b>
              React * Redux * ChakraUI * Formik * TSNode * Express * TypeORM * Postgres * Nodemailer * MercadoPago * Cloudinary * Javascript
              * Typescript
            </b>
          </Text>
        </Box>
      </Flex>
    </Center>
  );
};

export default AboutUs;
