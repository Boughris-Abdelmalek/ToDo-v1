import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const sendData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/users/users-create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password
        }),
      });
      const json = await response.json();
      if (response.status === 200) {
        navigate("/login");
      }
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    sendData();
  };

  return (
    <form onSubmit={handleSumbit}>
      <input
        onChange={(e) => setUserName(e.target.value)}
        value={username}
        type="text"
        name="username"
        placeholder="username"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        name="email"
        placeholder="email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        name="password"
        placeholder="password"
      />
      <input type="submit" />
    </form>
  );
};
