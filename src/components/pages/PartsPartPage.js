import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Card2 from "../Card2";

const PartsPartPage = () => {
  const { title } = useParams();

  const [items, setItems] = useState([]);

  const ENDPOINT = "http://localhost:5000";
  // const ENDPOINT = "https://paperkart-backend.onrender.com"

  useEffect(() => {
    fetch(`${ENDPOINT}/api/items/getitems`)
      .then((response) => response.json())
      .then((items) => {
        let uniqueItems = [];

        for (var i = 0; i < items.length; i++) {
          if (items[i].subCategory === title) {
            uniqueItems.push(items[i]);
          }
        }

        setItems(uniqueItems);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="category-search-container">
        <h1>
          <span style={{ color: "black" }}>{title}</span>
          <div
            style={{
              borderBottom: "2px solid red",
              margin: "auto",
              width: "15%",
              marginTop: "1rem",
            }}
          ></div>
        </h1>

        <div className="category-cards-grid">
          {items.map((part) => (
            <Card2
              Itemkey={part._id}
              title={part.title}
              image={part.image}
              description={part.description}
              price={part.price}
              quantity={part.quantity}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PartsPartPage;
