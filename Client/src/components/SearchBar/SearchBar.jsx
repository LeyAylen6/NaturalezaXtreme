import { useState } from "react";
import { Box, HStack, Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { filterSearchBar, getArticles } from "../../redux/actions/actions";


const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    if(value){
      setName(value);
      dispatch(filterSearchBar(value))
    } else {
      setName("");   
      dispatch(getArticles());
    }
  }

  return (
    <HStack>
      <Box>
        <Input
          backgroundColor={"white"}
          border={"none"}
          variant="filled"
          size={"md"}
          type="text"
          color='black'
          placeholder="Search product..."
          _placeholder={{ color: 'inherit' }}
          value={name}
          onChange={handleChange}
        />
      </Box>
    </HStack>
  );
};

export default SearchBar;
