import { Box, LinkBox } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function ItemForNavbar({ linkContent, linkRout, Icon,onClick }) {
  return (
    <Box
    onClick={onClick}
      display={"flex"}
      alignItems={"center"}
      padding={"8px 16px"}
      gap={"5"}
      // width={[""]}
      background={"white"}
      cursor={"pointer"}
      transition={"all 0.4s ease"}
      _hover={{ background: "teal.200" }}
      borderRadius={"lg"}
    >
      <Icon size={23} />
      <LinkBox fontSize={"l"} fontWeight={"medium"}>
        <Link to={linkRout}>{linkContent}</Link>
      </LinkBox>
    </Box>
  );
}

export default ItemForNavbar;
