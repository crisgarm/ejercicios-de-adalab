import React, { useState } from "react";

function Button() {
  const [number, setNumber] = useState(20);

  const getNumber = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <p>Hoy tengo {number} años de edad</p>
      <button type="button" onClick={getNumber}>
        Hazme más viejo
      </button>
    </>
  );
}

export default Button;
