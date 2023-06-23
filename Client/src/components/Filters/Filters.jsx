import  { useState } from "react";
import { Box, HStack, Select } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { filterCombinated } from "../../redux/actions/actionFilters";

const Filters = () => {
  const [filters, setFilters] = useState({
    gender: "",
    type: "",
    color: "",
    order:""
  });

  const dispatch = useDispatch();

  dispatch(filterCombinated(filters));
  console.log(filters);

  const handleChangeGender = (event) => {
    const { value } = event.target;
    if (value === "male" || value === "female" || value === "unisex") {
      setFilters({
        ...filters,
        gender: value,
      });
    } else {
      setFilters({
        ...filters,
        gender: "",
      });
    }
  };
  const handleChangeType = (event) => {
    const { value } = event.target;
    if (
      value === "Tshirt" ||
      value === "sweatshirt" ||
      value === "jacket" ||
      value === "pant" ||
      value === "accesories" ||
      value === "shoes" ||
      value === "equipment"
    ) {
      setFilters({
        ...filters,
        type: value,
      });
    } else {
      setFilters({
        ...filters,
        type: "",
      });
    }
  };
  const handleChangeColor = (event) => {
    const { value } = event.target;
    if (
      value === "white" ||
      value === "black" ||
      value === "red" ||
      value === "green" ||
      value === "yellow" ||
      value === "brown" ||
      value === "orange" ||
      value === "blue" ||
      value === "grey" ||
      value === "pink" ||
      value === "violet"
    ) {
      setFilters({
        ...filters,
        color: value,
      });
    } else {
      setFilters({
        ...filters,
        color: "",
      });
    }
  };

  const handleChangeOrder=(event)=>{
    const { value } = event.target;
    if(value === "asc"|| value === "desc"){
      setFilters({
        ...filters,
        order: value,
      });
    } else {
      setFilters({
        ...filters,
        order: "",
      });
    }
  }

  return (
    <Box>
      <HStack maxWidth={"700px"} margin={"auto"}>
        <Select
          name=""
          id="Gender"
          defaultValue="Gender"
          variant={"flushed"}
          onChange={handleChangeGender}
        >
          <option disabled value="Gender">
            Gender
          </option>
          <option value="none">None</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unisex">Unisex</option>
        </Select>
        <Select
          name=""
          id="Type"
          defaultValue="Type"
          variant={"flushed"}
          onChange={handleChangeType}
        >
          <option disabled value="Type">
            Type
          </option>
          <option value="none">None</option>
          <option value="Tshirt">Tshirt</option>
          <option value="sweatshirt">Sweatshirt</option>
          <option value="jacket">Jacket</option>
          <option value="pant">Pants</option>
          <option value="accesories">Accesories</option>
          <option value="shoes">Shoes</option>
          <option value="equipment">Equipament</option>
        </Select>

        <Select
          name=""
          id=""
          defaultValue="By Color"
          variant={"flushed"}
          onChange={handleChangeColor}
        >
          <option disabled value="By Color">
            Color
          </option>
          <option value="none">None</option>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="brown">Brown</option>
          <option value="oranje">Oranje</option>
          <option value="blue">Blue</option>
          <option value="grey">Grey</option>
          <option value="pink">Pink</option>
          <option value="violet">Violet</option>
        </Select>
        <Select   name=""
          id="price"
          defaultValue="price"
          variant={"flushed"}
          onChange={handleChangeOrder}>
          <option  disabled value="price">Price</option>
          <option value="none">None</option>
          <option value="desc">Downward</option>
          <option value="asc">Upward</option>
          
          </Select>
      </HStack>
    </Box>
  );
};

export default Filters;
