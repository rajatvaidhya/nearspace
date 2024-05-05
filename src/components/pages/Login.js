import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Loader from '../Loader'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const ENDPOINT = "http://localhost:5000";
  // const ENDPOINT = "https://paperkart-backend.onrender.com"

  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const passChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const response = await fetch(
      `${ENDPOINT}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );

    console.log(response);

    const json = await response.json();
    console.log(json);

    if (json.success === true) {
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      alert("Logged in successfully")
      setLoading(false);
    } else {
      alert("Invalid details");
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-form">
        <form action="/" method="post" className="login-form-body">
          <h3
            style={{
              fontSize: "2.5rem",
              marginTop: "-1rem",
              marginBottom: "2rem",
            }}
          >
            User Login
          </h3>
          <input
            type="email"
            onChange={emailChange}
            placeholder="Email"
            className="box"
          />
          <input
            type="password"
            onChange={passChange}
            placeholder="Password"
            className="box"
          />
          <p style={{ marginTop: "1rem", fontSize: "1.3rem" }}>
            Forget password? <Link to="/login">Click here!</Link>
          </p>
          <button className="btn" onClick={handleSubmit}>
            
            {loading ? (
              <Loader/>
            ) : (
              "Submit"
            )}
            </button>
          <p style={{ marginTop: "1rem", fontSize: "1.3rem" }}>Or Login With</p>
          <div className="buttons">
            <i className="fa-brands fa-google"></i>
            <i className="fa-brands fa-facebook"></i>
          </div>
          <div
            style={{
              marginTop: "2rem",
              borderTop: "1px solid rgb(216, 216, 216) ",
            }}
          ></div>
          <p style={{ marginTop: "2rem", fontSize: "1.3rem" }}>
            Don't have an account? <Link to="/signup">Create one!</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;