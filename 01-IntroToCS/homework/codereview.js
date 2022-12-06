"use strict";

function BinarioADecimal(num) {
  let binario = Array.from(num).reverse();
  let rta = 0;

  for (let i = 0; i < binario.length; i++) {
    rta = rta + Math.pow(2, i) * binario[i];
  }

  return rta;
}

function DecimalABinario(num) {
  let decimal = Number(num);
  let rta = [];

  while (decimal > 0) {
    rta.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }

  return rta.reverse().join("");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
