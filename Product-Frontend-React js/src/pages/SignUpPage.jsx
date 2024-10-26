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
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import useToken from "../hooks/useToken";
// import { Link } from "react-router-dom";

function SignUpPage() {
  // const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useToken();

  const [userData, setuserData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const {
    mutate: signup,
    error,
    isError,
    isLoading,
    isSuccess,
    data,
  } = useMutation({
    mutationKey: "user",
    mutationFn: async (userData) => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/signup", {
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
          email: "",
          username: "",
          password: "",
        });
    },
    onSuccess: (data) => {
      toast.success("You are registered successfully"),
        setuserData({
          email: "",
          username: "",
          password: "",
        });
      setToken(data.token);
      dispatch(setToken(data.token));
      navigate("/");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    signup(userData);
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
          Sign Up
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={0}>
            <FormControl id="username">
              <FormLabel marginLeft="10px" fontSize={["sm", "md"]}>
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
            <FormControl id="email">
              <FormLabel marginLeft="10px" fontSize={["sm", "md"]}>
                Email
              </FormLabel>
              <Input
                name="email"
                value={userData.email}
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
                placeholder="Enter your email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel marginLeft="10px" fontSize={["sm", "md"]}>
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
              <Text margin={"10px 0 0 0"} color={"red.500"}>
                {isError ? error?.message : null}
              </Text>
            </FormControl>
            <Button
              type="submit"
              width={"fit-content"}
              padding={"7px 18px"}
              marginTop={"20px"}
              borderRadius={"lg"}
              background={isLoading ? "teal.300" : "teal.500"}
              _hover={{ background: "teal.300" }}
              color={"white"}
              fontSize={["xs", "large"]}
              disabled={isLoading}
            >
              {isLoading ? (
                <Spinner margin={"4px 20px"} width={"20px"} height={"20px"} />
              ) : (
                "Sign up"
              )}
            </Button>
          </Stack>
        </form>
        <Text fontSize={"sm"} mt={4} size={"lg"} color="gray.600">
          Already have an account?{" "}
          <Link to={"/login"} style={{ color: "red", fontSize: "17px" }}>
            Login
          </Link>
        </Text>
      </Box>
    </Center>
  );
}

export default SignUpPage;
