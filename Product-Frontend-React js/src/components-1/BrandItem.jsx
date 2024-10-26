import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

function BrandItem({ data }) {
  const { image_url, name } = data;

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
          src={image_url}
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
        {name}
      </Text>
    </Box>
  );
}

export default BrandItem;
