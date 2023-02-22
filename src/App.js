import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

const App = () => {
  // const navigate = useNavigate();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
