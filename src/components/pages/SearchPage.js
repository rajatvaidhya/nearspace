import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import "./SearchPage.css";
import SearchCard from "../SearchCard";

const SearchPage = () => {
  const { title } = useParams();
  const [items, setItems] = useState([]);

  const ENDPOINT = "http://localhost:5000";
  // const ENDPOINT = "https://paperkart-backend.onrender.com"

  const getItems = async () => {
    const response = await fetch(`${ENDPOINT}/api/items/searchItem`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
      }),
    });

    const json = await response.json();
    setItems(json);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <Navbar />
      <div className="parts">
      Search for <span style={{ color: "red" }}>{title}</span>
      </div>

      <div className="search-cards-container">
        {items.map((item) => (
          <SearchCard Itemkey={item._id} item={item} />
        ))}
      </div>
    </>
  );
};

export default SearchPage;
