import React from "react";
import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import "../App.css";
function Login() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  return (
    <div className="loginForm">
      <form action="">
        <Input
          placeholder="full name"
          type="text"
          size="md"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <Input placeholder="email" />
        <Input placeholder="confirm-email" />
        <Button />
      </form>
    </div>
  );
}

export default Login;
