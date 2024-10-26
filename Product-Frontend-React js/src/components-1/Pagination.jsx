import { HStack, Button, Box, Text, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons from react-icons

function Pagination({ currentPage, setCurrentPage, totalPages = 20 }) {
  // const [currentPage, setCurrentPage] = useState(1);
  // const totalPages = 20; // Example total pages

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Box w="100%" p={4} bg="gray.50" borderRadius="lg" shadow="md">
      <HStack justifyContent="center" spacing={6} alignItems="center">
        {/* Previous Button with Square Shape */}
        <Button
          onClick={handlePrev}
          isDisabled={currentPage === 1}
          colorScheme="teal"
          variant="outline"
          size="lg"
          width="50px" // Set width to make it square
          height="50px" // Set height to make it square
          border="2px solid"
          borderColor="teal.500"
          borderRadius="md" // Small radius for slight rounding, or "0" for full square
          _hover={{
            bg: "teal.600",
            color: "white",
            transform: "scale(1.05)",
          }}
          _disabled={{
            bg: "gray.200",
            cursor: "not-allowed",
            opacity: 0.7,
          }}
        >
          <Icon as={FaArrowLeft} />
        </Button>

        {/* Current Page Indicator */}
        <Text fontSize="xl" fontWeight="bold" color="teal.700" whiteSpace={"nowrap"}>
          Page {currentPage} of {totalPages}
        </Text>

        {/* Next Button with Square Shape */}
        <Button
          onClick={handleNext}
          isDisabled={currentPage === totalPages}
          colorScheme="teal"
          variant="solid"
          size="lg"
          width="50px"
          height="50px"
          border="2px solid"
          borderColor="teal.500"
          borderRadius="md"
          _hover={{
            bg: "teal.600",
            transform: "scale(1.05)",
          }}
          _disabled={{
            bg: "gray.200",
            cursor: "not-allowed",
            opacity: 0.7,
          }}
        >
          <Icon as={FaArrowRight} />
        </Button>
      </HStack>
    </Box>
  );
}

export default Pagination;
