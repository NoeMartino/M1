'use strict';

// EJERCICIO 1 Recursión
function nFactorial(n) {
   //Ejemplo: el factorial de 3 es 6 (3*2*1)
   //Fórmula: n! * n - 1!
   if (n > -1 && n < 2) return 1 //Si n es 0 o 1 devuelve 1 porque el factorial (n!) de 0 y de 1 es 1
   else if (n < 0) return false //No existe factorial de números negativos
   return n * nFactorial(n - 1) //Llamo de nuevo a la función con el parámetro modificado
}

// EJERCICIO 2 Recursión
function nFibonacci(n) {
   //Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597...
   //Cada número de esta secuencia está formado por la suma de los dos números anteriores
   //Tienes que crear una función que devuelva el número de la secuencia que esté en la posición pasada por parámetro
   //Retorna el enésimo número de la serie, por ejemplo, si pongo 6 me retorna 8 (el 8 está en 6to lugar)
   if (n < 0) return false //No existen números negativos en la secuencia
   if (n === 0 || n === 1) return n //Si es 0 o 1 retorno el mismo número
   return nFibonacci(n - 1) + nFibonacci(n - 2)
}

//cómo sería si nos pasaran el número y quisieran que le devolvamos la posición?

// EJERCICIO 3 Colas - filas (queue)
//Con función constructora
function Queue() {
   //Implementa la clase Queue que debe contener los siguientes métodos:
   //enqueue: Agrega un valor a la queue. Respeta el orden existente
   //dequeue: Remueve un valor de la queue. Obedece a FIFO (Firts In First Out) y respeta el underflow
   //size: Devuelve en número de elementos que contiene la queue
   this.array = []
}

Queue.prototype.enqueue = function(valor){
   this.array.push(valor)
}

Queue.prototype.dequeue = function(){
   return this.array.shift()
}

Queue.prototype.size = function(){
   return this.array.length
}

//Con clase de ES6
class Queue{
   constructor(){
      this.array = []
   }

   enqueue(valor){
      this.array.push(valor)
   }

   dequeue(){
      return this.array.shift()
   }

   size(){
      return this.array.length
   }
}

// EJERCICIO 4 Pilas (stack)

/*function Stack(){
   //Obecede a FILO (First In Last Out)
   this.pila = []
}

Stack.prototype.add = function(valor){
   this.pila.unshift(valor)
}

Stack.prototype.remove = function(){
   return this.pila.shift()
}

Stack.prototype.size = function(){
   return this.pila.length
}*/

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
   