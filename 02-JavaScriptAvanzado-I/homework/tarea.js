//Scope & Hoisting
//Ejercicio 1 HACER EN GRAFICO DE CONTEXTOS
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x);//10
   console.log(a);//8
   var f = function (a, b, c) {
      b = a;
      console.log(b);//8
      b = c;
      var x = 5;
   };
   f(a, b, c);//Estos parametros reciben el mismo valor que los pasados a c
   console.log(b);//9
};
c(8, 9, 10);
console.log(b);//10
console.log(x);//1

//Ejercicio 2
console.log(bar);//undefined
console.log(baz);//Error
foo();//'Hola!'
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;

//Ejercicio 3
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);//'Franco'

//Ejercicio 4
var instructor = 'Tony';
console.log(instructor);//'Tony'
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);//'Franco'
   }
})();
console.log(instructor)//'Tony'

//Ejercicio 5
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';//Esta reasignando valor a var instructor
   let pm = 'Reverse Flash';//Let tiene scope de bloque, aqui pm es diferente a la pm de arriba
   console.log(instructor);//'The Flash'
   console.log(pm);//'Reverse Flash'
}
console.log(instructor);//'The Flash'
console.log(pm);//'Franco'

//Coerción de Datos
console.log(6 / "3")//2
console.log("2" * "3")//6
console.log(4 + 5 + "px")//9px
console.log("$" + 4 + 5)//$45
console.log("4" - 2)//2
console.log("4px" - 2)//NaN
console.log(7 / 0)//Infinity
console.log({}[0])//undefined
console.log(parseInt("09"))//9
console.log(5 && 2)//2 Con el operador && se toma el del lado derecho cuando ambos son true
console.log(2 && 5)//5
console.log(5 || 0)//5 Con el operador || se toma cualquier valor true (0 es false)
console.log(0 || 5)//5
console.log([3]+[3]-[10])//23 Concatena 3 con 3 y luego convierte a num para restar (33 - 10)
console.log(3>2>1)//false 3>2 --> true>1 --> false porque true es igual a 1, no mayor
console.log([] == ![])//true

//Hoisting
//Ejercicio 1
function test() {
    console.log(a);//undefined
    console.log(foo());//2
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test();

 //Ejercicio 2
 var snack = 'Meow Mix';

 function getFood(food) {
    if (food) {
       var snack = 'Friskies';//Como es false no ingresa al if y por el hoisting no se le asigna un valor aun
       return snack;
    }
    return snack;
 }
 
 console.log(getFood(false));//Undefined

 //This
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());//'Aurelio De Rosa'

var test = obj.prop.getFullname;//Asigna a la variable test una función
//Es como poner var test = function () {return this.fullname}

console.log(test());//'Juan Perez'

//Event loop
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();
//1
//4
//3
//2