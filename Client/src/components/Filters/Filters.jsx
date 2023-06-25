import { useState } from "react";
import { HStack, Select } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { filterCombinated } from "../../redux/actions/actionFilters";
import {
  articlesTypes,
  articlesColor,
  articlesGender,
} from "../../utils/constants";

const Filters = () => {
  const [filters, setFilters] = useState({
    gender: "",
    type: "",
    color: "",
    order: "",
  });

  const dispatch = useDispatch();

  dispatch(filterCombinated(filters));

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
        <option disabled value="Gender">
          Gender
        </option>
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
        id=""
        defaultValue="By Color"
        variant={"flushed"}
        onChange={handleChangeColor}
        w="300px"
      >
        <option disabled value="By Color">
          Color
        </option>
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
    </HStack>
  );
};

export default Filters;
