import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

// Example URLs for logos. Replace these with your own image paths or URLs.
const logos = [
  { src: "https://cdn.worldvectorlogo.com/logos/adidas-4.svg", alt: "Adidas" },
  { src: "https://cdn.worldvectorlogo.com/logos/puma-logo.svg", alt: "Puma" },
  {
    src: "https://cdn.worldvectorlogo.com/logos/nike-8.svg",
    alt: "Nike",
  },

  { src: "https://cdn.worldvectorlogo.com/logos/apple-14.svg", alt: "Apple" },
  { src: "https://swiperjs.com/images/clients/lacoste.jpg", alt: "Lacoste" },
  { src: "https://swiperjs.com/images/clients/huawei.png", alt: "Huawei" },
  { src: "https://swiperjs.com/images/clients/xiaomi.svg", alt: "Xiaomi" },
  {
    src: "https://swiperjs.com/images/clients/macrumors.jpg",
    alt: "MacRumors",
  },
  { src: "https://swiperjs.com/images/clients/cisco.jpg", alt: "Cisco" },
  {
    src: "https://cdn.worldvectorlogo.com/logos/samsung-8.svg",
    alt: "Samsung",
  },
  { src: "https://cdn.worldvectorlogo.com/logos/rolex.svg", alt: "Rolex" },
];

const BrandSection = () => {
  return (
    <Box
      color="white"
      py={{ base: 8, md: 12 }}
      borderRadius={"lg"}
      width={"100%"}
      maxW="1200px"
      mx={"auto"}
      background={"white"}
    >
      <Text
        as={"h4"}
        fontSize={{ base: "xl", md: "2xl" }}
        fontWeight="bold"
        textAlign="center"
        mb={{ base: 4, md: 6 }}
        color={"black"}
      >
        Support By Millions
      </Text>
      <Flex
        wrap="wrap"
        justify="center"
        align="center"
        gap={{ base: 4, md: 6 }}
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 6 }}
      >
        {logos.map((logo, index) => (
          <Box
            key={index}
            bg="white"
            borderRadius="md"
            boxShadow="md"
            p={{ base: 2, md: 3 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            width={{ base: "80px", md: "100px", lg: "120px" }}
            height={{ base: "80px", md: "100px", lg: "120px" }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              objectFit="contain"
              maxH="100%"
              maxW="100%"
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default BrandSection;
