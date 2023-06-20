import React from "react";
import { Box, HStack, Select } from "@chakra-ui/react";

const Filters = () => {
  return (
    <Box>
      <HStack maxWidth={"700px"} margin={"auto"}>
        <Select name="" id="" defaultValue="By Price" variant={"flushed"}>
          <option disabled value="By Price">
            Price
          </option>
          <option value="">Opcion 1</option>
          <option value="">Opcion 3</option>
        </Select>
        <Select name="" id="" defaultValue="By Size" variant={"flushed"}>
          <option disabled value="By Size">
            Size
          </option>
          <option value="">Opcion 1</option>
          <option value="">Opcion 2</option>
          <option value="">Opcion 3</option>
        </Select>
        <Select name="" id="" defaultValue="By Gender" variant={"flushed"}>
          <option disabled value="By Gender">
            Gender
          </option>
          <option value="">Opcion 2</option>
          <option value="">Opcion 3</option>
        </Select>
        <Select name="" id="" defaultValue="By Color" variant={"flushed"}>
          <option disabled value="By Color">
            Color
          </option>
          <option value="">Opcion 2</option>
          <option value="">Opcion 3</option>
        </Select>
      </HStack>
    </Box>
  );
};

export default Filters;
