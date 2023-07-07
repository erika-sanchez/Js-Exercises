//1
// const numeros = [ 12,5,1,3,17,4,7,22,33,105 ]

// function mostrarDobles(listaNumeros){
//     const dobles = []
//     for( const numero of listaNumeros ){
//         dobles.push(numero * 2)
//     }
//     console.log( dobles.join(' ') )
// }

// mostrarDobles( numeros ) 

//2

// let  numero= parseFloat(prompt("Ingrese un número (ingrese 0 para finalizar):"));

// let arraydeNumero =[]
// // let ultimoNumero = arraydeNumero.length

// while (numero != 0 ){
//     arraydeNumero.push(numero)
//     numero = parseFloat(prompt("Ingrese un número (igrese 0 para finalizar)"))
//     console.log(arraydeNumero);
// }
// // console.log(arraydeNumero[arraydeNumero.length - 1]);

//3 falta resolver

// let ultimoNumero = arraydeNumero[arraydeNumero.length -1]
// console.log(`El ultimo Numero ingresado fue ${ultimoNumero}`);

// let numeroIngresado = parseFloat(prompt("Ingrese un número"))
// let  contador = 1

// if(numeroIngresado == null || numeroIngresado == " "){
//     alert("no ingresaste un numero")
// }else{
//     while (numeroIngresado != ultimoNumero && numeroIngresado >= 1 && numeroIngresado <= 100) {
//         contador++
//         if (numeroIngresado > ultimoNumero) {
//         alert("El numero es mas grande, ingrese otro numero")
//         }else {
//         alert ( " El numero es mas pequeño, ingrese otro numero")
//     }
//     numeroIngresado = parseFloat(prompt("Ingrese un número"))
//     }
//     alert ( `Felicidades ganaste, lo lograste en ${contador} veces`)

// }

//     console.log(`lo adivinaste en ${contador} intentos`)
    
//4

// let numero = parseInt(prompt("Ingrese un número:"));
// let divisores = [];

// for (let i = 1; i <= numero; i++) {
//   if (numero % i === 0) {
//     divisores.push(i);
//   }
// }

// console.log("Los divisores de " + numero + " son: " + divisores.join(", "));

//punto 5

// let recorrer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let recorrido = 0; recorrido < recorrer.length; recorrido++) {
//   console.log(recorrer[recorrido]);
// }

// 6

//7

//8

//9
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] % 2 !== 0) {
//     console.log(numeros[i]);
//   }
// }

// punto 10

// let sumaPares = 0;
// let sumaImpares = 0;
// let numero;

// do {
//   numero = parseFloat(prompt("Ingrese un número (ingrese 0 para finalizar):"));

//   if (numero !== 0) {
//     if (numero % 2 === 0) {
//       sumaPares += numero;
//     } else {
//       sumaImpares += numero;
//     }
//   }
// } while (numero !== 0);

// console.log("Suma de números pares: " + sumaPares);
// console.log("Suma de números impares: " + sumaImpares);

//11

// let numeros = [10, 5, 8, 3, 2, 7, 6, 9, 4, 1];
// let numeroMasGrande = numeros[0];

// for (let i = 1; i < numeros.length; i++) {
//   if (numeros[i] > numeroMasGrande) {
//     numeroMasGrande = numeros[i];
//   }
// }

// console.log("El número más grande es: " + numeroMasGrande);

