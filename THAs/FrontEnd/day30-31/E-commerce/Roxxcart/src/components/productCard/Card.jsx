import React, { useState } from "react";
import "./Card.css";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  addQuantity,
  updateTotal,
  addFav,
  subFav,
} from "../../redux/actions";
import { Link } from "react-router-dom";
import ProductPage from "../productPage/productPage";

export default function Card({ item }) {
  const [liked, setLiked] = useState(true);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  let filterSize = document.getElementById("filter-size");
  console.log("filter size element value", filterSize ? filterSize.value : "");
  let cartStorage = window.localStorage;

  function handleClick() {
    setLiked(!liked);
    if (liked === true) {
      dispatch(addFav(item));
    } else {
      dispatch(subFav(item.id));
    }
  }

  function isPresentInCart(id) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        dispatch(addQuantity(cart[i].id));
        dispatch(updateTotal(item.price));
        return true;
      }
    }
    return false;
  }
  return (
    <IconContext.Provider
      value={{ style: { fontSize: "22px", color: "#4C4C6D" } }}
    >
      <div className="card">
        <Link
          to={{
            pathname: "/products/" + item.id,
            state: item,
          }}
        >
          <img className="card-image" src={item.main_img} alt="Logo" />
        </Link>
        <div className="card-bottom">
          <div className="card-header">
            <h4 className="card-title">
              <Link
                to={{
                  pathname: "/products/" + item.id,
                  state: item,
                }}
                style={{ textDecoration: "none", color: "black" }}
              >
                {item.name}
              </Link>
            </h4>
            <p>Price ₹ : {item.price}</p>
          </div>
          <button
            onClick={() => {
              if (!isPresentInCart(item.id)) {
                dispatch(
                  addProduct({
                    ...item,
                    quantity: 1,
                    currPrice: item.price,
                    currSize: filterSize ? filterSize.value : item.size[0],
                    shippingMethod: "Standard",
                  })
                );
                dispatch(updateTotal(item.price));
              }
              cartStorage.setItem("cart", JSON.stringify(cart));
              console.log(cart);
            }}
            className="add-to-cart"
          >
            <MdAddShoppingCart
              style={{
                cursor: "pointer",
              }}
            />
          </button>
        </div>
        <div className="card-like-bar">
          {liked ? (
            <BsHeart onClick={handleClick} />
          ) : (
            <BsFillHeartFill
              style={{
                color: "#fbb03b",
              }}
              onClick={handleClick}
            />
          )}
        </div>
      </div>
    </IconContext.Provider>
  );
}
