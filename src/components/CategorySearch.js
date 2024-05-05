import React, { useEffect, useState } from "react";
import "./CategorySearch.css";
import CategoryCards from "./CategoryCards";


const CategorySearch = () => {

  const [items, setItems] = useState([]);

  const ENDPOINT = "http://localhost:5000";
  // const ENDPOINT = "https://paperkart-backend.onrender.com"

  useEffect(() => {
    fetch(`${ENDPOINT}/api/items/getitems`)
      .then(response => response.json())
      .then(items => {
        const uniqueItems = Object.values(items.reduce((accumulator, item) => {
          if (!accumulator[item.category]) {
            accumulator[item.category] = item;
          }
          return accumulator;
        }, {}));
        setItems(uniqueItems);
      })
      .catch(error => console.error(error));
  }, []);


  return (
    <div className="category-search-container">
      <h1>
        <span style={{ color: "black" }}>Category</span> Search
      </h1>

      <div className="category-cards-grid">
        {items.map((item) => (
          <CategoryCards
            title={item.category}
            src={item.categoryImage}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySearch;
