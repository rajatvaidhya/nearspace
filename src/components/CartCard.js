import React from "react";
import "./CartCard.css";

const CartCard = (props) => {

  const ENDPOINT = "http://localhost:5000";
  // const ENDPOINT = "https://paperkart-backend.onrender.com"

  const handleRemoveItem = async () => {
    const response = fetch(
      `${ENDPOINT}/api/items/removeItem/${props.ItemKey}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );

    window.location.reload();
    alert("Item Removed Succesfully!");
  };

  const handleBuyProduct = async () => {

    const keyRes = await fetch(`${ENDPOINT}/api/getKey`, {
      method:'GET',
      headers: {
        "Content-Type": "application/json",
      }
    });

    const OriginalKey = await keyRes.json()
    console.log("Key", OriginalKey.key);

    const response = await fetch(
      `${ENDPOINT}/api/paymentRoute/checkout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount:props.price
        }),
      }
    );

    const objRes = await response.json();
    console.log("ObjRes", objRes.order.id);
    console.log(props.price);

    const options = {
      "key": OriginalKey.key,
      "amount": Number(props.price * 100),
      "currency": "INR",
      "name": "NearSpare",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": objRes.order.id,
      "callback_url": `${ENDPOINT}/api/paymentRoute/payment/verification`,
      "prefill": {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "9000090000"
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#f20707"
      }
  };
    
    const razorpay = new window.Razorpay(options);
    razorpay.open();    
  }

  return (
    <div className="card cart-card">
      <div className="card-design">
        <img src={props.image} alt="card-image" style={{height:'250px'}}/>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "1rem",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{ textAlign: "left", marginLeft: "2rem", fontSize: "2rem", whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}
          >
            {props.title}
          </h2>
          <h2
            style={{ marginRight: "2rem", color: "green", fontSize: "1.7rem" }}
          >
            ₹{props.price}
          </h2>
        </div>
        <h4
          style={{
            textAlign: "left",
            marginLeft: "2rem",
            marginTop: "0.4rem",
            fontSize: "1.3rem",
            whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'
          }}
        >
          {props.description}
        </h4>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "90%",
            margin: "auto",
            gap: "1rem",
          }}
        >
          <button
            className="btn"
            style={{
              marginTop: "2rem",
              width: "90%",
              marginBottom: "2rem",
              fontSize: "1.2rem",
            }}
            onClick={handleBuyProduct}
          >
            <i
              className="fas fa-shopping-bag"
              style={{ marginRight: "1rem" }}
            ></i>
            Buy
          </button>
          <button
            className="btn"
            style={{
              marginTop: "2rem",
              width: "90%",
              marginBottom: "2rem",
              fontSize: "1.2rem",
              backgroundColor: "white",
              border: "1px solid red",
              color: "red",
            }}
            onClick={handleRemoveItem}
          >
            <i
              className="fa-solid fa-circle-minus"
              style={{ marginRight: "1rem" }}
            ></i>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
