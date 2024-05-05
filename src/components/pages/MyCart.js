import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import "./MyCart.css";
import CartCard from "../CartCard";

const MyCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const token = localStorage.getItem("token");

  const ENDPOINT = "http://localhost:5000";
  // const ENDPOINT = "https://paperkart-backend.onrender.com"

  const fetchCartItems = async () => {
    try {
      const response = await fetch(`${ENDPOINT}/api/items/allCartItems`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });

      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  const totalPrice = cartItems.reduce((total, product) => total + Number(product.price), 0);

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mycart-container">
        <h1>
          <span style={{ color: "black" }}>
            {" "}
            <i
              className="fa-solid fa-cart-shopping"
              style={{ marginRight: "1rem" }}
            ></i>{" "}
            My
          </span>{" "}
          Cart
        </h1>

        <div className="main-cart-container">
          <div className="card-container">
            {cartItems.map((product) => (
              <CartCard
                ItemKey={product._id}
                title={product.title}
                image={product.image}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>

          <div className="billing-container">
            <h1 style={{ marginBottom: "2rem", fontSize:'2rem', marginTop:'0'}}>Billing & Invoice</h1>

            <ul>
              {cartItems.map((product) => (
                <div className="billing-list-item">
                  <span>{(product.title).slice(0, 20)} ... </span>
                  <span>Units : 1</span>
                  <span>₹ {product.price}</span>
                </div>
              ))}


              <div className="billing-list-item" style={{marginTop:'2rem', marginBottom:'2rem'}}>
                <span>Sum Total : </span>
                <span>₹ {totalPrice}</span>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCart;
