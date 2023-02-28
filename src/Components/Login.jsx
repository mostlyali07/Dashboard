import React from "react";
import "./../App.css";
import AuthDetails from "./AuthDetails";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div>
              <h1><b>Welcome back</b></h1>
              <p>Welcome back! Please enter your details.</p>
              <LoginForm />
              <AuthDetails />
            </div>
          </div>
          <div className="col-md-6 backImg">
            <div className="blurEffect mt-5 p-5">

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
