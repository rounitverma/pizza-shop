import React from "react";
import "./styles.css";

function CartCountButton({ cartCount }) {
  return (
    <div className="btnCartCount">
      <div className="count">{cartCount >= 100 ? "99+" : cartCount}</div>
      <i className="fas fa-shopping-cart"></i>
    </div>
  );
}

export default CartCountButton;
