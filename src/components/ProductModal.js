import React, { useState } from "react";
import "./ProductModal.css";

const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const ENDPOINT = "http://localhost:5000";
  // const ENDPOINT = "https://paperkart-backend.onrender.com"

  const handleAddCart = async () => {
    const token = localStorage.getItem("token");

    const response = await fetch(`${ENDPOINT}/api/items/addItem`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify({
        Itemkey: props.Itemkey
      }),
    });

    const check = await response.json();

    if(check.success) {
        alert("Added to cart!");
    }
    else {
        alert("Already present!");
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    props.flag(false);
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="details-container">
                <img src={props.image}/>
                <div className="product-details">
                    <h2>{props.title}</h2>
                    <p style={{height:'100px', overflow:'auto'}}>{props.description}</p>
                    <p style={{color:'black', overflow:'auto'}}>Address : {props.address}</p>

                    <div style={{display:'flex', flexDirection:'row', gap:'4rem'}}>
                        <div style={{display:'flex'}}>
                            <p style={{fontSize:'1.5rem'}}>Price : &nbsp;</p>
                            <p style={{fontSize:'1.5rem', color:'rgb(114, 190, 0)'}}>₹ {props.price}</p>
                        </div>
                        <div style={{display:'flex'}}>
                            <p style={{fontSize:'1.5rem'}}>Stock : &nbsp;</p>
                            <p style={{fontSize:'1.5rem', color:'rgb(114, 190, 0)'}}>{props.quantity}</p>
                        </div>
                    </div> 
                    <button onClick={handleAddCart} className="btn addButton" style={{display:'flex', color:"white", fontSize:'1.3rem', background:'red', alignItems:'left'}}> <i style={{fontSize:'1.5rem', color:'white', margin:'auto', marginRight:'1rem'}} className="fa-solid fa-cart-shopping"></i> Add to cart</button>
                </div>
            </div>
            <button className='btn addButton' onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;