

let numeroFizz = parseInt(prompt("Ejercicio 4:\nIngrese un número para FizzBuzz"));

for (let i = 1; i <= numeroFizz; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}




let n = parseInt(prompt("Ejercicio 5:\nIngrese cantidad de números Fibonacci"));

let a = 0;
let b = 1;

console.log("Serie Fibonacci:");

for (let i = 0; i < n; i++) {
    console.log(a);

    let siguiente = a + b;
    a = b;
    b = siguiente;
}


function esPrimo(numero) {

    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i < numero; i++) {

        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

let numeroPrimo = parseInt(prompt("Ejercicio 6:\nIngrese un número"));

if (esPrimo(numeroPrimo)) {
    console.log(numeroPrimo + " es primo");
}
else {
    console.log(numeroPrimo + " no es primo");
}


let numeroTabla = parseInt(prompt("Ejercicio 7:\nIngrese un número"));

console.log("Tabla de multiplicar del " + numeroTabla);

for (let i = 1; i <= 10; i++) {

    console.log(numeroTabla + " x " + i + " = " + (numeroTabla * i));
}




function contarVocales(texto) {

    let contador = 0;

    texto = texto.toLowerCase();

    for (let i = 0; i < texto.length; i++) {

        let letra = texto[i];

        if (
            letra === 'a' ||
            letra === 'e' ||
            letra === 'i' ||
            letra === 'o' ||
            letra === 'u'
        ) {
            contador++;
        }
    }

    return contador;
}

let textoUsuario = prompt("Ejercicio 8:\nIngrese un texto");

console.log("Cantidad de vocales: " + contarVocales(textoUsuario));




let numeros = [12, 45, 7, 89, 23, 100, 5];

let mayor = numeros[0];

for (let i = 1; i < numeros.length; i++) {

    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
}

console.log("El número mayor es: " + mayor);



function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

let num1 = parseFloat(prompt("Ejercicio 10:\nIngrese el primer número"));
let num2 = parseFloat(prompt("Ingrese el segundo número"));

let operacion = prompt(
    "Ingrese la operación:\n sumar\n restar\n multiplicar\n dividir"
);

let resultado;

if (operacion === "sumar") {
    resultado = sumar(num1, num2);
}
else if (operacion === "restar") {
    resultado = restar(num1, num2);
}
else if (operacion === "multiplicar") {
    resultado = multiplicar(num1, num2);
}
else if (operacion === "dividir") {
    resultado = dividir(num1, num2);
}
else {
    resultado = "Operación no válida";
}

console.log("Resultado: " + resultado);