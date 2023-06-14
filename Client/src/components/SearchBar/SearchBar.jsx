import { useState } from "react";
import { Box, Button, HStack, Input } from "@chakra-ui/react";
const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.targe.value);
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
      <Button
        as={"button"}
        bgGradient="linear(to-r,#bababa, #6c6f78)"
        _hover={{
          bgGradient: "linear(to-r, red.500, yellow.500)",
        }}
        variant={"ghost"}
        border={"none"}
      >
        Search
      </Button>
    </HStack>
  );
};

export default SearchBar;
