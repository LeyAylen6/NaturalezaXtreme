import { useState } from "react";
import { Button, Center, HStack, Select } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { filterCombinated } from "../../redux/actions/actionFilters";
import {
  articlesTypes,
  articlesColor,
  articlesGender,
} from "../../utils/constants";
import {MdOutlineRefresh} from 'react-icons/md'

const Filters = () => {
  const [filters, setFilters] = useState({
    gender: "",
    type: "",
    color: "",
    order: "",
  });

  const dispatch = useDispatch();

  if(filters.gender || filters.type || filters.color || filters.order) dispatch(filterCombinated(filters));

  const handleChangeGender = (event) => {
    const { value } = event.target;
    if (articlesGender.find((article) => article.value === value)) {
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
    if (articlesTypes.find((article) => article.value === value)) {
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
    if (articlesColor.find((article) => article.value === value)) {
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

  const handleChangeOrder = (event) => {
    const { value } = event.target;
    if (value === "asc" || value === "desc") {
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
  };

  const handlerReset = ()=>{
    setFilters({
      gender: "",
      type: "",
      color: "",
      order: "",
    })
    document.getElementById("Gender").value="Gender"
    document.getElementById("Type").value="Type"
    document.getElementById("Color").value="Color"
    document.getElementById("Price").value="Price"
    
   
  }

  return (
    <HStack justifyContent="center" flexWrap="wrap" pt={5}>
      <Select
        name=""
        id="Gender"
        defaultValue="Gender"
        variant={"flushed"}
        onChange={handleChangeGender}
        w="300px"
      >
        <option disabled value="Gender" id>
          Gender
        </option>
        <option value="none">None</option>
        {articlesGender.map((article, index) => {
          return (
            <option key={index} value={article.value}>
              {article.name}
            </option>
          );
        })}
      </Select>
      <Select
        name=""
        id="Type"
        defaultValue="Type"
        variant={"flushed"}
        onChange={handleChangeType}
        w="300px"
      >
        <option disabled value="Type">
          Type
        </option>
        <option value="none">None</option>
        {articlesTypes.map((article, index) => {
          return (
            <option key={index} value={article.value}>
              {article.name}
            </option>
          );
        })}
      </Select>

      <Select
        name=""
        id="Color"
        defaultValue="Color"
        variant={"flushed"}
        onChange={handleChangeColor}
        w="300px"
      >
        <option disabled value="Color">
          Color
        </option>
        <option value="none">None</option>
        {articlesColor.map((article, index) => {
          return (
            <option key={index} value={article.value}>
              {article.name}
            </option>
          );
        })}
      </Select>
      <Select
        name="Price"
        id="price"
        defaultValue="price"
        variant={"flushed"}
        onChange={handleChangeOrder}
        w="300px"
      >
        <option disabled value="price">
          Price
        </option>
        <option value="none">None</option>
        <option value="desc">Downward</option>
        <option value="asc">Upward</option>
      </Select>
      <Button onClick={handlerReset} leftIcon={<MdOutlineRefresh size={40}/>} maxW="30px" 
      paddingRight="10px" bg="transparent">
 
      </Button>
    </HStack>
  );
};

export default Filters;

