import React from "react";
import axios from "axios";

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
import "./Login.scss";
function Login() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [sentEmail, setSentEmail] = useState(null);
  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("clicked");

    const newContact = {
      name: fullname,
      address: email
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/emails", newContact
      ).then(
        res => {
          console.log('and then...');
          switch (res.status) {
            case 200:
              // Success
              console.log('Uploaded');
              break;
            case 400:
              // Fail
              console.log('Error not Uploaded');
              break;
          }
        }
      );
      setSentEmail(data);
    } catch {
      setError(true);
    }
    setLoading(false);
  };

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
          <Input
            size="md"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            size="md"
            placeholder="confirm-email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
          />
          <span style={{ visibility: error ? "visible" : "hidden" }}>
            Sending Error
          </span>

          <Button
            isDisabled={!fullname || !email || !confirmEmail}
            width={"full"}
            onClick={handleClick}
          >
            {loading ? "Loading" : "Submit"}
          </Button>
        </VStack>
      </form>
    </div>
  );
}

export default Login;
