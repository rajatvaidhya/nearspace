import React, { useState } from "react";
import "./Card.css";
import ProductModal from "./ProductModal";

const Card2 = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="card">
      {isModalOpen && (
        <ProductModal
          flag={setIsModalOpen}
          Itemkey={props.Itemkey}
          title={props.title}
          description={props.description}
          image={props.image}
          price={props.price}
          quantity={props.quantity}
        />
      )}
      <div className="card-design">
        <img src={props.image} alt="card-image" style={{ height: "250px" }} />

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
            style={{
              textAlign: "left",
              marginLeft: "2rem",
              fontSize: "2rem",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {props.title}
          </h2>
          <h2
            style={{ marginRight: "2rem", color: "green", fontSize: "1.7rem" }}
          >
            ₹{props.price}
          </h2>
        </div>
        <h4
          style={{
            textAlign: "left",
            marginLeft: "2rem",
            marginTop: "0.4rem",
            fontSize: "1.3rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {props.description}
        </h4>
        <button
          className="btn"
          style={{
            marginTop: "2rem",
            width: "90%",
            marginBottom: "2rem",
            fontSize: "1.3rem",
          }}
          onClick={handleOpenModal}
        >
          <i
            className="fa-solid fa-cart-shopping"
            style={{ marginRight: "1rem" }}
          ></i>
          Product Details
        </button>
      </div>
    </div>
  );
};

export default Card2;
