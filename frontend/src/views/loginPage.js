import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const getData = async () => {
    const data = await fetch("http://127.0.0.1:8000/users/users-list/");
    const json = await data.json();

    return json;
  };

  const handleSumbit = async(e) => {
    e.preventDefault();
    const data = await getData();

    const check = data.filter(item => {
        return item.username === username && item.password === password
    });

    if (check[0]) {
        navigate("/home", {state: {user: check[0]}});
    } else {
      alert("Username or Password incorrect")
    }
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
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        name="password"
        placeholder="password"
      />
      <input type="submit" value="Login"/>
    </form>
  );
};
