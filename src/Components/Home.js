import React from "react";
import "./../App.css";
import AuthDetails from "./AuthDetails";
import LoginForm from "./LoginForm";
import reviewSlides from "./reviewSlides";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div>
              <h1>
                <b>Welcome back</b>
              </h1>
              <p>Welcome back! Please enter your details.</p>
              <LoginForm />
              <AuthDetails />
            </div>
          </div>
          <div className="col-md-6 backImg p-5">
            <div className="blurEffect mt-5 p-5">
              <reviewSlides />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
