import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import HomeProductItem from "./HomeProductItem"; // Adjust the path as necessary
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BrandItem from "./BrandItem";

function HomeProductCarousel({ title, products = [], ItemToRender }) {
  const responsive = {
    superLargeDesktop: {
      // for screens >= 1440px
      breakpoint: { max: 4000, min: 1440 },
      items: 3,
    },
    desktop: {
      // for screens between 1024px and 1440px
      breakpoint: { max: 1440, min: 1024 },
      items: 3,
    },
    tablet: {
      // for screens between 768px and 1024px
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      // for screens < 768px
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <Box
      p="6"
      width="100%"
      maxWidth={"1200px"}
      mx={"auto"}
      padding={{ base: "0px 10px", md: "0px 20px" }}
      background={"teal.50"}
    >
      <Heading textAlign="center" fontSize="2xl" fontWeight={"medium"} my={2}>
        {title}
      </Heading>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={true}
        customTransition="all 0.5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {console.log("this is before mapping items insid Carousel")}
        {products && products?.length > 0
          ? products?.map((item, i) => <ItemToRender key={i} data={item} />)
          : null}
        {console.log("this is after mapping items insid Carousel")}

      </Carousel>
    </Box>
  );
}

export default HomeProductCarousel;
