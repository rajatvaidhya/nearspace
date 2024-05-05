import React, { useEffect, useState } from "react";
import "./Featured.css";
import Card from "./Card";

const Featured = () => {
  const [items, setItems] = useState([]);

  const ENDPOINT = "http://localhost:5000";
  // const ENDPOINT = "https://paperkart-backend.onrender.com"

  useEffect(() => {
    fetch(`${ENDPOINT}/api/items/getitems`)
      .then((response) => response.json())
      .then((items) => setItems(items))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="featured-container">
      <h1>
        <span style={{ color: "black" }}>Featured</span> Products
      </h1>
      <div className="card-container2">
        {items.slice(0, 9).map((item) => (
          <Card Itemkey={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
