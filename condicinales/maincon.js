
//1 realizar un programa que reciba dos numeros y que imprima por consola si el primer numero es mayor que el segundo

//let num1 = 10
//let num2 = 5
//     if (num1 > num2) {
//     console.log("El primer número es mayor que el segundo");
//    } else {
//     console.log("El primer número NO es mayor que el segundo");
//    }

//punto 2 realizar un programa que reciba dos numeros y que imprima por consola si los numero son iguales o sin son diferentes

//let num1 = 15
//let num2 = 20

// if ( num1 === num2){
//  console.log(`Los numeros son iguales`);
// }else {
//  console.log(` Los numeros son diferentes `);
// }

// 3

//  let num1 = 5 ;
//  let num2 = 5 ;

//  if ( num1 > num2){
//    console.log(`El ${num1} es el mas grande `);
//  }else if( num1 < num2){
//    console.log(`El ${num1} es el mas pequeño `);
//  }else{
//    console.log(`Son iguales `);
//  }

//4

//  let num1 = 2;
//  let num2 = 3;
//  let num3 = 1;

//    if (num1 < num2 && num1 < num3) {
//        console.log(`El mas chico es num1`);
//    } else if (num2 < num1 && num2 < num3) {
//      console.log(`El mas chico es num2`);
//    } else {
//      console.log(`El mas chico es num3`);
//    }

// punto 5

// function compararPersonas(persona1, persona2) {
//   if (persona1.altura > persona2.altura) {
//     console.log(persona1.nombre + " es la persona más alta.");
//   } else if (persona1.altura < persona2.altura) {
//     console.log(persona2.nombre + " es la persona más alta.");
//   } else {
//     console.log("Ambas personas tienen la misma altura.");
//   }

//   if (persona1.edad > persona2.edad) {
//     console.log(persona1.nombre + " es la persona de mayor edad.");
//   } else if (persona1.edad < persona2.edad) {
//     console.log(persona2.nombre + " es la persona de mayor edad.");
//   } else {
//     console.log("Ambas personas tienen la misma edad.");
//   }

//   if (persona1.peso > persona2.peso) {
//     console.log(persona1.nombre + " es la persona con mas peso.");
//   }else if (persona1.peso < persona2.peso) {
//     console.log(persona2.nombre + " es la persona con mas peso.");
//   } else {
//     console.log("Ambas personas tienen el mismo peso.");
//   }
// }
// let persona1 = {
//   nombre: "David",
//   apellido: "Rendon",
//   edad: 26,
//   peso: 65,
//   altura: 165,
// }

// let persona2 = {
//   nombre: "erika",
//   apellido: "Sanchez",
//   edad: 23,
//   peso: 47,
//   altura: 155,
// }
// compararPersonas(persona1, persona2);

//punto 6

// let nombre = prompt("Ingrese su nombre:");
// let edad = parseInt(prompt("Ingrese su edad:"));
// let altura = parseInt(prompt("Ingrese su altura en cm:"));
// let vision = parseInt(prompt("Ingrese su vision (de 0 a10)"));

// if (edad >= 18 && altura > 150 && vision >= 8) {
//   console.log(nombre + ", estás capacitado para conducir.");
// } else {
//   console.log(nombre + ", no estás capacitado para conducir.");
// }

//punto 7
// let nombreCliente = prompt("Ingrese su nombre:");
// let tipoPase = prompt("Ingrese el tipo de pase (vip o normal):");
// let tieneEntrada = prompt("¿Posee entrada? (si o no):");

// if (nombreCliente === "tu nombre" || tipoPase === "vip") {
//   console.log("Bienvenido/a, " + nombreCliente + ". Tiene ingreso libre.");
// } else if (tieneEntrada === "si") {
//   let usarEntrada = prompt("¿Desea utilizar la entrada? (si o no):");
//   if (usarEntrada === "si") {
//     console.log("Bienvenido/a, " + nombreCliente + ". Disfrute del evento.");
//   } else {
//     console.log("Adiós, " + nombreCliente + ". Hasta luego.");
//   }
// } else {
//   let comprar = prompt("¿Desea comprar una entrada? (si o no):");
//   if (comprar === "si") {
//     let dineroDisponible = parseInt(prompt("Ingrese la cantidad de dinero disponible:"));
//     if (dineroDisponible >= 1000) {
//       console.log("¡Venta exitosa! Bienvenido/a, " + nombreCliente + ".");
//     } else {
//       console.log("Lo sentimos, " + nombreCliente + ". No tiene suficiente dinero para comprar una entrada.");
//     }
//   } else {
//     console.log("Adiós, " + nombreCliente + ". Hasta luego.");
//   }
// }

// punto 8
// let numeroIngresado;
// let numeroIncognita = 4

// for (let intento = 1; intento <= 3; intento++) {
//   numeroIngresado = parseInt(prompt("Intento #" + intento + ": Ingresa un número del 1 al 10:"));

//   if (numeroIngresado === numeroIncognita) {
//     console.log("¡Ganaste! Has adivinado el número.");
//     break;
//   } else if (numeroIngresado > numeroIncognita) {
//     console.log("El número ingresado es mayor. Vuelve a intentarlo.");
//   } else {
//     console.log("El número ingresado es menor. Vuelve a intentarlo.");
//   }
// }

// if (numeroIngresado !== numeroIncognita) {
//   console.log("¡Agotaste tus intentos! El número correcto era " + numeroIncognita + ".");
// }

// punto 9

// let edad = parseInt(prompt("Ingrese su edad:"));

// if (edad >= 0 && edad <= 12) {
//   console.log("Eres un infante.");
// } else if (edad >= 13 && edad <= 18) {
//   console.log("Eres un adolescente.");
// } else if (edad >= 19 && edad <= 45) {
//   console.log("Eres un mayor joven.");
// } else if (edad > 45 && edad <= 99) {
//   console.log("Eres un anciano.");
// } else if (edad >= 100) {
//   console.log ("¿Estás seguro/a de tener esa edad?:");
// } 

// punto 10

// let respuestaJugador1 = prompt("jugador1: PIEDRA, PAPEL O TIJERA")
// let respuestaJugador2 = prompt("jugador2: PIEDRA, PAPEL O TIJERA")
// if (respuestaJugador1 === "piedra" && respuestaJugador2 === "piedra") {
//     console.log("¡Han empatado!");
// }if (respuestaJugador1 === "piedra" && respuestaJugador2 === "papel") {
//     console.log("Jugador 2 ha ganado");
// }if (respuestaJugador1 === "piedra" && respuestaJugador2 === "tijera") {
//     console.log("jugador 1 ha ganado");
// }if (respuestaJugador1 === "papel" && respuestaJugador2 === "papel") {
//     console.log("han empatado");
// }if (respuestaJugador1 === "papel" && respuestaJugador2 === "piedra") {
//     console.log("jugador 1 ha ganado");
// }if (respuestaJugador1 === "papel" && respuestaJugador2 === "tijera") {
//     console.log("jugador 2 ha ganado");
// }if (respuestaJugador1 === "tijera" && respuestaJugador2 === "piedra") {
//     console.log("jugador 2 ha ganado");
// }if (respuestaJugador1 === "tijera" && respuestaJugador2 === "papel") {
//     console.log("jugador 1 ha ganado");
// }if (respuestaJugador1 === "tijera" && respuestaJugador2 === "tijera") {
//     console.log("han empatado");
// }

// 11

// let color = prompt("Ingrese un color:");

// switch (color.toLowerCase()) {
//   case "blanco":
//   case "negro":
//     console.log("Falta de color.");
//     break;
//   case "verde":
//     console.log("El color de la naturaleza.");
//     break;
//   case "azul":
//     console.log("El color del agua.");
//     break;
//   case "amarillo":
//     console.log("El color del sol.");
//     break;
//   case "rojo":
//     console.log("El color del fuego.");
//     break;
//   case "marrón":
//     console.log("El color de la tierra.");
//     break;
//   default:
//     console.log("Excelente elección, no lo teníamos pensado.");
//     break;
// }

// 12

// function calcularOperacion(valor) {
   
//   let valor1 = parseFloat(prompt("Ingrese el primer valor:"));
//   let valor2 = parseFloat(prompt("Ingrese el segundo valor:"));
//   let operacion = prompt("Ingrese la operación (suma, resta, multiplicación, división):");

//   let resultado;
//   let mensaje;

//   switch (operacion) {
//     case "suma":
//       resultado = valor1 + valor2;
//       mensaje = "El resultado de la suma es: " + resultado;
//       break;
//     case "resta":
//       resultado = valor1 - valor2;
//       mensaje = "El resultado de la resta es: " + resultado;
//       break;
//     case "multiplicación":
//       resultado = valor1 * valor2;
//       mensaje = "El resultado de la multiplicación es: " + resultado;
//       break;
//     case "división":
//       if (valor2 !== 0) {
//         resultado = valor1 / valor2;
//         mensaje = "El resultado de la división es: " + resultado;
//       } else {
//         mensaje = "ERROR: No se puede dividir entre cero (0).";
//       }
//       break;
//     default:
//       mensaje = "Operación no válida.";
//   }

//   alert(mensaje);
// }

// calcularOperacion();

// 13

// function ingresarDatosID() {
//   let numero = prompt("Ingrese el número de ID:");
//   let nombre = prompt("Ingrese su nombre:");
//   let apellido = prompt("Ingrese su apellido:");
//   let fechaNacimiento = prompt("Ingrese su fecha de nacimiento:");

//   console.log("Número de ID: " + numero);
//   console.log("Nombre: " + nombre);
//   console.log("Apellido: " + apellido);
//   console.log("Fecha de nacimiento: " + fechaNacimiento);

//   let confirmacion = prompt("¿Los datos ingresados son correctos?");

//   if (confirmacion) {
//     let id = {
//       numero: numero,
//       nombre: nombre,
//       apellido: apellido,
//       fechaNacimiento: fechaNacimiento
//     }
//     console.log("Registro exitoso. Los datos ingresados son:");
//     console.table(id);
//   } else {
//     console.log("Vuelva a intentarlo en 1 mes.");
//   }
// }

// ingresarDatosID();


