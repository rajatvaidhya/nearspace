import React from "react";
import "./CategoryCards.css";
import { Link } from "react-router-dom";

const PartCard = (props) => {
  return (
    <Link to={`/category/part/${props.title}`}>
      <div className="category-cards-container">
        <div>
          <img src={props.src} alt="category-image" />
          <p style={{color:'black'}}>{props.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default PartCard;
