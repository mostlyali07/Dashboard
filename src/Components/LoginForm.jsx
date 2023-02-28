import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./../App.css";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import { auth, providers } from "../firebase"
import { signInWithPopup } from "firebase/auth";
import MainDashboard from "./MainDashboard";


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [value, setValue] = useState("");


    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            }).catch((error) => {
                console.log(error);
            })
    }
    const handleClick = () => {
        signInWithPopup(auth, providers).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
        })
    }
    useEffect(() => {
        setValue(localStorage.getItem("email"))
    })
    return (
        <><form onSubmit={signIn}>
            <label htmlFor="Email"><b>Email</b></label><br />
            <Input
                size="large"
                placeholder="Email Address"
                prefix={<UserOutlined />}
                style={{
                    width: 300,
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="Password"><b>Password</b></label><br />
            <Input.Password
                size="large"
                placeholder="input password"
                style={{
                    width: 300,
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <Button htmlType="submit">Login</Button>
            <br />
            <br />
            <Link to="/signup">Sign Up</Link>
            <br />
            {value ? <MainDashboard /> :
                <button onClick={handleClick}>Sign In With Google</button>
            }
        </form></>
    )
}

export default LoginForm;


