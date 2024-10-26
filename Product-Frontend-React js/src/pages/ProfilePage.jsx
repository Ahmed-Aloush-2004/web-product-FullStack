import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Spinner,
} from "@chakra-ui/react";
import { FaPhone, FaX } from "react-icons/fa6";
import React, { useState } from "react";
import {
  FaAddressCard,
  FaBuilding,
  FaCheck,
  FaCity,
  FaEdit,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaMapPin,
  FaStreetView,
  FaUser,
  FaUserCircle,
  FaUserTag,
} from "react-icons/fa";
// import {  } from "react-loader-spinner";
import { FaFileZipper, FaMapLocationDot } from "react-icons/fa6";
import { useMutation, useQuery } from "react-query";
import ProfileItem from "../components-1/ProfileItem";
import { CircleLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../store/UserSlice";
import useToken from "../hooks/useToken";

function ProfilePage() {
  const [editedData, setEditedData] = useState({
    fullname: "",
    address: "",
    phonenumber: "",
    username: "",
    email: "",
  });
  const [save, setSave] = useState(false);
  const [token, setToken] = useToken();
  const {
    isError,
    error,
    isLoading,
    data: user,
    refetch,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      return data;
    },
    onSuccess: (data) => {
      const { fullname, address, phonenumber, username, email } = data;

      // Update the state correctly with the individual properties
      setEditedData((prevState) => ({
        ...prevState,
        fullname,
        address,
        phonenumber,
        username,
        email,
      }));
      console.log("Updated userData", {
        fullname,
        address,
        phonenumber,
        username,
        email,
      });
    },
  });

  const {
    mutate,
    isLoading: isUpdateLoading,
    error: updateError,
  } = useMutation({
    mutationKey: ["profile"],
    mutationFn: async (editedData) => {
      const response = await fetch(
        "http://localhost:5000/api/auth/editUserProfile",
        {
          method: "PUT",
          headers: {
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(editedData),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      return data;
    },
    onSuccess: () => {
      toast.success("Profile updated successfully");
      setSave(false);
      // dispatch(setUserInfo(editedData));

      // refetch();
    },
  });
  function handleEditeData(e) {
    setEditedData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setSave(true);
  }

  function handleUpdate() {
    if (save) {
      console.log("these are the data whick i send to the backend", editedData);

      mutate(editedData);
    }
  }
  if (isLoading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width={"100%"}
      >
        <CircleLoader color="#4FD1C5" size={150} speedMultiplier={0.75} />{" "}
      </Box>
    );
  return (
    <Box
      h="100vh"
      w="100vw"
      display="flex"
      justifyContent="center"
      background="teal.300"
    >
      <Box
        alignSelf={"start"}
        maxW="80%"
        width={{ base: "90%", md: "60%" }}
        borderWidth="1px"
        borderRadius="lg"
        p="4"
        pb={"8"}
        background="white"
        boxShadow="0px 0px 10px black"
        margin={"auto"}
      >
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight={{ base: "medium", md: "bold" }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
        >
          <FaUserCircle size="30" /> User Profile
        </Heading>
        <Box mt="4" display={"flex"} flexDirection={"column"} gap={3}>
          <ProfileItem
            LabelContent={"Full Name"}
            RightIcon={FaUser}
            inputValue={editedData?.fullname}
            inputName={"fullname"}
            handleEditeData={handleEditeData}
          />{" "}
          <ProfileItem
            LabelContent={"UserName"}
            RightIcon={FaUser}
            inputValue={editedData?.username}
            inputName={"username"}
            handleEditeData={handleEditeData}
          />
          <ProfileItem
            LabelContent={"Email"}
            RightIcon={FaEnvelope}
            inputValue={editedData?.email}
            inputName={"email"}
            handleEditeData={handleEditeData}
          />
          <ProfileItem
            LabelContent={"Address"}
            RightIcon={FaMapLocationDot}
            inputValue={editedData?.address}
            inputName={"address"}
            handleEditeData={handleEditeData}
          />
          <ProfileItem
            LabelContent={"Phone Number"}
            RightIcon={FaPhone}
            inputValue={editedData?.phonenumber}
            inputName={"phonenumber"}
            handleEditeData={handleEditeData}
          />
          {save && (
            <Box
              my={"5"}
              display={"flex"}
              justifyContent={"center"}
              gap={{ base: "5", md: "10" }}
              alignItems={"center"}
            >
              <Button
                fontSize={"md"}
                fontWeight={"medium"}
                onClick={() => setSave(false)}
                background={"red"}
                padding={"8px 16px"}
                color={"white"}
                display={"flex"}
                alignItems={"center"}
                gap={3}
                borderRadius={5}
                _hover={{ background: "red.600" }}
              >
                <FaX size={25} />
                Cancel
              </Button>
              <Button
                fontSize={"md"}
                fontWeight={"medium"}
                onClick={handleUpdate}
                background={"green.600"}
                padding={"8px 16px"}
                color={"white"}
                display={"flex"}
                alignItems={"center"}
                gap={3}
                borderRadius={5}
                _hover={{ background: "green.800" }}
              >
                Save <FaCheck size={25} />
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default ProfilePage;
