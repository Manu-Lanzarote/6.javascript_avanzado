//  1.	Crear un array. Asignar 10 valores diferentes dentro del mismo. Mostrar los 10 valores en pantalla.

// const array = [1, 2, 3];
// let aux = "";

// for (let i = 0; i < array.length; i++) {
//   aux += `<p>${array[i]}</p>`;
// }

// document.getElementById("dom").innerHTML = aux;

//
// 2.	Crear un array. Pedir al usuario 3 veces que escriba un string. Guardar cada uno de esos strings en la posición 0 , 1 y 2. Mostrar en pantalla en el orden: primero posición 1, después posición 2 y por último posición 0.

// const array2 = [];
// let aux = "";

// // Pedir al usuario 3 veces que escriba un string. (uso un for)
// for (let i = 0; i < 3; i++) {
//   array2.push(prompt("Escribe algo"));
// }

// // Sumo a la variable aux los tres strings
// aux += `<p>${array2[1]}</p>`;
// aux += `<p>${array2[2]}</p>`;
// aux += `<p>${array2[0]}</p>`;

// // lo saco por pantalla
// document.getElementById(`dom`).innerHTML = aux;

//
// 3.	Crear un array. Usar un for para asignar los valores de 20 a 11 a las 10 primeras posiciones (en orden descendente). Usar un for para mostrar los  valores en pantalla.

// const array3 = [];

// //Asignar valores
// for (let i = 20; i >= 11; i--) {
//   array3.push(i);
// }

// //Mostrar por pantalla
// let aux = "";
// for (let i = 0; i < array3.length; i++) {
//   aux += `<p>${array3[i]}</p>`;
// }

// document.getElementById("dom").innerHTML = aux;

//
// 4.	Crea un array vacío. Despues pidele al usuario que introduzca 10 valores a ese array Usar un for para mostrarlos en pantalla.

// const vacio = [];
// let valor = "";

// for (let i = 0; i < 10; i++) {
//   valor = prompt("Introduce un valor");
//   vacio.push(valor);
// }

// //Muestro por pantalla
// let aux = "";
// for (let i = 0; i < vacio.length; i++) {
//   aux += `<p>${vacio[i]}</p>`;
// }

// document.getElementById("dom").innerHTML = aux;

//
// 5.	Poner los nombres de los meses en un array de 12 posiciones. Cuando el usuario introduce un número del 1 al 12, mostrar el nombre de ese mes en pantalla.
// const meses = [
//   "enero",
//   "febrero",
//   "marzo",
//   "abril",
//   "mayo",
//   "junio",
//   "julio",
//   "agosto",
//   "septiembre",
//   "octubre",
//   "noviembre",
//   "diciembre",
// ];

// let numUser = parseInt(prompt("Introduce el número del mes"));
// let mes = meses[numUser - 1];

// document.getElementById("dom").innerHTML = mes;

//TODO (hacer diferente)
// 6. Crear un array. Usar un for para pedir 3 valores al usuario y guardarlos en el mismo. Comparar los valores del array una vez tenga los 3 valores y mostrar en pantalla el más pequeño.

// // Creo y guardo valores
// const array6 = [];
// let pideValor = "";
// for (let i = 0; i < 3; i++) {
//   pideValor = prompt("Introduce un valor");
//   array6.push(pideValor);
// }

// // Comparo valores
// let aux = 10000000000000000000000;
// let aux2 = 0;
// //Comparar los valores
// for (let i = 0; i < array6.length; i++) {
//   aux2 = parseInt(array6[i]);
//   if (aux2 < aux) {
//     aux = aux2;
//   }
// }

// // Imprimo resultado
// document.getElementById(
//   "dom"
// ).innerHTML = `<p>El valor más pequeño es ${aux}</p> `;

//
// 7.	Haz un programa que realice la media de los valores que contiene un array de 10 números y lo muestre por consola. No es necesario pedir los números al usuario.
// const array7 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 109];
// let aux = 0;

// for (let i = 0; i < array7.length; i++) {
//   aux += array7[i];
// }
// let resultado = aux / array7.length;
// console.log(resultado);

// document.getElementById("dom").innerHTML = resultado;

// TODO Chequear cambios slack con ander

//
// 8.	Crea un programa que a partir de un array que contiene las edades de 20 alumnos (generadas aleatoriamente entre 18 y 35), calcule y nos devuelva la media de edad de dicha clase.

// const edades = [];
// let aux;
// for (let i = 0; i < 20; i++) {
//   aux = Math.floor(Math.random() * 18) + 18;
//   edades.push(aux);
// }
// console.log(edades);

// let aux2 = 0;
// for (let i = 0; i < edades.length; i++) {
//   aux2 = aux2 + edades[i];
// }
// let resultado = Math.floor(aux2 / 20);

// document.getElementById(
//   "dom"
// ).innerHTML = `<p>La media de edad de esta clase es de ${resultado} años</p>`;

//
// 9.	Crear un array de 10 valores. Pon el valor 1 en cada una de la posiciones. Pedir al usuario que introduzca un número entre 0 y 9. Cada vez que introduzca un valor entre 0 y 9, mostrar el valor de esa posición del array, y modificarlo multiplicando por 2.

// let diezValores = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// //Creo una variable booleana que usaré para validar
// let aux = false;

// do {
//   let numero = prompt("Introduce un número entre el 0 y el 9");
//   if (numero >= 0 && numero <= 9) {
//     diezValores[numero] = diezValores[numero] * 2;
//     console.log(diezValores);
//   } else {
//     aux = true;
//   }
// } while (aux === false);

// 10.	Crear un array con 11 ceros. Pedir al usuario que introduzca valores entre 0 y 10. Cada vez que introduzca un dígito, añadir uno al valor en esa posición del array. Si por ejemplo introduce un 3, sumar uno a la posición 3. Mostrar en pantalla los valores. Si introduce un número mayor que 10, decir que ese número es incorrecto. Si introduce un número negativo, mostrar en pantalla el número de cada posición y el valor que contiene. Por ejemplo, si introduce 7, 7, 7, 5, 6, 5, 9, 9, 10, -1 mostrar:
// 0 // 1	0 // 2	0 // 3	0 // 4	0 // 5	2 // 6	1 // 7	3 // 9	2 // 10	1

// //Creo el array e introduzco los 11 ceros con un for
// let array = [];
// for (let i = 0; i <= 10; i++) {
//   array.push(0);
// }
// // //Creo una variable booleana que usaré para validar
// let aux = false;

// do {
//   let numero = prompt("Introduce un número entre el 0 y el 10");
//   if (numero >= 0 && numero <= 10) {
//     array[numero] = array[numero] + 1;
//     console.log(array);
//   } else if (numero > 10) {
//     console.log("El número introducido no es correcto");
//   } else {
//     aux = true;
//   }
// } while (aux === false);
