import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaStar } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";

function HomeProductItem({ isDiscount }) {
  return (
    <Box
      boxShadow="md"
      width={{ base: "90%", md: "300px" }}
      p={"4"}
      borderRadius="md"
      bg="white"
      display="flex"
      flexDirection="column"
      alignItems="center"
      cursor={"pointer"}
      margin={"0px 30px"}
    >
      <Box w="100%" overflow={"hidden"} 
      borderRadius={"md"}
      
      >
        <Image
          src="https://picsum.photos/200/300"
          alt="product"
          w="100%"
          h="200px"
          objectFit="cover"
          _hover={{ transform: "scale(1.2)" }}
          transition={"all 0.4s ease"}
          borderRadius={"md"}
          // transform={"scale(1.1)"}
        />
      </Box>
      <Text fontSize="xl" fontWeight="bold" mt="4">
        Product Name
      </Text>
      <Box display="flex" alignItems="center" mt="2">
        <FaStar color="yellow" />
        <FaStar color="yellow" />
        <FaStar color="yellow" />
        <FaStar color="gray" />
        <FaStar color="gray" />
        <Text ml="2" fontSize="sm">
          4.5/5
        </Text>
      </Box>
      <Box display={"flex"} gap={2} alignItems={"center"} fontSize="lg" mt="2">
        {isDiscount && <del>$200  </del>}
        {"  "} $100.00 {isDiscount && <MdDiscount color="red" />}
      </Box>
      <Text fontSize="sm" mt="2">
        Category: Electronics
      </Text>
    </Box>
  );
}

export default HomeProductItem;
