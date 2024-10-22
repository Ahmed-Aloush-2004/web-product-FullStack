import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Input,
  Button,
  IconButton,
  Link,
  HStack,
  VStack,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <Box bg="#f3f6fa">
      <Flex
        wrap="wrap"
        w="100%"
        mx="auto"
        borderBottom="1px solid"
        borderColor="gray.200"
        p={{ base: 6, md: 10, lg: 16 }}
        justifyContent={"space-between"}
      >
        {/* Logo & Contact Info */}
        <Box
        //   w={{ base: "100%", lg: "33.33%", sm: "100%" }}
          mb={{ base: 6, lg: 0 }}
        >
          <VStack align="flex-start" spacing={3}>
            <Image
              src="../../public/bc051633-c226-45e6-a92f-6538acc3e7c2.webp"
              alt="Logo"
              w="190px"
              h="100px"
            />
            <VStack align="flex-start" spacing={2} color="gray.600">
              <Text>Address: Damascus, Syria</Text>
              <Text>Phone: 0988795525</Text>
              <Text>Email: support@easylearningbg.com</Text>
            </VStack>
          </VStack>
        </Box>

        {/* Useful Links */}
        {/* 
         <Box w={{ base: "100%", lg: "41.66%" }} mb={{ base: 6, lg: 0 }}>
            
            */}
        <Box  mb={{ base: 6, lg: 0 }}>
          <Flex
            justify={{ base: "flex-start", lg: "center" }}
            mt={{ base: 6, lg: 0 }}
          >
            <VStack align="flex-start">
              <Text fontWeight="bold" fontSize="lg" mb={2}>
                Useful Links
              </Text>
              <Flex gap={{ base: 10, lg: 10 }} flexWrap="wrap">
                <VStack
                  align="flex-start"
                  spacing={2}
                  fontSize="sm"
                  fontWeight="semibold"
                  color="gray.600"
                >
                  <Link>About Us</Link>
                  <Link>About Our Shop</Link>
                  <Link>Delivery Information</Link>
                  <Link>Privacy Policy</Link>
                  <Link>Blogs</Link>
                </VStack>
                <VStack
                  align="flex-start"
                  spacing={2}
                  fontSize="sm"
                  fontWeight="semibold"
                  color="gray.600"
                >
                  <Link>Our Service</Link>
                  <Link>Company Profile</Link>
                  <Link>Delivery Information</Link>
                  <Link>Privacy Policy</Link>
                  <Link>Blogs</Link>
                </VStack>
              </Flex>
            </VStack>
          </Flex>
        </Box>

        {/* Newsletter & Social Links */}
        <Box 
        // w={{ base: "100%", lg: "35%" }}
        >
          <VStack align="flex-start" spacing={5}>
            <Text fontWeight="bold" fontSize="lg" mb={2}>
              Join Our Shop
            </Text>
            <Text>Get Email updates about our latest and special offers.</Text>
            <Box position="relative" w="100%">
              <InputGroup>
                <Input
                width={"100%"}
                  placeholder="Enter Your Email"
                  padding={"10px"}
                  outline={"none"}
                  borderColor="gray.300"
                  bg="white"
                  // pr="110px"
                />
                <InputRightAddon>
                  <Button

                    h="full"
                    bg="#059473"
                    color="white"
                    fontWeight="bold"
                    textTransform="uppercase"
                    px={4}
                    _hover={{ bg: "#047d5e" }}
                  >
                    Subscribe
                  </Button>
                </InputRightAddon>
              </InputGroup>
            </Box>
            <HStack spacing={3}>
              <IconButton
                as="a"
                href="#"
                aria-label="Facebook"
                icon={<FaFacebookF />}
                bg="white"
                rounded="full"
                w="38px"
                h="38px"
                _hover={{ bg: "#059473", color: "white" }}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaXTwitter />}
                bg="white"
                rounded="full"
                w="38px"
                h="38px"
                _hover={{ bg: "#059473", color: "white" }}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                bg="white"
                rounded="full"
                w="38px"
                h="38px"
                _hover={{ bg: "#059473", color: "white" }}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="GitHub"
                icon={<FaGithub />}
                bg="white"
                rounded="full"
                w="38px"
                h="38px"
                _hover={{ bg: "#059473", color: "white" }}
              />
            </HStack>
          </VStack>
        </Box>
      </Flex>

      {/* Footer Bottom */}
      <Box py={5} bg="#f3f6fa">
        <Text textAlign="center" color="gray.600">
          &copy; 2024 All Rights Reserved. This Store was being Made by Ahmed
          Alloush
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
