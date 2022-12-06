"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  // de derecha a izquiera: numero * (base(2) elevado a la posición del número desde 0) + 
  let numero = num.split("").reverse().join("")
  let decimal = 0
  for (let i = 0; i < numero.length; i++) {
      decimal += numero[i] * (2 ** [i])
  }
  return decimal
};

//Resolución del profesor
/*function BinarioADecimal(num){
  let base = 2
  let posicion = 0
  let acumulador = 0
  for (let i = num.length - 1; i >= 0; i--) {
      let numero = Number(num[i])
      acumulador = acumulador + (numero * (base ** posicion))
      posicion++
  }
  return acumulador
};*/

/*function BinarioADecimal(num){
  return parseInt(num,2)
};*/

function DecimalABinario(num){
  // tu codigo aca
  // divido el numero / base(2) y guardo el resto. El resultado son todos los restos leidos de abajo hacia arriba
  let resto = ""
  if(num === 0) return 0
  while(num !== 0){
      let resultado = Math.floor(num / 2)
      resto += num % 2
      num = resultado
  }
  let binario = resto.split("").reverse().join("")
  return binario
};

/*function DecimalABinario(num){
  let binario = ""
  while(num !== 0){
      let resto = num % 2
      num = (num - resto) / 2
      binario = resto.toString() + binario
  }
  return binario
};*/

/*function DecimalABinario(num){
  let resto = ""
  do {
    let resultado = Math.floor(num / 2)
    resto += num % 2
    num = resultado
  }
  while(num !== 0)
  
  let binario = resto.split("").reverse().join("")
  return binario
};*/

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};