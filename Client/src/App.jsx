import { Box, Text } from "@chakra-ui/react";
import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Box>
      <NavBar />
      <Home />
    </Box>
  );
}

export default App;
