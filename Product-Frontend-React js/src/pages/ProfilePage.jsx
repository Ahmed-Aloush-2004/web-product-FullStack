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

function ProfilePage() {
  const {user} = useSelector((state) => state.userInfo);
  const [editedData, setEditedData] = useState(user);
  const [save, setSave] = useState(false);
  const dispatch = useDispatch();
  const { isError, error, isLoading, data, refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      return data;
    },
    onSuccess: (data) => {
      setEditedData(data);
      console.log("data", data);
      dispatch(setUserInfo(data));
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
        "https://jsonplaceholder.typicode.com/users/1",
        {
          method: "PUT",
          body: JSON.stringify(editedData),
          headers: {
            "Content-Type": "application/json",
          },
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
      dispatch(setUserInfo(editedData));

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
            inputValue={editedData?.name}
            inputName={"username"}
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
            inputValue={editedData?.Address || "Damascus ,Damascuse,Syria"}
            inputName={"Address"}
            handleEditeData={handleEditeData}
          />
          <ProfileItem
            LabelContent={"Phone Number"}
            RightIcon={FaPhone}
            inputValue={editedData?.phone}
            inputName={"phone"}
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
