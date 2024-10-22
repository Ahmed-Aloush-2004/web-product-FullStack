import {
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
// import { SearchIcon } from "@chakra-ui/icons";

function Search() {
  const [isLargerThan600px] = useMediaQuery("(min-width: 600px)");

  return (
    <Box
      display="flex"
      alignItems="center"
      p={2}
      backgroundColor="white"
      boxShadow="md"
      borderRadius="md"
      maxWidth={isLargerThan600px ? "500px" : "100%"}
      mx="auto"
    >
      <Select
        placeholder="All"
        w={isLargerThan600px ? "150px" : "30%"}
        borderRightRadius={0}
      >
        <option value="all">All</option>
        <option value="books">Books</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        {/* Add more categories as needed */}
      </Select>

      <InputGroup flex="1">
        <Input placeholder="Search Amazon" borderRadius={0} borderLeft="none" />
      </InputGroup>

      <Button colorScheme="orange" borderLeftRadius={0} px={6}>
        <FaSearch />
      </Button>
    </Box>
  );
}

export default Search;

// import {
//   Box,
//   HStack,
//   Input,
//   InputGroup,
//   InputLeftAddon,
//   InputRightAddon,
//   Select,
//   Text,
// } from "@chakra-ui/react";
// import React from "react";
// import { FaSearch } from "react-icons/fa";

// function Search() {
//   return (
//     <HStack
//       alignItems="center"
//       background="white"
//       height="35px"
//       width={{ base: "90%", md: "80%", lg: "50%" }}
//       borderRadius="lg"
//       boxShadow="md"
//     >
//       <InputGroup size="lg">
//         <InputLeftAddon
//           p={0}
//           border="none"
//           borderTopLeftRadius={"lg"}
//           borderBottomLeftRadius={"lg"}
//           background="teal.300"
//           height="35px"
//         >
//           <Select
//             border="none"
//             borderTopLeftRadius={"lg"}
//             borderBottomLeftRadius={"lg"}
//             background="teal.300"
//             height="35px"
//             // width={[""]}
//             color={"white"}
//             fontSize="large"
//             // fontWeight={"medium"}
//             _focus={{ outline: "none", boxShadow: "none" }}
//           >
//             <option value="">All</option>
//             <option value="option1">Option 1</option>
//             <option value="option2">Option 2</option>
//             <option value="option3">Option 3</option>
//           </Select>
//         </InputLeftAddon>
//         <Input
//           placeholder="Search for products..."
//           padding="10px 20px"
//           width={["500px","80%"]}
//           height={"35px"}
//           border="none"
//           fontSize="md"
//           _focus={{ outline: "none", boxShadow: "none" }}
//           borderRadius="none"
//         />
//         <InputRightAddon
//           background="gold"
//           border="none"
//           height="35px"
//           borderTopRightRadius={"lg"}
//           borderBottomRightRadius={"lg"}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//           cursor="pointer"
//           padding={"10px"}
//           _hover={{ background: "yellow.500" }}
//           _active={{ background: "yellow.600" }}
//         >
//           <FaSearch size={20} color="#fff" />
//         </InputRightAddon>
//       </InputGroup>
//     </HStack>
//   );
// }

// export default Search;
