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
      console.log(name)
    }
  }

  return (
    <HStack>
      <Box>
        <Input
          backgroundColor={"white"}
          color='black'
          _placeholder={{ color: 'inherit' }}
          border={"none"}
          variant="filled"
          size={"md"}
          type="text"
          placeholder="Search product..."
          value={name}
          onChange={handleChange}
        />
      </Box>
    </HStack>
  );
};

export default SearchBar;
