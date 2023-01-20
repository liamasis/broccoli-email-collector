import React from "react";
import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";
function Login() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  return (
    <div>
      <form action="">
        <Input
          placeholder="full name"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input placeholder="email" />
        <Input placeholder="confirm-email" />
        <Button />
      </form>
    </div>
  );
}

export default Login;
