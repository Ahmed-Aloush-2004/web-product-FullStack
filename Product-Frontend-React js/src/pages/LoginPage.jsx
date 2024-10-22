// App.js
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Heading,
  Text,
  Spinner,
  LinkBox,
  Flex,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { setTokenToLocalStorage } from "../utils/dealWithLocalStorage";
import { useDispatch } from "react-redux";
import { setToken } from "../store/UserSlice";
// import { Link } from "react-router-dom";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setuserData] = useState({
    username: "",
    password: "",
  });
  const {
    mutate: login,
    error,
    isError,
    isLoading,
    isSuccess,
    data,
  } = useMutation({
    mutationKey: "user",
    mutationFn: async (userData) => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);

        return data;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    onError: (error) => {
      toast.error(error.message),
        setuserData({
          username: "",
          password: "",
        });
    },
    onSuccess: (data) => {
      toast.success("You are logged in successfully"),
        setuserData({
          username: "",
          password: "",
        });
      setTokenToLocalStorage(data.token);
      dispatch(setToken(data.token))
      navigate("/");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  function handleUserDataChange(e) {
    setuserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <Center minH="100vh" bg="gray.50" px={4}>
      <Box
        maxW={{ base: "full", sm: "400px" }}
        w="full"
        bg="white"
        p={{ base: 6, sm: 8, md: 10 }}
        rounded="lg"
        boxShadow="lg"
      >
        <Heading
          as="h1"
          color="gray.600"
          fontSize={["2xl", "2xl", "2xl", "3xl"]}
          fontWeight="bold"
          mb={6}
          textAlign="center"
        >
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={0}>
            <FormControl id="username">
              <FormLabel marginLeft="10px" fontSize={["md"]}>
                Username
              </FormLabel>
              <Input
                name="username"
                value={userData.username}
                onChange={(e) => {
                  handleUserDataChange(e);
                }}
                width="100%"
                margin="10px 0"
                padding="10px"
                outlineColor="gray.500"
                borderRadius="lg"
                border="1px solid"
                borderColor="gray.200"
                transition="all 0.3s ease"
                type="text"
                placeholder="Enter your username"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel marginLeft="10px" fontSize={["md"]}>
                Password
              </FormLabel>
              <InputGroup display={"flex"} alignItems={"center"}>
                <Input
                  name="password"
                  value={userData.password}
                  onChange={(e) => {
                    handleUserDataChange(e);
                  }}
                  width="100%"
                  padding="10px"
                  margin="10px 0"
                  outlineColor="gray.500"
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="gray.200"
                  transition="all 0.3s ease"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <InputRightElement h={"full"} width="3rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={togglePasswordVisibility}
                    variant="ghost"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Text color={"red.600"} fontSize={["sm", "medium"]}>
              {isError && error?.message}
            </Text>
            <Button
              type="submit"
              width={"fit-content"}
              padding={"7px 18px"}
              marginTop={"20px"}
              borderRadius={"lg"}
              background={isLoading ? "teal.300" : "teal.500"}
              _hover={{ background: "teal.300" }}
              color={"white"}
              fontSize={["medium", "xl"]}
              disabled={isLoading}
            >
              {isLoading ? (
                <Spinner margin={"5px 15px"} width={"20px"} height={"20px"} />
              ) : (
                "Login"
              )}
            </Button>
          </Stack>
        </form>
        <Text
          fontSize={["small", "sm", "medium"]}
          mt={4}
          size={"lg"}
          color="gray.600"
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          gap={"1"}
        >
          Don’t have an account?{" "}
          <LinkBox color={"red"} fontWeight={["normal", "medium"]}>
            <Link to={"/signup"}>Sign Up</Link>
          </LinkBox>
        </Text>
      </Box>
    </Center>
  );
}

export default LoginPage;
