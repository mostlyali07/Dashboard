// import React from "react";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import Signup from "./Components/Signup";
// import Login from "./Components/Login";
// import Home from "./Components/Home";
// import AllProducts from "./Components/AllProducts";

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/all-products" element={<AllProducts />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };
// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import AllProducts from "./Components/AllProducts";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
