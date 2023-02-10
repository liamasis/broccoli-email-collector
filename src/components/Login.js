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
  const [error, setError] = useState(false);

  return (
    <div className="loginForm">
      <form>
        <VStack
          direction="column"
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          <h1 style={{ fontSize: "20px", padding: "3px" }}>
            Please enter your details:
          </h1>
          <Input
            placeholder="full name"
            type="text"
            size="md"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <Input size="md" placeholder="email" />
          <Input size="md" placeholder="confirm-email" />
          <span style={{ visibility: error ? "visible" : "hidden" }}>
            Email is not valid.
          </span>
          <Button width={"full"}> Submit </Button>
        </VStack>
      </form>
    </div>
  );
}

export default Login;
