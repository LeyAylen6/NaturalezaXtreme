import React from "react";
import { Select } from "@chakra-ui/react";

const Filters = () => {
  return (
    <>
      <Select name="" id="" defaultValue="By Price">
        <option disabled value="By Price">
          Price
        </option>
        <option value="">Opcion 1</option>
        <option value="">Opcion 3</option>
      </Select>
      <Select name="" id="" defaultValue="By Size">
        <option disabled value="By Size">
          Size
        </option>
        <option value="">Opcion 1</option>
        <option value="">Opcion 2</option>
        <option value="">Opcion 3</option>
      </Select>
      <Select name="" id="" defaultValue="By Gender">
        <option disabled value="By Gender">
          Gender
        </option>
        <option value="">Opcion 2</option>
        <option value="">Opcion 3</option>
      </Select>
      <Select name="" id="" defaultValue="By Color">
        <option disabled value="By Color">
          Color
        </option>
        <option value="">Opcion 2</option>
        <option value="">Opcion 3</option>
      </Select>
    </>
  );
};

export default Filters;
