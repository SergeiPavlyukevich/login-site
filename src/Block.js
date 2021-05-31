import React, { useState } from "react";

export const Block = ({ item, onClick }) => {
  const [isActiveCard, setActiveCard] = useState(false);
  const handleClick = () => {
    onClick();
    setActiveCard(true)
  }
  return (
    <div onClick={handleClick} className="block">
      {isActiveCard ? item: null}
    </div>
  );
};


