import React from "react";
import "./CategoryCards.css";
import { Link } from "react-router-dom";

const CategoryCards = (props) => {
  return (
    <Link to={`category/${props.title}`}>
      <div className="category-cards-container">
        <div>
          <img src={props.src} alt="category-image" />
          <p style={{ color: "black" }}>{props.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCards;
