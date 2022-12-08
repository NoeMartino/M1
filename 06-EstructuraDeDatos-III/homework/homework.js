'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.right = null;
   this.left = null
};

//let tree = new BinarySearchTree(5) // Instancio un nuevo árbol con nodo 5, e hijos izquiero y derecho vacíos

/*      5
       / \
     null null
*/

BinarySearchTree.prototype.insert = function(value){
   if(value > this.value){//Si el valor es mayor que el nodo raíz
      if(this.right === null){//Y si el lado derecho está vacío
      this.right = new BinarySearchTree(value)//Agrego un nuevo nodo (árbol) a la derecha
      } else {
         this.right.insert(value)
        } //Sino vuelvo a llamar a la función con ese otro árbol
   }
   if(value < this.value){//Lo mismo si el valor es menor al nodo raíz (va a la izquierda)
      if(this.left === null){
      this.left = new BinarySearchTree(value)
      } else {
         this.left.insert(value)
       }
   }
};

//tree.insert(6)//Llamo a la función para ese árbol para insertar el nodo 6

/*      5
       / \
     null 6
         / \
     null  null
*/

BinarySearchTree.prototype.size = function(){
   let acc = 0
   acc++
   if (this.value === null) return acc
   if (this.value !== null) {
      if (this.right !== null) acc += this.right.size()
      if (this.left !== null) acc += this.left.size()
   }
      return acc
};
/*
   //Árbol sin hijos
   if(this.right === null && this.left === null) return 1;
   //Árbol con hijo a la derecha
   if(this.right !== null && this.left === null) return 1 + this.right.size();
   //Árbol con hijo a la izquierda
   if(this.right === null && this.left !== null) return 1 + this.left.size();
   //Árbol con hijos a la derecha y a la izquierda
   if(this.right !== null && this.left !== null) return 1 + this.right.size() + this.left.size();
};*/

BinarySearchTree.prototype.contains = function(value){
   //Si el valor en el que estoy parado es igual al valor pedido retorno true
   if(value === this.value) return true
   //Sino empiezo a buscar por la derecha si el valor pedido es mayor
   if(value > this.value){
      //Si el valor en el que estoy parada ahora es igual al valor pedido retorno true
      if(this.right === value) return true;
      //Si no hay nada en la derecha el valor pedido no existe
      else if (this.right === null) return false;
      //Si la derecha tiene algo aplico la recursión a esa rama
      else return this.right.contains(value); //Importante, return para que el resultado de esa búsqueda se vaya pasando a la función anterior
   }
   //Sino empiezo a buscar por la izquierda si el valor pedido es menor y después todo lo mismo
   if(value < this.value){
      if(this.left === value) return true;
      else if (this.left === null) return false;
      else return this.left.contains(value);
   }
};

//- depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
//"pre-order": ROOT - IZQUIERDA - DERECHA
//"post-order": IZQUIERDA - DERECHA - ROOT
//"in-order": IZQUIERDA - ROOT - DERECHA

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
   if(order === "pre-order"){
      cb(this.value)//Ejecuta la cb en el root
      if(this.left !== null) this.left.depthFirstForEach(cb, order)//Luego va a la izquiera en recursión hasta ya no encontrar nada, en ese caso ejercuta el cb en el valor de la izquierda
      if(this.right !== null) this.right.depthFirstForEach(cb, order)//Luego evalúa la derecha
   }
   else if(order === "post-order"){
      if(this.left !== null) this.left.depthFirstForEach(cb, order)
      if(this.right !== null) this.right.depthFirstForEach(cb, order)
      cb(this.value)
   }
   else {
      if(this.left !== null) this.left.depthFirstForEach(cb, order)
      cb(this.value)
      if(this.right !== null) this.right.depthFirstForEach(cb, order)
   }
};

//CON SWITCH
/*BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
   switch(order){
      case "pre-order":
         cb(this.value)
         if(this.left !== null) this.left.depthFirstForEach(cb, order)
         if(this.right !== null) this.right.depthFirstForEach(cb, order)
         break;
      case "post-order":
         if(this.left !== null) this.left.depthFirstForEach(cb, order)
         if(this.right !== null) this.right.depthFirstForEach(cb, order)
         cb(this.value)
         break;
      default:
         if(this.left !== null) this.left.depthFirstForEach(cb, order)
         cb(this.value)
         if(this.right !== null) this.right.depthFirstForEach(cb, order)
         break;
   }
};*/

//- breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS) (por niveles)

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []){
   //El array en el parámetro es para recibir una variable auxiliar, si no le paso nada, por defecto está vacío pero cuando luego lo paso sin el = toma el valor que adquirió durante la ejecución de la función
   if(this.left !== null) array.push(this.left)
   //Si tengo algo a la izquierda lo pusheo al array para no perder los datos y trabajar luego con ellos
   if(this.right !== null) array.push(this.right)
   //Lo mismo a la derecha
   cb(this.value)
   //Ejecuto el cb con el valor en el que estoy parada (el nodo)
   if(array.length > 0){
      //Mientras el array tenga algo, le quito el primer elemento y aplico recursión con ese elemento
      array.shift().breadthFirstForEach(cb, array)
      //Ahora cuando le paso el array como parámetro, ese array ya tiene la info anterior
   }
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
