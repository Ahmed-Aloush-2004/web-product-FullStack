import {
  Box,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  theme,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Range } from "react-range";

const RangeComponent = ({ min, max, step, onChange }) => {
  // Block 1: State Management for min-max range
  const [values, setValues] = useState([min, max]);

  // Block 5: Handler for updating min-max values
  const handleChange = (newValues) => {
    setValues(newValues);
    if (onChange) {
      onChange(newValues);
    }
  };

  return (
    <Box >
      {/* Block 2: Range Component */}
      <Range
        values={values}
        step={step}
        min={min}
        max={max}
        onChange={handleChange}
        // Block 3: Render Track Block
        renderTrack={({ props, children }) => (
          <Box
            {...props}
            style={{
              ...props.style,
            }}
            height={"6px"}
            width={"100%"}
            background={`linear-gradient(to right, #ccc ${
              ((values[0] - min) / (max - min)) * 100
            }%, ${theme.colors.teal[400]} ${((values[0] - min) / (max - min)) * 100}%, ${
              theme.colors.teal[400]
            } ${((values[1] - min) / (max - min)) * 100}%, #ccc ${((values[1] - min) / (max - min)) * 100}%)`}
>            
            {children}
          </Box>
        )}
        // Block 4: Render Thumb Block for each thumb
        renderThumb={({ props, index }) => (
          <Box
            {...props}
            style={{
              ...props.style}}

              height= "15px"
              width= "15px"
              borderRadius= "50%"
              backgroundColor= "teal.300"
              display= "flex"
              justifyContent= "center"
              alignItems= "center"
              // color="teal.500"
              fontSize= "8px"
              fontWeight= "bold"
            
          >
            {/* {values[index]}$ */}
          </Box>
        )}
      />

      {/* Display the current min-max values */}
      <Box marginTop={"1em"} whiteSpace={"nowrap"} >
        <strong>Selected Price Range:</strong> {values[0]}$ - {values[1]}$
      </Box>
    </Box>
  );
};

export default RangeComponent;
