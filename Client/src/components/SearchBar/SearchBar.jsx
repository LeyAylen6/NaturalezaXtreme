import { useState } from "react";
import { Box, HStack, Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { filterSearchBar, getAllProducts } from "../../redux/actions/actions";
const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    if (!value) dispatch(getAllProducts());
    setName(value);
    dispatch(filterSearchBar(name));
  };

  return (
    <HStack>
      <Box>
        <Input
          border={"none"}
          variant="filled"
          size={"md"}
          type="text"
          placeholder="Search product..."
          onChange={handleChange}
        />
      </Box>
    </HStack>
  );
};

export default SearchBar;
