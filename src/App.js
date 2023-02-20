import React from "react";
import { Link, useNavigate, Router } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  return (
    <Router>
      <h1>Home</h1>
      <Link to={"/Login"}>Go To Login Page</Link>
      <br />
      <button onClick={() => navigate("/Login")}>Go To Signup Page</button>
      <br />
    </Router>
  );
};
export default App;