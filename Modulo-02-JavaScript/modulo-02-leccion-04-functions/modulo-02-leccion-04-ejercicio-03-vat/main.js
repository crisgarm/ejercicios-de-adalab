"use strict";

function finalPriceCalculator(a) {
  const vatValue = (a * 21) / 100;
  console.log(
    "Precio sin IVA: ",
    a,
    " IVA: ",
    vatValue,
    " Total: ",
    a + vatValue
  );
}

finalPriceCalculator(23);
finalPriceCalculator(44);
