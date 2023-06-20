import { useState } from "react";
import { Box, HStack, Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { filterSearchBar, getArticles } from "../../redux/actions/actions";
const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  
  dispatch(filterSearchBar(name));
  
  const handleChange = (event) => {
    const { value } = event.target;
    if (!value) dispatch(getArticles());
    setName(value);
    // dispatch(filterSearchBar(name));
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
