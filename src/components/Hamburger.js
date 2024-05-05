import React, { useState } from "react";
import "./Hamburger.css";
import { Link, useNavigate } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="hamburger-menu">
      <button className="hamburger-button" onClick={() => setIsOpen(!isOpen)}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <ul className={isOpen ? "menu open" : "menu"}>
        <li>
          <i className="fa-solid fa-house"></i>{" "}
          <Link to="/" style={{ color: "red" }}>
            Home
          </Link>
        </li>
        <li>
          <i className="fas fa-cog"></i>{" "}
          <Link to="/services" style={{ color: "red" }}>
            Services
          </Link>
        </li>
        <li>
          <i className="fa-regular fa-star"></i>{" "}
          <Link to="/about" style={{ color: "red" }}>
            About
          </Link>
        </li>
        <li>
          <i className="fa-solid fa-address-book"></i>{" "}
          <Link to="/contact" style={{ color: "red" }}>
            Contacts
          </Link>
        </li>

        <div className="buttons">
          <div>
            <button className="btn" onClick={handleLogout}>
              <i
                className="fa-solid fa-user"
                style={{ marginRight: "1rem" }}
              ></i>
              Logout
            </button>
          </div>

          <div>
            <Link to="/mycart">
              <button
                className="btn"
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
        </div>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
