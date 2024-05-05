import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import HamburgerMenu from "./Hamburger";
import Logo from "../images/site-logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const adminRedirect = () => {
    navigate("/admin");
  };

  return (
    <>
      <header className="header" style={{ height: "100px" }}>
        <HamburgerMenu />
        <Link to="/" className="logo">
          <div style={{ width: "200px", height: "200px" }}>
            <img
              src={Logo}
              alt="site-logo"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        </Link>
        <nav className="navbar">
          <Link to="/" style={{ fontSize: "1.6rem" }}>
            Home
          </Link>
          <Link to="/services" style={{ fontSize: "1.6rem" }}>
            Services
          </Link>
          <Link to="/about" style={{ fontSize: "1.6rem" }}>
            About
          </Link>
          <Link to="/contact" style={{ fontSize: "1.6rem" }}>
            Contact Us
          </Link>
        </nav>

        {!localStorage.getItem("token") ? (
          <Link to="/login">
            <button className="btn btn2">
              <i
                className="fa-solid fa-user"
                style={{ marginRight: "1rem" }}
              ></i>
              Login
            </button>
          </Link>
        ) : (
          <div style={{ display: "flex", gap: "1rem" }}>
            <button className="btn btn2" onClick={adminRedirect}>
              <i
                className="fa-solid fa-user"
                style={{ marginRight: "1rem" }}
              ></i>
              Admin
            </button>

            <button className="btn btn2" onClick={handleLogout}>
              <i
                className="fa-solid fa-user"
                style={{ marginRight: "1rem" }}
              ></i>
              Logout
            </button>

            <Link to="/mycart">
              <button
                className="btn btn2"
                style={{
                  background: "white",
                  color: "red",
                  border: ".3px solid red",
                }}
              >
                <i
                  className="fa-solid fa-cart-shopping"
                  style={{ marginRight: "1rem" }}
                ></i>
                My Cart
              </button>
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
