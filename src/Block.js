import React, { useState } from "react";

export const Block = ({ item, onClick }) => {
  const [isActiveCard, setActiveCard] = useState(0);
  const handleClick=()=>{
    onClick();
    setActiveCard(item)
  }
  return (
    <div
      name={isActiveCard}
      onClick={handleClick}
      className="block"
    >
      {isActiveCard ? isActiveCard: null}
    </div>
  );
};
