import React, { useEffect, useRef, useState } from "react";
import "./AdminAdd.css";
import Navbar from "../Navbar";
import Select from "react-select";
import JoditEditor from 'jodit-react';

const AdminAdd = () => {
  const [categoryArray, setCategoryArray] = useState([]);
  const [subCategoryArray, setSubCategoryArray] = useState([]);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const editor = useRef(null);

  const ENDPOINT = "http://localhost:5000";
  // const ENDPOINT = "https://paperkart-backend.onrender.com"

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleImageChange = (e) => {
    setImage(e.target.value);
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${ENDPOINT}/api/items/fetchAllCategories`
        );
        const data = await response.json();
        setCategoryArray(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchData();
  }, []);

  const options1 = categoryArray.map((categoryX) => ({
    value: categoryX,
    label: categoryX,
  }));

  const handleCategoryOptionChange = async (event) => {
    try {
      const response = await fetch(
        `${ENDPOINT}/api/items/fetchAllSubCategories`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ category: event.value }),
        }
      );
      const data = await response.json();
      setSubCategoryArray(data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }

    setCategory(event.value);
  };

  const options2 = subCategoryArray.map((categoryX) => ({
    value: categoryX,
    label: categoryX,
  }));

  const handleSubCategoryOptionChange = (event) => {
    setSubCategory(event.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${ENDPOINT}/api/items/addAdminItems`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title:title, description:description, price:price, image:image, category:category, subCategory:subCategory, quantity:quantity, address:address }),
        }
      );
      const data = await response.json();
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <>
      <Navbar />

      <form onSubmit={handleSubmit}>
        <div className="main-admin-container">
          <h1 style={{color:'black'}}>Add <span style={{color:'red'}}>Products</span></h1>

          <div className="add-container">
            <div className="image-drag-container">
              <i
                className="fas fa-cloud-upload-alt"
                style={{ fontSize: "4rem" }}
              ></i>
              <h2 style={{ fontSize: "2rem" }}>
                Drag and Drop the Item's Image
              </h2>
              <input
                type="text"
                placeholder="Paste the Image link"
                onChange={handleImageChange}
                style={{ width: "80%" }}
              />
            </div>

            <div className="form-add-container">
              <input
                type="text"
                placeholder="Enter product name"
                onChange={handleTitleChange}
                style={{ width: "100%", fontSize: "1.3rem" }}
              />

<input
                type="text"
                placeholder="Enter address"
                onChange={handleAddressChange}
                style={{ width: "100%", fontSize: "1.3rem" }}
              />

              <div
                className="price-quantity"
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "space-between",
                }}
              >
                <input
                  type="text"
                  className="inps"
                  placeholder="Enter product price in Rs."
                  onChange={handlePriceChange}
                  style={{ width: "100%", fontSize: "1.3rem" }}
                />
                <input
                  type="text"
                  className="inps"
                  placeholder="Enter product quantity"
                  onChange={handleQuantityChange}
                  style={{ width: "100%", fontSize: "1.3rem" }}
                />
              </div>

              <div
                className="category-subcategory"
                style={{
                  display: "contents",
                  fontSize: "1.3rem",
                  gap: "1rem",
                }}
              >
                <Select
                  options={options1}
                  onChange={handleCategoryOptionChange}
                  placeholder="Select Category"
                />
                <Select
                  options={options2}
                  onChange={handleSubCategoryOptionChange}
                  placeholder="Select Sub Category"
                />
              </div>

              {/* <textarea
                row="40"
                col="40"
                placeholder="Enter product description"
                onChange={handleDescriptionChange}
                style={{
                  width: "100%",
                  border: "1px solid rgb(216, 216, 216)",
                  borderRadius: "5px",
                  padding: "10px",
                  fontSize: "1.3rem",
                }}
              ></textarea> */}

              <JoditEditor
                    ref={editor}
                    value={description}
                    onChange={newContent => setDescription(newContent)}
                  />

              <button className="btn" style={{color:'white'}} type="submit">Add</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AdminAdd;
