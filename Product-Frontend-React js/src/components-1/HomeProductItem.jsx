import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";

function HomeProductItem({ data }) {
  const {
    image,
    name,
    reviews,
    category,
    oldPrice,
    newPrice,
    description,
    brand,
  } = data;

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
      <Box w="100%" overflow={"hidden"} borderRadius={"md"}>
        <Image
          src={image}
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
        {name}
      </Text>
      <Box display="flex" alignItems="center" mt="2">
        {Array(5)
          .fill()
          .map((_, index) => {
            const fullStar = index + 1 <= reviews; // Full star condition
            const halfStar = index + 0.5 === reviews; // Half star condition
            return (
              <>
                {fullStar ? (
                  <FaStar key={index} color="yellow" />
                ) : halfStar ? (
                  <FaStarHalf key={index} color="yellow" />
                ) : (
                  <FaStar key={index} color="gray" />
                )}
              </>
            );
          })}
        <Text ml="2" fontSize="sm">
          {reviews}
        </Text>
      </Box>
      <Box display={"flex"} gap={2} alignItems={"center"} fontSize="lg" mt="2">
        {oldPrice > newPrice && <del>${oldPrice} </del>}
        {"  "} ${newPrice} {oldPrice > newPrice && <MdDiscount color="red" />}
      </Box>
      <Text fontSize="sm" mt="2">
        Category:{category.name}
      </Text>
      <Text fontSize="sm" mt="2">
        Brand:{brand.name}
      </Text>
    </Box>
  );
}

export default HomeProductItem;
