import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import React from 'react'

function SelectComponent({title,options = [],onChange}) {
  return (
    <FormControl
    display={"flex"}
    alignItems={"start"}
    flexDirection={"column"}
  >
    <FormLabel fontSize={"xl"} mb={2}>
       {title}
    </FormLabel>
    <Select
      background={"gray.300"}
      paddingY={2}  // Vertical padding
      paddingX={4}  // Horizontal padding
      borderRadius={"md"}
      height={"auto"}  // Adjust height automatically based on content
      fontSize={"lg"}
      border={"1px solid"}
      borderColor={"gray.400"}  // Optional border color to improve appearance
      _hover={{ background: "gray.200" }}  // Change background on hover
      _focus={{ borderColor: "teal.400", boxShadow: "0 0 0 1px teal.400" }}  // Focus state with teal border
      icon={""}  // Removes the default arrow icon
      onChange={onChange}
      placeholder={`Select ${title}`}
    >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      
      {/* <option value="electronics">Electronics</option>
      <option value="fashion">Fashion</option>
      <option value="home">Home</option> */}
    </Select>
  </FormControl>
  
  )
}

export default SelectComponent
