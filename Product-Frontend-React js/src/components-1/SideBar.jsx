import { Box, Stack, IconButton, Button, Text } from "@chakra-ui/react";
import {
  FaHome,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaSignOutAlt,
  FaSignInAlt,
  FaArrowCircleLeft,
} from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import ItemForNavbar from "./ItemForNavbar";
import { MdAdminPanelSettings } from "react-icons/md";
import { LuUserCircle2 } from "react-icons/lu";
import { useEffect, useState } from "react";
import { FaX } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { loggedOut } from "../store/UserSlice";

const items = [
  { content: "Home", route: "/", Icon: FaHome },
  { content: "Products", route: "/products", Icon: AiFillProject },
  { content: "Offers", route: "/offers", Icon: MdLocalOffer },
  { content: "Contact", route: "/contact", Icon: IoMdContacts },
];

const SideBar = ({ isOpen, handleToggleNavbar }) => {
  let isAdmin = true;
  let isLoggedIn = true;

const dispatch = useDispatch();
  const {token,user} = useSelector(state=>state.userInfo)

  const handleLogout = () => {
    dispatch(loggedOut());
    toast.success("You are logged out successfully");

  };

  return (
    <>
      {/* Overlay for mobile view */}
      {isOpen && (
        <Box
          onClick={handleToggleNavbar}
          position="fixed"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          background="blackAlpha.600"
          zIndex="overlay"
        />
      )}

      {/* Hamburger Icon for mobile */}
    { isOpen &&   <IconButton
        icon={ <FaX size={23} /> }
        display={["inline-block"]}
        onClick={handleToggleNavbar}
        padding={"5px"}
        borderRadius={"lg"}
        position="fixed"
        top={"10px"}
        left={"270px"}
        color={"white"}
        background={ "transparent"}
        zIndex="32"
        size="lg"
      />}

      {/* Sidebar */}
      <Stack
        position="fixed"
        top="0"
        left="0"
        height="100vh"
        width={{ base: "250px", sm: "250px" }}
        background="gray.300"
        zIndex="modal"
        shadow={{ base: "md", md: "none" }}
        transition="left 0.3s ease-in-out"
        display={[isOpen ? "flex" : "none"]}
      >
        <Box
          width={"100%"}
          padding={"10px 30px"}
          display={"flex"}
          alignItems={"center"}
          background={"gray.500"}
          color={"gray.200"}
          gap={"10px"}
        >
          <LuUserCircle2 size={30} />
          <Text fontSize={"large"}>Hello, {token && user ? user.name : "Sign in"}</Text>
        </Box>
        <Stack
          padding="20px"
          spacing="20px"
          display={{ base: "flex" }}
          flexDirection={"column"}
          justifyContent={"start"}
          gap={"10px"}
        >
          {/* Navigation Links */}
          <Stack>
            {items.map((item, i) => (
              <ItemForNavbar
                key={i}
                linkContent={item.content}
                linkRout={item.route}
                Icon={item.Icon}
                onClick={handleToggleNavbar}
              />
            ))}
          </Stack>

          {/* Actions (Wishlist, Cart, Profile, etc.) */}
          <Stack>
            <ItemForNavbar
              linkContent={"Wishlist"}
              linkRout={"/wishlist"}
              Icon={FaHeart}
              onClick={handleToggleNavbar}
            />
            <ItemForNavbar
              linkContent={"Cart"}
              linkRout={"/cart"}
              Icon={FaShoppingCart}
              onClick={handleToggleNavbar}
            />

            {token && user ? (
              <>
                <ItemForNavbar
                  linkContent={"Profile"}
                  linkRout={"/profile"}
                  Icon={FaUser}
                  onClick={handleToggleNavbar}
                />

                <Button
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"start"}
                  padding={"8px 16px"}
                  gap={"5"}
                  background={"white"}
                  cursor={"pointer"}
                  transition={"all 0.4s ease"}
                  _hover={{ background: "teal.200" }}
                  borderRadius={"lg"}
                  onClick={handleLogout}
                >
                  <FaSignOutAlt size={23} />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <ItemForNavbar
                  linkContent={"Login"}
                  linkRout={"/login"}
                  Icon={FaSignInAlt}
                  onClick={handleToggleNavbar}
                />
                <ItemForNavbar
                  linkContent={"Signup"}
                  linkRout={"/signup"}
                  Icon={FaUser}
                  onClick={handleToggleNavbar}
                />
              </>
            )}
            { token && user && isAdmin && (
              <ItemForNavbar
                linkContent={"Admin Dashboard"}
                linkRout={"/admin/dashboard"}
                Icon={MdAdminPanelSettings}
                onClick={handleToggleNavbar}
              />
            )}
          </Stack>
        </Stack>
        <Box
          color={"white"}
          padding={"10px 30px"}
          cursor={"pointer"}
          onClick={handleToggleNavbar}
          borderRadius={"50%"}
          width={"30px"}
        >
          <IoIosArrowDropleftCircle size={30} />
        </Box>
      </Stack>
    </>
  );
};

export default SideBar;
































































































































// import { Box, Stack, IconButton, Button, Text } from "@chakra-ui/react";
// import {
//   FaHome,
//   FaHeart,
//   FaShoppingCart,
//   FaUser,
//   FaSignOutAlt,
//   FaSignInAlt,
// } from "react-icons/fa";
// import { MdLocalOffer } from "react-icons/md";
// import { AiFillProject } from "react-icons/ai";
// import { IoMdContacts } from "react-icons/io";
// import { GiHamburgerMenu } from "react-icons/gi";
// import ItemForNavbar from "./ItemForNavbar";
// import { MdAdminPanelSettings } from "react-icons/md";
// import { LuUserCircle2 } from "react-icons/lu";
// import { FaX } from "react-icons/fa6";
// import { useEffect, useState } from "react";

// const items = [
//   { content: "Home", route: "/", Icon: FaHome },
//   { content: "Products", route: "/products", Icon: AiFillProject },
//   { content: "Offers", route: "/offers", Icon: MdLocalOffer },
//   { content: "Contact", route: "/contact", Icon: IoMdContacts },
// ];

// const SideBar = ({  }) => {
//   let isAdmin = true;
//   let isLoggedIn = true;
// const [isOpen, setIsOpen] = useState(false);

// function handleToggleNavbar() {
//   setIsOpen(!isOpen);
// }
// function handleResize() {
//   if (window.innerWidth > 768) {
//     setIsOpen(!isOpen);
//   }
// }
// useEffect(() => {
//   window.addEventListener("resize", handleResize)

//   return () =>  window.removeEventListener("resize",handleResize)
// }, [isOpen]);

//   // isOpen, handleToggleNavbar

//   return (
//     <>
//       {/* Overlay for mobile view */}
//       {isOpen && (
//         <Box
//           onClick={handleToggleNavbar}
//           position="fixed"
//           top="0"
//           left="0"
//           width="100vw"
//           height="100vh"
//           background="blackAlpha.600"
//           zIndex="overlay"
//         />
//       )}

//       {/* Hamburger Icon for mobile */}
//       {(
//         <IconButton
//           icon={isOpen ? <FaX size={23} /> : <GiHamburgerMenu size={23} />}
//           display={{ base: "inline-block" }}
//           onClick={handleToggleNavbar}
//           padding={"5px"}
//           borderRadius={"lg"}
//           position="fixed"
//           top={"10px"}
//           left={!isOpen ? "10px" :"270px"}
//           background={ isOpen ? "transparent" :"teal.300" }
//           zIndex="popover"
//           size="lg"
//         />
//       )}

//       {/* Sidebar */}
//       <Stack
//         position={{ base: "fixed" }}
//         top={{ base: "0", md: "auto" }}
//         left={{ base:  "0", md: "auto" }}
//         height={{ base: "100vh" }}
//         width={{ base: "300px", sm: "250px" }}
//         background="gray.300"
//         zIndex="modal"
//         shadow={{ base: "md", md: "none" }}
//         transition="left 0.3s ease-in-out"
//         display={[isOpen ? "flex" : "none", "flex"]}
//       >
//         <Box
//           width={"100%"}
//           padding={"10px 30px"}
//           display={"flex"}
//           alignItems={"center"}
//           background={"gray.500"}
//           color={"gray.200"}
//           gap={"10px"}
//         >
//           <LuUserCircle2 size={30} />
//           <Text fontSize={"large"}>Hello, Sign in</Text>
//         </Box>
//         <Stack
//           padding="20px"
//           spacing="20px"
//           display={{ base: "flex" }}
//           flexDirection={"column"}
//           justifyContent={"start"}
//           gap={"10px"}
//           // shadow={{ base: "md", md: "none" }}
//         >
//           {/* Navigation Links */}
//           <Stack>
//             {items.map((item, i) => (
//               <ItemForNavbar
//                 key={i}
//                 linkContent={item.content}
//                 linkRout={item.route}
//                 Icon={item.Icon}
//                 onClick={handleToggleNavbar}
//               />
//             ))}
//           </Stack>

//           {/* Actions (Wishlist, Cart, Profile, etc.) */}
//           <Stack>
//             <ItemForNavbar
//               linkContent={"Wishlist"}
//               linkRout={"/wishlist"}
//               Icon={FaHeart}
//               onClick={handleToggleNavbar}
//             />
//             <ItemForNavbar
//               linkContent={"Cart"}
//               linkRout={"/cart"}
//               Icon={FaShoppingCart}
//               onClick={handleToggleNavbar}
//             />

//             {isLoggedIn ? (
//               <>
//                 <ItemForNavbar
//                   linkContent={"Profile"}
//                   linkRout={"/profile"}
//                   Icon={FaUser}
//                   onClick={handleToggleNavbar}

//                   // onClick={isMobile ? onClose : undefined}
//                 />

//                 <Button
//                   display={"flex"}
//                   alignItems={"center"}
//                   justifyContent={"start"}
//                   padding={"8px 16px"}
//                   gap={"5"}
//                   background={"white"}
//                   cursor={"pointer"}
//                   transition={"all 0.4s ease"}
//                   _hover={{ background: "teal.200" }}
//                   borderRadius={"lg"}
//                 >
//                   <FaSignOutAlt
//                     fontSize={"l"}
//                     fontWeight={"medium"}
//                     size={23}
//                   />
//                   Logout
//                 </Button>
//               </>
//             ) : (
//               <>
//                 <ItemForNavbar
//                   linkContent={"Login"}
//                   linkRout={"/login"}
//                   Icon={FaSignInAlt}
//                   onClick={handleToggleNavbar}
//                 />
//                 <ItemForNavbar
//                   linkContent={"Signup"}
//                   linkRout={"/signup"}
//                   Icon={FaUser}
//                   onClick={handleToggleNavbar}
//                 />
//               </>
//             )}
//             {isAdmin && (
//               <ItemForNavbar
//                 linkContent={"Admin Dashboard"}
//                 linkRout={"/admin/dashboard"}
//                 Icon={MdAdminPanelSettings}
//                 onClick={handleToggleNavbar}
//               />
//             )}
//           </Stack>
//         </Stack>
//       </Stack>
//     </>
//   );
// };

// export default SideBar;

// // {/* Search Bar */}
// // <Box>
// //   <InputGroup
// //     display={"flex"}
// //     alignItems={"center"}
// //     background={"white"}
// //     border={"2px solid"}
// //     borderColor={"gray.300"}
// //     padding={"8px 16px"}
// //     borderRadius={"md"}
// //     marginTop={"10px"}
// //     // _focus={{ borderColor: "gray.500"}}
// //   >
// //     <Input
// //       background={"transparent"}
// //       outline={"none"}
// //       placeholder="Search for products..."
// //     />
// //     <FaSearch />
// //   </InputGroup>
// // </Box>

