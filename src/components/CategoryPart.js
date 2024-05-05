import React, { useEffect, useState } from "react";
import "./CategorySearch.css";
import PartCard from "./PartCard";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

const CategoryPart = (props) => {
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
          if (items[i].category === title) {
            uniqueItems.push(items[i]);
          }
        }

        uniqueItems = Object.values(
          uniqueItems.reduce((accumulator, item) => {
            if (!accumulator[item.subCategory]) {
              accumulator[item.subCategory] = item;
            }
            return accumulator;
          }, {})
        );

        setItems(uniqueItems);

        console.log(uniqueItems);
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
            <PartCard title={part.subCategory} src={part.subCategoryImage} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPart;
