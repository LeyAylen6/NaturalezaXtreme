import React from "react";

const Filters = () => {
  return (
    <div>
      <select name="" id="" defaultValue="By Price">
        <option disabled value="By Price">
          Price
        </option>
        <option value="">Opcion 2</option>
        <option value="">Opcion 3</option>
      </select>
      <select name="" id="" defaultValue="By Size">
        <option disabled value="By Size">
          Size
        </option>
        <option value="">Opcion 1</option>
        <option value="">Opcion 2</option>
        <option value="">Opcion 3</option>
      </select>
      <select name="" id="" defaultValue="By Gender">
        <option disabled value="By Gender">
          Gender
        </option>
        <option value="">Opcion 2</option>
        <option value="">Opcion 3</option>
      </select>
      <select name="" id="" defaultValue="By Color">
        <option disabled value="By Color">
          Color
        </option>
        <option value="">Opcion 2</option>
        <option value="">Opcion 3</option>
      </select>
    </div>
  );
};

export default Filters;
