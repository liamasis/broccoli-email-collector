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
  Center,
} from "@chakra-ui/react";
import Login from "./Login";

function Popup() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      {/* Size can be sml lg xl etc etc 2xl 2lg 5lg etc */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={{ base: "full", sm: "md", md: "lg" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>

          <ModalBody>
            <Center>
              <Login />
            </Center>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="grey" mr={1} size="sm" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Popup;
