import React, { useState } from "react";
import "./Search.css";
import {useNavigate} from "react-router-dom";

const Search = () => {
  const [partName, setPartName] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setPartName(event.target.value);
  };

  const handleSubmit = () => {
    navigate(`/search/${partName}`);
  }

  return (
    <>
      <div className="search">
        <div>
          <form method="POST" action="/" onSubmit={handleSubmit}>
            <input
              className="search-input"
              placeholder="Search for product"
              onChange={handleChange}
              value={partName}
            />
          </form>
        </div>
        <div>
          <i className="fa-solid fa-camera"></i>
        </div>
      </div>
    </>
  );
};

export default Search;
