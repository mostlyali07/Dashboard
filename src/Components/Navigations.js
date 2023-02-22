import React from "react";
import { Link } from "react-router-dom";

const Navigations = () => {
  // const navigate = useNavigate();
  return (
    <>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Signup</Link>
      <br />
      {/* <button onClick={() => navigate("/login")}>Click Me</button> */}
    </>
  );
};
export default Navigations;
