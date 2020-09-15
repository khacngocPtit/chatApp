import React, { useState } from "react";
import "./style.css";

ColorBox.propTypes = {};
function randomColor() {
  const listColor = [
    "red",
    "yellow",
    "black",
    "#0984e3",
    "#00b894",
    "#00b894",
    "#a29bfe",
    "#e17055",
    "#e84393",
    "#00b894",
  ];
  const changeColor = Math.trunc(Math.random() * listColor.length);
  return listColor[changeColor];
}
function ColorBox() {
  const [color, setColor] = useState("yellow");
  function handelSetcolor() {
    const newColor = randomColor();
    setColor(newColor);
  }
  return (
    <div
      className="colorBox"
      style={{ backgroundColor: color }}
      onClick={handelSetcolor}
    ></div>
  );
}

export default ColorBox;
