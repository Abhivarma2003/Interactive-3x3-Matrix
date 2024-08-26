import React, { useState } from "react";
import "./Matrix.css";

const Matrix = () => {
  const [boxColors, setBoxColors] = useState(Array(9).fill("white"));
  const [clickOrder, setClickOrder] = useState([]);
  const handleBoxClick = (index) => {
    if (clickOrder.length === 9) return;

    const newColors = [...boxColors];
    newColors[index] = "green";
    setBoxColors(newColors);

    const newClickOrder = [...clickOrder, index];
    setClickOrder(newClickOrder);
    if (newClickOrder.length === 9) {
      newClickOrder.forEach((i, idx) => {
        setTimeout(() => {
          const updatedColors = [...newColors];
          updatedColors[i] = "orange";
          setBoxColors(updatedColors);
        }, idx * 500);
      });
    }
  };

  return (
    <div className="matrix">
      {boxColors.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={() => handleBoxClick(index)}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default Matrix;
