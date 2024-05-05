import React, { useState } from "react";
import "./SearchCard.css";
import Modal from "./Modal";

const SearchCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [modalImage, setModalImage] = useState("");

  const ENDPOINT = "http://localhost:5000";
  // const ENDPOINT = "https://paperkart-backend.onrender.com"

  const handleAddCart = async () => {
    const token = localStorage.getItem("token");

    const response = await fetch(`${ENDPOINT}/api/items/addItem`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify({
        Itemkey: props.Itemkey,
        title: props.item.title,
        image: props.item.image,
        description: props.item.description,
      }),
    });

    const check = await response.json();

    if (check.success) {
      setModalTitle("Added to cart successfully!");
      setModalDescription("Check your cart.");
      setModalImage("fas fa-check-circle");
      setIsModalOpen(!isModalOpen);
    } else {
      setModalTitle("Product already present in cart");
      setModalDescription("Check your cart.");
      setModalImage("fas fa-cart-arrow-down");
      setIsModalOpen(!isModalOpen);
    }
  };

  return (
    <div className="card23">
      {isModalOpen && (
        <Modal
          flag={setIsModalOpen}
          title={modalTitle}
          description={modalDescription}
          image={modalImage}
        />
      )}
      <div className="card23-design">
        <img src={props.item.image} style={{height:'250px'}} alt="card23-image" />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "1rem",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{ textAlign: "left", marginLeft: "2rem", fontSize: "2rem", whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}
          >
            {props.item.title}
          </h2>
          <h2
            style={{ marginRight: "2rem", color: "green", fontSize: "1.7rem" }}
          >
            ₹{props.item.price}
          </h2>
        </div>
        <h4
          style={{
            textAlign: "left",
            marginLeft: "2rem",
            marginTop: "0.4rem",
            fontSize: "1.3rem",
            whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'
          }}
        >
          {props.item.description}
        </h4>
        <button
          className="btn"
          style={{
            marginTop: "2rem",
            width: "90%",
            marginBottom: "2rem",
            fontSize: "1.3rem",
          }}
          onClick={handleAddCart}
        >
          <i
            className="fa-solid fa-cart-shopping"
            style={{ marginRight: "1rem" }}
          ></i>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SearchCard;
