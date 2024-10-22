import {
  Box,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Input
} from "@chakra-ui/react";
import { useState } from "react";
import { FaCheck, FaEdit } from "react-icons/fa";

function ProfileItem({ RightIcon, inputValue = "",LabelContent, inputName, handleEditeData }) {
  const [openInput, setOpenInput] = useState(false);
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2} fontSize={"lg"}>
      <FormLabel
        fontSize={{ base: "md", md: "lg" }}
        fontWeight={{ base: "medium", md: "bold" }}
      >
      {LabelContent}:{" "}
      </FormLabel>
      <InputGroup
        boxShadow={" 0px 0px 5px black"}
        borderRadius={"lg"}
        maxW={{ base: "100%", md: "80%" }}
      >
        <InputRightAddon
          background={"teal.300"}
          padding={{ base: "10px", md: "15px" }}
          borderTopLeftRadius={"lg"}
          borderBottomLeftRadius={"lg"}
        >
          <RightIcon size="25" />
        </InputRightAddon>
        <Input
          width={"100%"}
          disabled={!openInput}
          name={inputName}
          outline="none"
          fontSize={{ base: "md", md: "lg" }}
          fontWeight={{ base: "medium", md: "bold" }}
          value={inputValue}
          padding={{ base: "5px", md: "10px" }}
          background={"white"}
          onChange={handleEditeData}
        />
        <InputLeftAddon
          background={"green.300"}
          padding={{ base: "10px", md: "15px" }}
          borderTopRightRadius={"lg"}
          borderBottomRightRadius={"lg"}
          cursor={"pointer"}
          _hover={{ background: "green.400" }}
          onClick={() => setOpenInput(!openInput)}
        >
          {!openInput ? <FaEdit size="25" /> : <FaCheck size="25" />}
        </InputLeftAddon>
      </InputGroup>
    </Box>
  );
}

export default ProfileItem;
