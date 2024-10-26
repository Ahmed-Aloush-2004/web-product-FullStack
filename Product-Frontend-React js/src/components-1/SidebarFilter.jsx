import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorMode,
  Flex,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import React from "react";
import RangeComponent from "./RangeComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  setBrand,
  setCategory,
  setPrice,
  setSearch,
} from "../store/FilterAndPaginationSlice";
import SelectComponent from "./SelectComponent";

function SidebarFilter() {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const { brand, category, search, priceRange } = useSelector(
    (state) => state.filterAndPagination
  );
  const bgColor = colorMode === "light" ? "gray.200" : "gray.700";

  return (
    <Box bg={bgColor} p={5} width="100%">
      <Flex
        direction={{ base: "row", md: "column" }} // Row layout on mobile, column layout on larger screens
        align={{ base: "center", md: "flex-start" }}
        wrap="wrap"
        gap={4}
      >
        <Text fontSize="2xl" fontWeight="bold">
          Filter
        </Text>

        {/* Search */}
        <FormControl width={{ base: "auto", md: "100%" }}>
          <FormLabel fontSize="lg">Search</FormLabel>
          {/* <InputGroup display="flex" alignItems="center" gap={2}>
            <Input
              size="sm"
              onChange={(e) => dispatch(setSearch(e.target.value))}
              placeholder="Search products..."
            /> */}
          <InputGroup
            display={"flex"}
            alignItems={"center"}
            gap={2}
            borderRadius={"md"}
          >
            <Input
              size="md"
              padding={"10px 20px"}
              borderRadius={"md"}
              width={"100%"}
              onChange={(e) => dispatch(setSearch(e.target.value))}
              placeholder="Search products..."
              outline={"none"}
            />

            <InputRightElement
              background={"gray.300"}
              height={"100%"}
              padding={"10px"}
              borderTopRightRadius={"md"}
              borderBottomRightRadius={"md"}
              cursor={"pointer"}
              transition={"all 0.4s ease"}
              _hover={{ background: "gray.400" }}
            >
              <FaSearch />
            </InputRightElement>
          </InputGroup>
        </FormControl>

        {/* Category Filter */}
        <SelectComponent
          title="Category"
          options={["electronics", "fashion", "home"]}
          onChange={(e) => dispatch(setCategory(e.target.value))}
        />
        <SelectComponent
          title="Brand"
          options={["Apple", "Samsung", "Nokia"]}
          onChange={(e) => dispatch(setBrand(e.target.value))}
        />

        {/* Price Filter */}
        <Box width={{ base: "auto", md: "100%" }}>
          <Text fontSize="lg" fontWeight="bold" color="gray.600">
            Price
          </Text>
          <RangeComponent
            min={priceRange.low}
            max={priceRange.high}
            step={1}
            onChange={(newValue) => dispatch(setPrice(newValue))}
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default SidebarFilter;

// import {
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   InputRightElement,
//   Stack,
//   Text,
//   useColorMode,
// } from "@chakra-ui/react";
// import { FaSearch } from "react-icons/fa";
// import React from "react";
// import RangeComponent from "./RangeComponent";
// import { useDispatch, useSelector } from "react-redux";
// import { setBrand, setCategory, setPrice, setSearch } from "../store/FilterAndPaginationSlice";
// import SelectComponent from "./SelectComponent";

// function SidebarFilter() {
//   const { colorMode } = useColorMode();
//   const dispatch = useDispatch();
//   const { brand, category, search, priceRange } = useSelector(
//     (state) => state.filterAndPagination
//   );
//   const bgColor = colorMode === "light" ? "gray.200" : "gray.700";

//   return (
//     <Box bg={bgColor} p={5} width="100%">
//       <Stack spacing={6}>
//         <Text fontSize="3xl" fontWeight="bold">
//           Filter
//         </Text>

//         {/* Search */}
//         <FormControl>
//           <FormLabel fontSize="xl">Search</FormLabel>
//           <InputGroup display="flex" alignItems="center" gap={2}>
//             <Input
//               size="md"
//               onChange={(e) => dispatch(setSearch(e.target.value))}
//               placeholder="Search products..."
//             />
//             <InputRightElement cursor="pointer" _hover={{ background: "gray.400" }}>
//               <FaSearch />
//             </InputRightElement>
//           </InputGroup>
//         </FormControl>

//         {/* Category Filter */}
//         <SelectComponent
//           title="Category"
//           options={["electronics", "fashion", "home"]}
//           onChange={(e) => dispatch(setCategory(e.target.value))}
//         />
//         <SelectComponent
//           title="Brand"
//           options={["Apple", "Samsung", "Nokia"]}
//           onChange={(e) => dispatch(setBrand(e.target.value))}
//         />

//         {/* Price Filter */}
//         <Box py={2}>
//           <Text fontSize="2xl" fontWeight="bold" color="gray.600">
//             Price
//           </Text>
//           <RangeComponent
//             min={priceRange.low}
//             max={priceRange.high}
//             step={1}
//             onChange={(newValue) => dispatch(setPrice(newValue))}
//           />
//         </Box>
//       </Stack>
//     </Box>
//   );
// }

// export default SidebarFilter;

// // import {
// //   Box,
// //   FormControl,
// //   FormLabel,
// //   Input,
// //   InputGroup,
// //   InputRightElement,
// //   Select,
// //   Stack,
// //   Text,
// //   useColorMode,
// // } from "@chakra-ui/react";
// // import React, { useState } from "react";
// // import RangeComponent from "./RangeComponent";
// // import {
// //   FaArrowAltCircleUp,
// //   FaRegArrowAltCircleUp,
// //   FaSearch,
// // } from "react-icons/fa";
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   setBrand,
// //   setCategory,
// //   setPrice,
// //   setSearch,
// // } from "../store/FilterAndPaginationSlice";
// // import SelectComponent from "./SelectComponent";

// // function SidebarFilter() {
// //   const { colorMode } = useColorMode();
// //   const dispatch = useDispatch();
// //   const { brand, category, search, priceRange } = useSelector(
// //     (state) => state.filterAndPagination
// //   );
// //   // useDispatch();
// //   const bgColor = colorMode === "light" ? "gray.200" : "gray.700";

// //   // State for price range
// //   //   const [priceRange, setPriceRange] = useState([10, 40]);

// //   return (
// //     <Box bg={bgColor} p={5} >
// //       <Stack spacing={6}>
// //         <Text fontSize="3xl" fontWeight="bold">
// //           Filter
// //         </Text>

// //         {/* Search */}
// //         <FormControl>
// //           <FormLabel fontSize={"2xl"}>Search</FormLabel>
// //           <InputGroup
// //             display={"flex"}
// //             alignItems={"center"}
// //             gap={2}
// //             borderRadius={"md"}
// //           >
// //             <Input
// //               size="md"
// //               padding={"10px 20px"}
// //               borderRadius={"md"}
// //               width={"100%"}
// //               onChange={(e) => dispatch(setSearch(e.target.value))}
// //               placeholder="Search products..."
// //               outline={"none"}
// //             />
// //             <InputRightElement
// //               background={"gray.300"}
// //               height={"100%"}
// //               padding={"10px"}
// //               borderTopRightRadius={"md"}
// //               borderBottomRightRadius={"md"}
// //               cursor={"pointer"}
// //               transition={"all 0.4s ease"}
// //               _hover={{ background: "gray.400" }}
// //             >
// //               <FaSearch />
// //             </InputRightElement>
// //           </InputGroup>
// //         </FormControl>

// //         {/* Category Filter */}
// //         <SelectComponent
// //           title="Category"
// //           options={["electronics", "fashion", "home"]}
// //           onChange={(e) => dispatch(setCategory(e.target.value))}
// //         />
// //         <SelectComponent
// //           title="Brand"
// //           options={["Apple", "Samsung", "Nokia"]}
// //           onChange={(e) => dispatch(setBrand(e.target.value))}
// //         />

// //         <Box py={2} display={"flex"} flexDirection={"column"} gap={2}>
// //           {/* Title */}
// //           <Text fontSize="3xl" fontWeight="bold" color="gray.600">
// //             Price
// //           </Text>

// //           {/* Range Slider */}
// //           <RangeComponent
// //             min={priceRange.low}
// //             max={priceRange.high}
// //             step={1}
// //             onChange={(newValue) => dispatch(setPrice(newValue))}
// //           />
// //         </Box>
// //       </Stack>
// //     </Box>
// //   );
// // }

// // function PriceFilter() {
// //   const { priceRange } = useSelector((state) => state.filter);

// //   const dispatch = useDispatch();

// //   return (
// //     <Box py={2} display={"flex"} flexDirection={"column"} gap={2}>
// //       {/* Title */}
// //       <Text fontSize="3xl" fontWeight="bold" color="gray.600">
// //         Price
// //       </Text>

// //       {/* Range Slider */}
// //       <RangeComponent
// //         min={priceRange.low}
// //         max={priceRange.high}
// //         step={1}
// //         onChange={(newValue) => dispatch(setPrice(newValue))}
// //       />
// //     </Box>
// //   );
// // }

// // export default SidebarFilter;
