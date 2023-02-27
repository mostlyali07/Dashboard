import React from "react";
import "./../App.css";
import AuthDetails from "./AuthDetails";
import SignupForm from "./SignupForm";

const Signup = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <div>
                            <h1><b>Welcome back</b></h1>
                            <p>Welcome back! Please enter your details.</p>
                            <SignupForm />
                            <AuthDetails />
                        </div>
                    </div>
                    <div className="col-md-6 backImg">
                        <div className="blurEffect">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Signup;
