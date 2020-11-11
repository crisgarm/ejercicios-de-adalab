import React, { useState } from "react";

function Button() {
  const [number, setNumber] = useState(28);
  const [gift, setGift] = useState(1);

  const getNumber = () => {
    setNumber(number + 1);
    setGift(gift + 1);
  };

  return (
    <>
      <p>Hoy tengo {number} años de edad</p>
      <p>Tengo {gift} regalos</p>
      <button type="button" onClick={getNumber}>
        Hazme más viejo y dame regalos
      </button>
    </>
  );
}

export default Button;
