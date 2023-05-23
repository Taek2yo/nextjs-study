'use client'

import { useState } from "react";

export default function List() {
  const [products, setProducts] = useState([
    {
      name: "Tomatoes",
      price: "20",
      수량: 0
    },
    {
      name: "Pasta",
      price: "30",
      수량: 0
    },
    {
      name: "Coconut",
      price: "40",
      수량: 0
    },
  ]);
  
  const increaseQuantity = (i) => {
    const copy = [...products];
    copy[i] = {
      ...copy[i],
      수량: copy[i].수량 + 1
    };
    setProducts(copy);
  };

  const decreaseQuantity = (i) => {
    const copy = [...products];
    if (copy[i].수량 > 0) {
      copy[i] = {
        ...copy[i],
        수량: copy[i].수량 - 1
      };
      setProducts(copy);
    }
  };

  return (
    <div>
      <h1 className="title">Products</h1>     
      {products.map((item, idx) => {
        return (
          <div className="food" key={idx}>
            <img src={`/food${idx}.png`} className="food-img" alt={item.name}/>
            <h4>{item.name} ${item.price}</h4>
            <button onClick={()=>{decreaseQuantity(idx)}}>-</button>
            <span> {item.수량} </span>
            <button onClick={()=>{increaseQuantity(idx)}}>+</button>
          </div>
        );
      })}
    </div>
  );
}