import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Input, Button, Form } from "antd";
import { auth } from "../firebase"

const Signup = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    //todo: signin
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      }).catch((error) => {
        console.log(error);
      })
  }
  return (
    <>
      <form onSubmit={signUp}>
        <Input
          size="large"
          placeholder="Email Address"
          prefix={<UserOutlined />}
          style={{
            width: 250,
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <Input.Password
          size="large"
          placeholder="input password"
          style={{
            width: 250,
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Signup</button>
        <br />
        <br />
        <Link to="/login">Log In</Link>
        <br />
        {/* <button onClick={() => navigate("/login")}>Click Me</button> */}
      </form>
    </>
  );
};
export default Signup;
