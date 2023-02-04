import { VStack } from "@chakra-ui/react";
import "./App.css";
import Popup from "./components/Popup";
function App() {
  return (
    <div className="App">
      <VStack
        direction="column"
        spacing={25}
        justifyContent="center"
        alignItems="center"
      >
        <h1>A better way to enjoy every day.</h1>
        <p>Be the first to find out when we launch.</p>

        <Popup />
      </VStack>

  
    </div>
  );
}

export default App;
