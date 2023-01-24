import React from "react";
import "../App.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import Login from "./Login";

function Popup() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      {/* Size can be sml lg xl etc etc 2xl 2lg 5lg etc */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"full"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Login />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="grey" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Popup;
