import { useState } from "react";
import { Box, IconButton, useBreakpointValue, Stack, Heading, Text, Container } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { Link } from "react-router-dom";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "Villa Alpina, Champaquí hill",
      text: "Beautiful hike up the hill, difficulty: difficult. distance 18.9 km. Duration: 8 hours. Elevation: 1,500 mts.",
      image: "https://www.cordobaturismo.gov.ar/wp-content/uploads/2018/09/HNDCChampa16112019-90.jpg",
    },
    {
      title: "Uritorco hill",
      text: "path loaded with enigmas spectacular landscapes. With 1979 masl.",
      image: "https://www.cordobaturismo.gov.ar/wp-content/uploads/2018/09/sin-t%C3%ADtulo-115-de-293.jpg#main",
      link: "/blog/1",
    },
    {
      title: "Colorado hill",
      text: "The most important thing to visit are the pictographs of the place.",
      image: "https://www.cordobaturismo.gov.ar/wp-content/uploads/2018/09/Cerro-Colorado-.jpg#main",
    },
    {
      title: "BIKE CROSS",
      text: "It is a race that is practiced on rough terrain with appropriate bicycles and that consists of doing the route at the maximum possible speed.",

      image: "https://www.cordobaturismo.gov.ar/wp-content/uploads/2021/12/Screenshot_4.png#main",
    },
    {
      title: "Quebrada del Condorito National Park",
      text: "The greatest reward will be watching the condors fly.",
      image: "https://www.cordobaturismo.gov.ar/wp-content/uploads/2020/10/001-Vista-de-la-Quebrada-del-Condorito.jpg#main",
    },
  ];

  return (
    <Container maxWidth={"100%"} height={"660px"} margin={"0"} p={"0"}>
      <Box position={"relative"} height={"650"} overflow={"hidden"}>
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          // charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          color={"Black"}
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          color={"Black"}
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, id) => (
            <Link to="/blog" key={id}>
              <Box
                key={id}
                height={"auto"}
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                border={"1px solid"}
                backgroundImage={`url(${card.image})`}
              >
                {/* This is the block you need to change, to customize the caption */}
                <Container maxW={"2x1"} height="700px" position="relative">
                  <Stack
                    spacing={6}
                    w={"full"}
                    maxW={"lg"}
                    position="absolute"
                    top="50%"
                    transform="translate(50%, -50%)"
                    bgColor={"rgb(255,255,255, 0.4)"}
                    borderRadius={"10px"}
                    p={30}
                  >
                    <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} color="Black">
                      {card.title}
                    </Heading>
                    <Text fontSize={{ base: "md", lg: "lg" }} color="Black" fontWeight={"bold"} marginTop={"60px"}>
                      {card.text}
                    </Text>
                  </Stack>
                </Container>
              </Box>
            </Link>
          ))}
        </Slider>
      </Box>
    </Container>
  );
}
