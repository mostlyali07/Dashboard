import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import { Button } from "antd";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Navigations from "./Components/Navigations";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Navigations />
      </BrowserRouter>
    </>
  );
};
export default App;