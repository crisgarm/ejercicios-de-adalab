import React, { useState } from "react";
import "../stylesheets/App.css";

function Square() {
  const [color, setColor] = useState("blue");

  function handleClick() {
    setColor((color) => {
      let newSquare;
      if (color !== "blue") {
        console.log("Entro en if");
        newSquare = "blue";
      } else {
        newSquare = "red";
        console.log("Entro en else");
      }
      return newSquare;
    });
  }

  return <div className={color} onClick={handleClick}></div>;
}
export default Square;
