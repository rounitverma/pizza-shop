import React from "react";
import ButtonAddRemoveItem from "../../ButtonAddRemoveItem";
import "./styles.css";

const MenuItem = ({ item }) => {
  const { id, name, description, price, img_url } = item;
  return (
    <div className="item">
      <img src={img_url} alt="item" />
      <div className="item-head_desc">
        <p className="head_desc-name">{name}</p>
        <p className="head_desc-info">
          <small>{description}</small>
        </p>
      </div>
      <div className="item-foot_desc">
        <span className="foot_desc-price">Rs. {price} </span>
        <ButtonAddRemoveItem quantity={0} />
      </div>
    </div>
  );
};

export default MenuItem;
