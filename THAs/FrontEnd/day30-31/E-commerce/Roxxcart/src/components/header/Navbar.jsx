import React, { useState } from "react";
import "./Navbar.css";
import { FiShoppingCart, FiUser } from "react-icons/fi";

function Navbar() {
  const [search, setSearch] = useState("");
  const handleClick = (e) => {
    console.log("jemlo");
    e.preventDefault();
  };
  return (
    <div className="nav">
      <h2>RoxxCart</h2>

      {/* <form className="form" onSubmit={handleClick}>
        <input
          type="text"
          className="form"
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(e.target.value);
          }}
          value={search}
        ></input>
        <button type="submit">Search</button>
      </form> */}

      <div className="nav-right">
        <FiShoppingCart />
        <FiUser />
      </div>
    </div>
  );
}

export default Navbar;
