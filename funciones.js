// 1.	Escribe una función que escriba “Hola” 3 veces.
// function saluda() {
//   for (let i = 0; i < 3; i++) {
//     console.log("hola");
//   }
// }
// saluda();

//
// 2.	Escribe una función que escriba “Hola” tantas veces como el número que le pasamos de parámetro. Llámala dos veces, primero con 5 y después con 3.
// function saluda(dato) {
//   for (let i = 0; i < dato; i++) {
//     console.log("hola");
//   }
// }
// saluda(5);
// saluda(3);

//
// 3.	Escribe una función que devuelva el resultado de sumar los dos parámetros que le pasamos. Muestra el resultado en la consola.
// function sumar(num1, num2) {
//   let suma = num1 + num2;
//   return suma;
// }

// let resultadoSuma = sumar(14, 10);
// console.log(resultadoSuma);

//
// 4.	Escribe una función que devuelva el resultado de sumar los dos parámetros que le pasamos. Pide al usuario 2 números. Usa esos 2 números como parámetros de la función y después asigna el valor que devuelve la función a una tercera variable. Finalmente, muestra el valor de la variable en la consola.
// let numero1 = parseInt(prompt("Dime un número"));
// let numero2 = parseInt(prompt("Dime otro número"));

// function sumarNumeros(num1, num2) {
//   let suma = num1 + num2;
//   return suma;
// }

// let resultadoSuma = sumarNumeros(numero1, numero2);
// console.log(resultadoSuma);

//
// 5.	Escribe una función a la que le damos dos números y que devuelva true si el primer número es más grande que el segundo número y false en el caso contrario. Pide dos números al usuario, y pasalos a la función. Muestra en consola “El primer número es más grande” o “El primer número no es más grande”.
// let num1 = parseInt(prompt("Introduce un número"));
// let num2 = parseInt(prompt("Introduce otro número"));

// function mayorMenor(dato1, dato2) {
//   if (dato1 > dato2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let resultado = mayorMenor(num1, num2);

// if (resultado) {
//   console.log("El primer número es más grande");
// } else {
//   console.log("El segundo número es más grande");
// }

//
// 6.	Escribe un programa que pida al usuario dos números. Usa esos 2 números en una función que divide el primero por el segundo y devuelve el resultado. Muestra el resultado que devuelve la función en un alert. Después vuelve a pedir los números y hacer todo otra vez hasta que el usuario introduzca un 0 como segundo número.
// let numUser1;
// let numUser2;
// let resulDividir;

// do {
//   numUser1 = parseInt(prompt("Introduce un número"));
//   numUser2 = parseInt(prompt("Introduce otro número"));
//   resulDividir = dividir(numUser1, numUser2);
//   if (numUser2 !== 0) {
//     alert(
//       `El resultado de dividir ${numUser1} entre ${numUser2} es ${resulDividir}`
//     );
//   }
// } while (numUser2 !== 0);

// function dividir(dato1, dato2) {
//   let divide = dato1 / dato2;
//   return divide;
// }

//
// 7.	Diseña una función esPar() que reciba como parámetro un número y devuelva si ese número es par o no. Utilízalo en un programa que lea un número por prompt y determine si es par o no y muestre un mensaje al respecto en un alert.

// let numero = parseInt(prompt("Introduce un número"));

// function esPar(dato) {
//   if (dato % 2 === 0) {
//     alert(`El número ${numero} es par`);
//   } else {
//     alert(`El número ${numero} es impar`);
//   }
// }
// esPar(numero);

//
// 8.	Crea una aplicación que nos calcule el factorial de un número pedido por teclado, lo realizará mediante una función al que le pasamos el número como parámetro. Para calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por ejemplo, si introducimos un 5, realizará esta operación 5*4*3*2*1=120. Mostrar el resultado en un alert.

// let numero = 10;

// function factorial(dato) {
//   let aux = 1;
//   for (let i = dato; i > 0; i--) {
//     aux = aux * i;
//   }
//   return aux;
// }
// let resultado = factorial(numero);
// console.log(resultado);

//
// 9.	Crea una aplicación que nos cuente el número de cifras de un número entero positivo (hay que confirmar que no haya introducido un número negativo y deberemos quitar los decimales) pedido por teclado. Crea un método que realice esta acción: pasando el número por parámetro, devolverá el número de cifras. Después mostrar ese número en un alert.

// let numero = -8950.9988;

// function contarCifras(dato) {
//   //compruebo positivo
//   if (dato < 0) {
//     return `El número introducido es negativo`;
//   } else {
//     //quito decimales
//     let numEntero = Math.floor(dato);
//     //devuelvo numero de cifras
//     return numEntero.toString().length;
//   }
// }
// let resulContarCifras = contarCifras(numero);
// alert(resulContarCifras);

//
// 10.	Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo. Pediremos de qué figura queremos calcular su área y según lo introducido pedirá los valores necesarios para calcular el área. Crea un método por cada figura para calcular cada área, este devolverá un número entero(sin decimales). Muestra el resultado por pantalla
// a.	Circulo: (radio^2)*PI - Radio al cuadrado*PI
// b.	Triángulo: (base * altura) / 2
// c.	Cuadrado: lado * lado

let figura = prompt(
  `¿De qué figura quieres calcular el área?
  1 - Círculo
  2 - Cuadrado
  3 - Triángulo`
);

//Pido los valores del círculo
let radio = parseInt(prompt("¿Cuánto mide el radio del círculo?"));

function circulo(dato) {
  let area = dato * dato * Math.PI;
  return area;
}
let resulCirculo = circulo(radio);

if (figura === "1") {
  console.log(resulCirculo);
}

// Pido los valores del cuadrado
let lado = parseInt(prompt("¿Cuánto mide el lado del cuadrado?"));

//Pido los valores del triángulo
let base = parseInt(prompt("¿Cuánto mide la base del triángulo?"));
let altura = parseInt(prompt("¿Cuánto mide la altura del triángulo?"));

function cuadrado(dato) {}
function triangulo(dato1, dato2) {}
