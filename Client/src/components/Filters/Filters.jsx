import { useState } from "react";
import { Button, Center, Box, HStack, Select } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { filterCombinated } from "../../redux/actions/actionFilters";
import { articlesTypes, articlesColor, articlesGender } from "../../utils/constants";
import { MdOutlineRefresh } from "react-icons/md";

const Filters = () => {
  const [filters, setFilters] = useState({
    gender: "",
    type: "",
    color: "",
    order: "",
  });

  const dispatch = useDispatch();

  if (filters.gender || filters.type || filters.color || filters.order) dispatch(filterCombinated(filters));

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

  const handlerReset = () => {
    setFilters({
      gender: "",
      type: "",
      color: "",
      order: "",
    });
    document.getElementById("Gender").value = "Gender";
    document.getElementById("Type").value = "Type";
    document.getElementById("Color").value = "Color";
    document.getElementById("Price").value = "Price";
  };

  return (
    <HStack display={"flex"} justifyContent={"center"} p="0" marginBottom={"20px"} marginLeft={"0"} marginRight={"0"}>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Select
          name=""
          id="Gender"
          defaultValue="Gender"
          variant={"flushed"}
          border={"1px"}
          borderRight={"none"}
          borderRadius={"8px 0 0 8px"}
          onChange={handleChangeGender}
          w="300px"
          padding={"2px 0 2px 0"}
        >
          <option disabled value="Gender">
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
          border={"1px"}
          borderRight={"none"}
          borderLeft={"none"}
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
          border={"1px"}
          borderRight={"none"}
          borderLeft={"none"}
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
          name=""
          id="Price"
          defaultValue="Price"
          variant={"flushed"}
          border={"1px"}
          borderLeft={"none"}
          borderRadius={"0 8px 8px 0"}
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
        <Button
          id="Icon"
          onClick={handlerReset}
          leftIcon={<MdOutlineRefresh size={40} />}
          maxW="30px"
          bg="transparent"
          marginLeft={"10px"}
        ></Button>
      </Box>
    </HStack>
  );
};

export default Filters;
