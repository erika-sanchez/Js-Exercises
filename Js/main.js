
//ejercicios-intro-Js

//1

let miNombre = "Erika";

console.log(miNombre);

//2

let miApellido = "Sanchez";

console.log(miApellido);

//3

let miEdad = 23 ;
console.log(miEdad);

//4

let miMascota = "agata "
console.log(miMascota);

//5
let edadMascota = 2;
console.log(edadMascota);

//7
let nombreCompleto = miNombre + " " + miApellido
console.log(nombreCompleto);

//8
let textoPresentacion = `mi nombre completo  es ${miNombre} ${miApellido} tengo ${miEdad} años, mi mascotas se llama ${miMascota} y tiene ${edadMascota}  años de edad`
console.log(textoPresentacion);

//9
let sumaEdades= miEdad + edadMascota
let restaEdades= miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota

console.log(sumaEdades);
console.log(restaEdades);
console.log(productoEdades);
console.log(divisionEdades);

//10
let alumno = {
    nombre: "Erika",
    apellido: "sanchez",
    edad: 23,
    cargo: "estudiante",
    mascota: true,
}

//11
let mascota = {
    nombre: "agata",
    edad: 2,
    raza: "bulldog frances",
    esclavo: true,
    color: "negro betaiado con blanco",
}
console.table(alumno);
console.table(alumno ["nombre"])
console.table(mascota);
console.table(mascota["nombre"])

console.log(alumno);
console.log(mascota);

//12
let frutas =["manzana", "pera", "banano", "sandia", "naranja"]
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);

//14
let numeros= [1, 2, 3, 4, 5]
console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

//15
let familia= ["mamá", "papá", "hermano", "hermana", "sobrino"]

console.log(familia);
console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);

//13
let textoAleatorio = `Mi ${(familia[4])} se comio ${(numeros[3])} ${(frutas[1])}s`

console.log(textoAleatorio);

//16
let soymayordeedad = prompt("Soy mayor de edad")
console.log(soymayordeedad);

let numero= 18

console.log(numero === soymayordeedad );

//17


