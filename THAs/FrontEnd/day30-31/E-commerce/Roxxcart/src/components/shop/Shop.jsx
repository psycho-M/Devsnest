import React, { useState } from "react";
import { useSelector } from 'react-redux';
import Card from "../productCard/Card";
import "./Shop.css";
import Filter from "../filter/Filter";


export default function Shop() {
  const data = useSelector(state => state.shop);
  
  const mainData = data.map((item) => (
    <Card
      key={item.id}
      item={item}
    />
  ));
  return (
    <div className="shop">
      <Filter />

      <div className="shop-content">{mainData}</div>
    </div>
  );
}
