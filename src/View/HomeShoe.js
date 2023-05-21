import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Style/HomeShoe.css";

function HomeShoe() {
  const [shoes, setShoes] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3030/data_shoes")
      .then((res) => setShoes(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const itemCount = cartItems.reduce(
      (count, item) => count + item.quantity,
      0
    );
    setCartItemCount(itemCount);
  }, []);

  const handleAddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      cartItems[index].quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
    const itemCount = cartItems.reduce(
      (count, item) => count + item.quantity,
      0
    );
    setCartItemCount(itemCount);
  };

  return (
    <div>
      <div className="cards">
        {shoes.map((shoe) => (
          <div key={shoe.id}>
            <div className="card">
              <img src={shoe.image} alt={shoe.image} style={{ width: "50%" }} />
              <div className="card-body">
                <h5 className="card-title">{shoe.name}</h5>
                <h5 className="card-title">{shoe.shortdescription}</h5>
                <p className="card-text">{shoe.price}</p>
                <button
                  class="btn btn-primary"
                  onClick={() => handleAddToCart(shoe)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="" style={{ color: "black" }}>
        Sản phẩm hiện đang có trong giỏ hàng: {cartItemCount}
      </div>
    </div>
  );
}

export default HomeShoe;
