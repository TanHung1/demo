import React, { useState, useEffect } from "react";
import "../Style/cart.css";
function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartItems);
  }, []);

  const handleIncreaseQuantity = (item) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      cartItems[index].quantity += 1;
      localStorage.setItem("cart", JSON.stringify(cartItems));
      setCart(cartItems);
    }
  };

  const handleDecreaseQuantity = (item) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      if (cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1;
      } else {
        cartItems.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(cartItems));
      setCart(cartItems);
    }
  };

  const handleRemoveItem = (item) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      setCart(cartItems);
    }
  };

  const renders = () => {
    return cart.map((item, index) => {
      return (
        <div key={index}>
          <table class="table" style={{ width: "80%" }}>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Image</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <img src={item.image} style={{ width: "20%" }} />
                </td>
                <td className="action">
                  <button
                    onClick={() => handleDecreaseQuantity(item)}
                    className="btn"
                  >
                    -
                  </button>
                  <h5 style={{ padding: "5px" }}>{item.quantity}</h5>
                  <button
                    onClick={() => handleIncreaseQuantity(item)}
                    className="btn"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item)}
                    className="btn"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    });
  };

  return (
    <div className="cart-item">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart">
          <div>
            {renders()}
            <p>
              Total:{" "}
              {cart.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
