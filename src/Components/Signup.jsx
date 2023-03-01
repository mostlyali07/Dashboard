import React from "react";
import "./../App.css";
import AuthDetails from "./AuthDetails";
import SignupForm from "./SignupForm";
import ReviewSlides from "./ReviewSlides";

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
                    <div className="col-md-6 backImgTwo">
                    <ReviewSlides />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Signup;
