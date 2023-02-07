import { VStack, Heading } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import "./App.css";
import Popup from "./components/Popup";
function App() {
  return (
    <div className="App">
      <Navbar />
      <VStack
        direction="column"
        spacing={25}
        justifyContent="center"
        alignItems="center"
      >
        <Heading>A better way to enjoy every day.</Heading>
        <p>Be the first to find out when we launch.</p>

        <Popup text="Enter details to find out" />
      </VStack>
    </div>
  );
}

export default App;
