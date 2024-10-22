import {
  Box,
  Button,
  HStack,
  IconButton,
  Image,
  VStack,
  Collapse,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillProject } from "react-icons/ai";
import {
  FaHeart,
  FaHome,
  FaShoppingCart,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdContacts } from "react-icons/io";
import { MdLocalOffer, MdAdminPanelSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
} from "../utils/dealWithLocalStorage";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loggedOut, setUserInfo } from "../store/UserSlice";
import { useQuery } from "react-query";
const items = [
  { content: "Home", route: "/" },
  { content: "Products", route: "/products" },
  { content: "Offers", route: "/offers" },
  { content: "Contact", route: "/contact" },
];

function NavBar({ handleToggleNavbar }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { token, user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const isAdmin = true;
  const washListNumber = 3;

  const { isLoading, error, data } = useQuery({
    queryKey: "getUser",
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
      dispatch(setUserInfo(data));
    },
  });

  const handleLogout = () => {
    dispatch(loggedOut());
    toast.success("You are logged out successfully");
  };

  return (
    <Box width="100%" background="white">
      <Box
        width="100%"
        maxWidth="1200px"
        mx="auto"
        background="teal.200"
        padding={{ base: "0px 10px", md: "0px 20px" }}
      >
        <HStack
          display="flex"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
          paddingY={3}
        >
          {/* Logo */}
          <Box height="50px" width="100px" flexShrink={0}>
            <Image
              width="100%"
              height="100%"
              objectFit="cover"
              src="../../public/bc051633-c226-45e6-a92f-6538acc3e7c2.webp"
              alt="Logo"
            />
          </Box>

          {/* Hamburger Icon */}
          <IconButton
            icon={<GiHamburgerMenu size={30} />}
            display={{ base: "inline-flex", md: "none" }}
            onClick={handleToggleNavbar}
            aria-label="Toggle Navigation"
            background="transparent"
            _hover={{ background: "teal.300" }}
            size="lg"
          />

          {/* Desktop Menu */}
          <HStack
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            // justifyContent={"space-evenly"}
            // gap={{ md: "7", lg: "10", xl:token ? "100px": "20" }}
            gap={
              !token
                ? { md: "120px", lg: "180px", xl: "220px" }
                : { md: "5", lg: "7", xl: "10" }
            } // Adjust gap based on token
            flex="1"
            justify="flex-end"
          >
            {/* Navigation Items */}
            <HStack
              display="flex"
              alignItems="center"
              gap={{ md: "3", lg: "5", xl: "10" }}
            >
              {items.map((item, index) => (
                <Box
                  fontSize={"md"}
                  fontWeight="medium"
                  key={index}
                  transition="all 0.4s ease"
                  _hover={{ color: "white" }}
                >
                  <Link to={item.route}>{item.content}</Link>
                </Box>
              ))}
            </HStack>

            {/* User and Cart Section */}
            <HStack
              display="flex"
              alignItems="center"
              // gap={{ base: "5", lg: "10" }}
              gap={token ? { base: "7", lg: "10" } : { base: "5", lg: "7" }} // Adjust gap based on token
              ml={
                token
                  ? { base: "5", lg: "10", xl: "15" }
                  : { base: "3", lg: "5", xl: "7" }
              } // Optionally add margin for spacing
            >
              {token ? (
                <Box
                  whiteSpace="nowrap"
                  overflow="hidden"
                  fontSize="md"
                  fontWeight="medium"
                >
                  Hello, {user.username || "user"}
                </Box>
              ) : (
                <Box
                  fontSize="md"
                  fontWeight="medium"
                  padding="5px 10px"
                  background="teal.300"
                  borderRadius="lg"
                  transition="all 0.4s ease"
                  _hover={{ boxShadow: "0px 0px 10px black" }}
                  cursor="pointer"
                >
                  <Link to="/signup">Sign Up</Link>
                </Box>
              )}
              <Box
                display="flex"
                alignItems="center"
                gap={{ base: "5", md: "7" }}
              >
                <Box position="relative">
                  <FaHeart size={20} />
                  <Box
                    position="absolute"
                    top="-15px"
                    right="-15px"
                    background="red"
                    color="white"
                    fontWeight="md"
                    padding="2px 8px"
                    borderRadius="50%"
                  >
                    {washListNumber}
                  </Box>
                </Box>
                <Box position="relative">
                  <FaShoppingCart size={20} />
                  <Box
                    position="absolute"
                    top="-15px"
                    right="-15px"
                    background="red"
                    color="white"
                    fontWeight="md"
                    padding="2px 8px"
                    borderRadius="full"
                  >
                    {washListNumber}
                  </Box>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" gap={5}>
                {user && token && (
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={1}
                    fontSize="md"
                    fontWeight="medium"
                  >
                    <FaUser />
                    <Link to="/profile">Profile</Link>
                  </Box>
                )}
                {user && token && isAdmin && (
                  <Box
                    fontSize={{ md: "sm", lg: "md", xl: "md" }}
                    fontWeight="medium"
                    display="flex"
                    alignItems="center"
                    gap={1}
                  >
                    <MdAdminPanelSettings
                      size={20}
                      style={{ flexShrink: "0" }}
                    />
                    <Link to="/admin/dashboard" style={{ textWrap: "nowrap" }}>
                      Admin Dashboard
                    </Link>
                  </Box>
                )}
                {token && (
                  <Button
                    fontSize="md"
                    fontWeight="medium"
                    padding="5px 10px"
                    background="teal.300"
                    borderRadius="lg"
                    transition="all 0.4s ease"
                    _hover={{ boxShadow: "0px 0px 10px black" }}
                    cursor="pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                )}
              </Box>
            </HStack>
          </HStack>
        </HStack>

        {/* Mobile Menu (Collapsible) */}
        <Collapse in={isMobileMenuOpen} animateOpacity>
          <VStack
            display={{ md: "none" }}
            background="teal.200"
            align="start"
            padding="10px"
            spacing={4}
          >
            {items.map((item, index) => (
              <Link
                to={item.route}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Box
                  fontSize="md"
                  fontWeight="medium"
                  _hover={{ color: "white" }}
                >
                  {item.content}
                </Box>
              </Link>
            ))}
            {token ? (
              <Box>Hello, {user?.username}</Box>
            ) : (
              <Link to="/signup">
                <Box
                  fontSize="md"
                  fontWeight="medium"
                  padding="5px 10px"
                  background="teal.300"
                  borderRadius="lg"
                  _hover={{ boxShadow: "0px 0px 10px black" }}
                >
                  Sign Up
                </Box>
              </Link>
            )}
            {token && (
              <Box>
                <Link to="/profile">Profile</Link>
                <Box
                  fontSize={{ base: "sm", lg: "md" }}
                  fontWeight={{ lg: "sm", xl: "medium" }}
                >
                  {isAdmin && (
                    <Link to="/admin/dashboard">Admin Dashboard</Link>
                  )}
                </Box>
                <Button
                  fontSize="md"
                  fontWeight="medium"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Box>
            )}
          </VStack>
        </Collapse>
      </Box>
    </Box>
  );
}

export default NavBar;

// import { Box, Button, HStack, IconButton, Image } from "@chakra-ui/react";
// import React from "react";
// import { AiFillProject } from "react-icons/ai";
// import {
//   FaHeart,
//   FaHome,
//   FaShoppingCart,
//   FaSignOutAlt,
//   FaUser,
// } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoMdContacts } from "react-icons/io";
// import { MdLocalOffer } from "react-icons/md";
// import { MdAdminPanelSettings } from "react-icons/md";
// import { Link } from "react-router-dom";
// const items = [
//   { content: "Home", route: "/" },
//   { content: "Products", route: "/products" },
//   { content: "Offers", route: "/offers" },
//   { content: "Contact", route: "/contact" },
// ];
// function NavBar({ handleToggleNavbar }) {
//   const user = true;
// const isAdmin = true;
//   let washListNumber = 3;
//   return (
//     <Box width={"100%"} background={"white"}>
//       <Box width={"80%"} mx={"auto"} background={"teal.200"} padding={{base:"0px 10px",md:"0px 20px"}}>
//         <HStack
//           display={"flex"}
//           width={"100%"}
//           alignItems={"center"}
//           justifyContent={"space-between"}
//         >
//           <Box height={"50px"} width={"100px"}>
//             <Image
//               width={"100%"}
//               height={"100%"}
//               objectFit={"cover"}
//               src="../../public/bc051633-c226-45e6-a92f-6538acc3e7c2.webp"
//             />
//           </Box>
//           <IconButton
//             icon={<GiHamburgerMenu size={30} />}
//             display={["inline-block", "inline-block", "none"]}
//             onClick={handleToggleNavbar}
//             cursor={"pointer"}
//             padding={"5px"}
//             borderRadius={"lg"}
//             background={"transparent"}
//             zIndex="32"
//             size="lg"
//           />
//           <HStack
//             display={["none", "none", "flex"]}
//             alignItems={"center"}
//             gap={{md:"7",lg:"10",xl:"20"}}
//           >
//             <HStack display={"flex"} alignItems={"center"} gap={{md:"5",lg:"10"}}>
//               {items.map((item, index) => (
//                 <Box
//                   fontSize={{"lg":"md"}}
//                   fontWeight={["medium"]}
//                   key={index}
//                   transition={"all 0.4s ease"}
//                   _hover={{ color: "white" }}
//                 >
//                   <Link to={item.route}>{item.content}</Link>
//                 </Box>
//               ))}
//             </HStack>

//             <HStack display={"flex"} alignItems={"center"} gap={{base:"5",md:"10"}}>
//               {user ? (
//                 <Box>Hello, Ahmed</Box>
//               ) : (
//                 <Box
//                   fontSize={"md"}
//                   fontWeight={"medium"}
//                   padding={"5px 10px"}
//                   background={"teal.300"}
//                   borderRadius={"lg"}
//                   transition={"all 0.4s ease"}
//                   _hover={{boxShadow:"0px 0px 10px black"}}
//                   cursor={"pointer"}
//                 >
//                   <Link to="/signup">Sign Up</Link>{" "}
//                 </Box>
//               )}
//               <Box display={"flex"} alignItems={"center"} gap={{base:"5",md:"7"}}>
//                 <Box position={"relative"}>
//                   <FaHeart size={20} />
//                   <Box
//                     position={"absolute"}
//                     top={"-15px"}
//                     left={"15px"}
//                     background={"red"}
//                     color={"white"}
//                     fontWeight={"md"}
//                     padding={"2px 8px"}
//                     borderRadius={"50%"}
//                   >
//                     {washListNumber}
//                   </Box>
//                 </Box>
//                 <Box position={"relative"}>
//                   <FaShoppingCart size={20} />
//                   <Box
//                     position={"absolute"}
//                     top={"-15px"}
//                     left={"15px"}
//                     background={"red"}
//                     color={"white"}
//                     fontWeight={"md"}
//                     padding={"2px 8px"}
//                     borderRadius={"50%"}
//                   >
//                     {washListNumber}
//                   </Box>
//                 </Box>
//               </Box>
//               <Box display={"flex"} alignItems={"center"} gap={5}>
//                 <Box
//                   display={"flex"}
//                   alignItems={"center"}
//                   gap={1}
//                   fontSize={"md"}
//                   fontWeight={"medium"}
//                 >
//                   <FaUser />
//                   <Link to={"/profile"}>Profile</Link>
//                 </Box>
//                {isAdmin &&

//                 <Box
//                 fontSize={"md"}
//                 fontWeight={"medium"}
//                 display={"flex"}
//                 alignItems={"center"}
//                 gap={1}
//                 >
//                 <MdAdminPanelSettings size={20} />
//                 <Link to={"/admin/dashboard"}>Admin Dashboard</Link>
//                 </Box>
//               }
//               { user &&   <Button fontSize={"md"} fontWeight={"medium"}>
//                   Logout
//                 </Button>}
//               </Box>
//             </HStack>
//           </HStack>
//         </HStack>
//       </Box>
//     </Box>
//   );
// }

// export default NavBar;
