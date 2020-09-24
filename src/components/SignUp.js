
import React, { useState,component} from "react";
import { Link } from "react-router-dom";
import "./signup.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import google from './google.png';
let eye = <FontAwesomeIcon icon={faEye} />;

const SignUp = () => {
    const [passwordDisplay, setPasswordDisplay] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordDisplay(passwordDisplay ? false : true);
        passwordDisplay
            ? (eye = <FontAwesomeIcon icon={faEyeSlash} />)
            : (eye = <FontAwesomeIcon icon={faEye} />);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const fname=document.getElementById("firstname").value;
        const lname=document.getElementById("lastname").value;
        postData(fname,lname)
    }
    const postData=(fname,lname)=>{
        try {
            let result = fetch('https://reqres.in/api/users', {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-type':'application/json',

                },
                body: JSON.stringify({
                    fname: fname,
                    lname: lname
                })
            });
            console.log(result)
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <div className="page-wrapper container-fluid">
                <div className="logo-wrapper row animate__animated animate__zoomIn">
                <div className="col-12 logo-container">
                    <img
                        src={require("./logo.png")}
                        alt="Brand Logo"
                        className="logo col-1.5 "
                    />
                </div>
            </div><br/><br/><br/>
            <div className="row">
                <div className="sign-up-wrapper text-center animate__animated animate__zoomIn animate__delay-2s">
                    <div className="sign-up-header">
                        <h4 className="top-heading">SIGN UP</h4>
                        <h1 className="mainHeading"> Create Your Account</h1>
                        <span className="subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span><br/><br/>
                        
                        <p style={{display: "flex",justifyContent: "space-evenly"}}>
                            <hr style={{color: "black",height: "1.5rem", width: "40%",}}/>
                            or
                            <hr style={{color: "black",height: "1.5rem", width: "40%",}}/>
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        method="POST"
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                autoFocus
                                placeholder="First name"
                                id="firstname"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last name"
                                id="lastname"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email Address"
                                required
                            />
                        </div>
                        <div
                            className="form-group"
                            style={{ marginBottom: "2.5rem" }}
                        >
                            <div class="input-group mb-3">
                            <input
                                type={passwordDisplay ? "text" : "password"}
                                id="password"
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                style={{
                                    display: "inline",
                                }}
                            />
                            <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2"><i
                                onClick={togglePasswordVisiblity}
                            >
                                {eye}
                            </i></span>
                            </div>
                            </div>
                        </div>
                        <p className="form-group subtext">
                            By Clicking Sign Up, you agree to our
                            <Link> Terms of Use </Link>
                            and our
                            <Link> Privacy Policy </Link> .
                        </p>
                        <div className="form-group">
                            <button className="btn btn-primary" style={{height:"50px"}}>
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
