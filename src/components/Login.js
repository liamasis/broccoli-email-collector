import React from "react";
import {
  Input,
  Button,
  Center,
  ButtonGroup,
  Stack,
  VStack,
  Form,
} from "@chakra-ui/react";
import { useState } from "react";
import "../App.css";
function Login() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  return (
    <div className="loginForm">
      <form>
        <VStack
          direction="column"
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          <Input
            placeholder="full name"
            type="text"
            size="md"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <Input size="md" placeholder="email" />
          <Input size="md" placeholder="confirm-email" />
          <Button width={"full"}> Submit </Button>
        </VStack>
      </form>
    </div>
  );
}

export default Login;
