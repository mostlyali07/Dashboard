import React from "react";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";

const Signup = () => {
  // const navigate = useNavigate();
  return (
    <>
      <br />
      <Input
        size="large"
        placeholder="Email Address"
        prefix={<UserOutlined />}
        style={{
          width: 250,
        }}
      />
      <br />
      <br />
      <Input.Password
        size="large"
        placeholder="input password"
        style={{
          width: 250,
        }}
      />
      <br />
      <br />
      <Button size="large">Sign Up</Button>
      <br />
      <br />
      <Link to="/login">Login</Link>
      <br />
      {/* <button onClick={() => navigate("/login")}>Click Me</button> */}
    </>
  );
};
export default Signup;
