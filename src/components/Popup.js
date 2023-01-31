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

function Popup({ text }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>{text}</Button>
      {/* Size can be sml lg xl etc etc 2xl 2lg 5lg etc */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={{ base: "full", sm: "sm" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>

          <ModalBody display="flex" alignItems="center" justifyContent="center">
            <Login />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="grey"
              mr={1}
              justify-content="flex-end"
              size="sm"
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Popup;
