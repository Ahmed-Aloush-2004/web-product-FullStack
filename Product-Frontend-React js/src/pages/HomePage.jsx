import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function HomePage() {
  return (
    <Box width={"100%"} overflow={"hidden"}>
      <Box
        width={"100%"}
        padding={"10px 30px"}
        background={"gray.800"}
        color={"white"}
      >
        <Text textAlign={"center"} fontSize={"xl"} fontWeight={"medium"}>
          Spend less. Smile more
        </Text>
      </Box>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        arrows={true}
        showDots={true}
      >
        <h1>Hello from Carousole</h1>
        <h1>Hello from Carousole</h1>
        <h1>Hello from Carousole</h1>
        <h1>Hello from Carousole</h1>
        <h1>Hello from Carousole</h1>
      </Carousel>
    </Box>
  );
}

export default HomePage;
