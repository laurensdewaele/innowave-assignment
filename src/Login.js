import React, { useState } from "react";
import "./Login.css";

const validateEmail = (email) => email === "sagar.j@innowave.tech";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const validate = () => {
    setValid(validateEmail(email));
  };

  return (
    <section>
      <label htmlFor="email">Email address</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={validate}>Login</button>
      {valid ? (
        <p className="valid">Login successful</p>
      ) : (
        <p className="invalid">Please enter a valid email and password</p>
      )}
    </section>
  );
};
