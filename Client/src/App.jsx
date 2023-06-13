import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <Home />
    </ChakraProvider>
  );
}

export default App;
