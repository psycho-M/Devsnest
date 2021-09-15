import "./CartStyle.css";
import data from "../../data";

import CartItem from "./CartItem";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { updateLocalStorageCartData } from "../../redux/actions";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log("cart in Card.jsx",cart);
  const total = useSelector((state) => state.total);
  const status = useSelector((state) => state.loginStatus);

  

  return (
    <div className="cart">
      <div className="nav"></div>
      <main>
        <h2>Shopping Cart</h2>
        <div className="cart-product-container">
          <div className="table-header">
            <div className="product">Product</div>
            <div className="size">Size</div>
            <div className="amount">Quantity</div>
            <div className="price">Price</div>
            <div className="remove"></div>
          </div>
          {/* <CartItem productImage={data[0].main_img} productName={data[0].name} size="XL" price="23" quantity="1" />
                    <CartItem productImage={data[0].main_img} productName={data[0].name} size="XL" price="23" quantity="1" /> */}
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="checkout">
          <span className="total-cost">
            Total Amount: <span>{total}</span>
          </span>
          <span className="checkout-btn">
            <Link to={status ? "/order-now" : "/loginPage"}>
              <button>Checkout</button>
            </Link>
          </span>
        </div>
      </main>
    </div>
  );
}

export default Cart;
