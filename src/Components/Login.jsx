import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import { auth } from "../firebase"

const Login = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    //todo: signin
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      }).catch((error) => {
        console.log(error);
      })
  }
  return (
    <>
      <form onSubmit={signIn}>
        <label htmlFor="Email"><b>Email</b></label><br />
        <Input
          size="large"
          placeholder="Email Address"
          prefix={<UserOutlined />}
          style={{
            width: 300,
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="Password"><b>Password</b></label><br />
        <Input.Password
          size="large"
          placeholder="input password"
          style={{
            width: 300,
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <Button htmlType="submit">Login</Button>
        <br />
        <br />
        <Link to="/signup">Sign Up</Link>
        <br />
        {/* <button onClick={() => navigate("/login")}>Click Me</button> */}
      </form>
    </>
  );
};
export default Login;
