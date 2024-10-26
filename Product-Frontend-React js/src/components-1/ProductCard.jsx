import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import { AddAndRemoveWashList } from "../store/WashListSlice";
import { AddAndRemoveCartList } from "../store/CartSlice";
function ProductCard({item}) {
  // const [isWashlist, setIsWashlist] = useState(false);
const dispatch = useDispatch();
const {washList} = useSelector(state => state.washList)
const {cartList} = useSelector(state => state.cartList)
  function handleWishlist() {
  dispatch(AddAndRemoveWashList(item));
  }
  function handleCartlist() {
    dispatch(AddAndRemoveCartList(item));
    }
  return (
    <Card
      boxShadow="0px 0px 5px black"
      _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
      padding={"10px"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"10px"}
      borderRadius={"md"}
    >
      <Box width={"100%"} maxH={"200px"} overflow={"hidden"}>
    <Link to={`${3}`}>
        
        <Image
          src="https://picsum.photos/200"
          width={"100%"}
          borderRadius={"md"}
          alt="Product Image"
        />
    </Link>

      </Box>
      <CardHeader>
        <Heading fontSize={"xl"} fontWeight={"medium"} textAlign={"center"}>
          Product Name
        </Heading>
      </CardHeader>
      <CardBody>
        <Text margin={"auto"} fontSize={"md"} textAlign={"center"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo ligula eget dolor.
        </Text>

        <Text fontWeight="bold" fontSize="xl" textAlign={"center"}>
          $199.99
        </Text>
      </CardBody>
      <CardFooter width={"100%"}>
        <Box
        // textAlign={"center"}
          width={"50%"}
          margin={"auto"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={"10px"}
        >
          <Button
            colorScheme="teal"
            padding={"10px"}
            border={"2px solid"}
            borderRadius={"md"}
            fontSize={"large"}
            fontWeight={"medium"}
            onClick={handleCartlist}
            _hover={{background:"gray.200",color:cartList.some((item) => item.id === obj.id) ? "red.500" : "teal.500"}}
          >

            {!cartList.some((item) => item.id === obj.id) ? <><FaPlus /> Add to Cart</>: <><FaMinus /> Remove from Cart</>}
            
          </Button>
          <Button
            colorScheme="teal"
            padding={"10px"}
            border={"2px solid"}
            borderRadius={"md"}
            fontSize={"large"}
            fontWeight={"medium"}
            onClick={handleWishlist}
            _hover={{background:"gray.200",color:"teal.500"}}

          >
            <FaHeart color={washList.some((item) => item.id === obj.id) ? "red" : "gray"} size={25} />
          </Button>
        </Box>
      </CardFooter>
    </Card>

  );
}

export default ProductCard;
