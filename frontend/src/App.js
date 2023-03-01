import { VStack, Heading } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Footer from "./components/Footer/Footer";

import Popup from "./components/Popup/Popup";
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
        console.log('what')
        <Popup text="Enter details to find out" />
        <Footer />
      </VStack>
    </div>
  );
}

export default App;
