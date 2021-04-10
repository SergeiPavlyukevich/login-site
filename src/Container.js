import React, { useState } from "react";
import { Block } from "./Block";

const blocks = [
  {
    name: 1,
  },
  {
    name: 2,
  },
  {
    name: 2,
  },
  {
    name: 1,
  },
];




export default function Container() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        if (count <2) {
        setCount(count + 1)
        } else setCount(0)   
    }
    console.log(count)
  return (
    <div className="container">
      {blocks.map((item, index) => (
        <Block item={item.name} onClick={handleClick}/>
      ))}
    </div>
  );
}

// 
