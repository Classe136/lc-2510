// console.log("Hello World !"); --- commento su una riga
/*
commento su più righe
let nome = "pippo";
console.log(nome);

*/

// 1. Variabili
// Dichiarazione con let
let firstName;
//console.log(firstName);

//Dichiarazione e inizializzazione
let lastName = "Saraceni"; // 'Saraceni'
console.log(lastName);

// assegnazione
firstName = "Michele";
console.log(firstName);

//riassegnazione di let
firstName = "Daniel";
console.log(firstName);

//Dichiarazione costante deve essere subito inizializzata
const piGreco = 3.14159;
console.log(piGreco);
//stampo a schermo il tipo della variabile
console.log(typeof piGreco);

// ERRORE ! piGreco = 5;

//prove sui tipi
let prova = "stringa";

console.log("qui è una stringa", prova);
prova = 70;
console.log("qui è un numero", prova);
prova = true;
console.log("qui è un booleano " + prova);

//Concatenamento stringhe
const fullName = firstName + " " + lastName;
console.log(fullName);
// con backtick
const saluto = `
    Ciao ${firstName} ${lastName}
    come stai ?
`;
console.log(saluto);

//const meteo = 'Oggi piove ! Prendi "l\'ombrello"';

// Numeri

const a = 5;
const b = 8;
const c = "10";

let z = parseInt(c) + a;
// z = z - 3;
console.log(z);

// operazioni + - * /
const calcolo = ((3 + 5) * 7) / 2; //output 28
console.log(calcolo);

//numero convertito in stringa con 2 decimali
let costo = 200.5678;
console.log(costo.toFixed(2));

//Metodi stringhe

let hello = "hello world";

console.log(hello.toLocaleUpperCase());
console.log(hello.length);

let index = hello.indexOf("w");
console.log(index);

let sottoStringa = hello.slice(index);
console.log(sottoStringa);

console.log(hello.replace(sottoStringa, firstName));
