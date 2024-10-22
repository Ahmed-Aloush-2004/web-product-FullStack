import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

function BrandItem() {
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
      // margin={"0px 30px"}
    >
      <Box w="100%" overflow={"hidden"}>
        <Image
          src="https://picsum.photos/200/300"
          alt="Brand Item"
          w="100%"
          h="200px"
          objectFit="cover"
          _hover={{ transform: "scale(1.2)" }}
          transition={"all 0.4s ease"}
          // transform={"scale(1.1)"}
        />
      </Box>
      <Text fontSize="xl" fontWeight="bold" my="4">
        Brand Name
      </Text>
    </Box>
  );
}

export default BrandItem;
