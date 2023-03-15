/* 
Object.entries() & Object.entries

ES6 presenta el método Object.entries() que le permite transformar un objeto en una matriz:*/
const boxStyle = {
  color: 'red',
  borderWidth: '1px'
};

let arr = Object.entries(boxStyle);
console.log(arr); //se muestra [['color', 'red'],['borderWidth', '1px']]
/*Pero, ¿qué pasaría si quisiera hacer lo contrario y convertir una lista de pares clave-valor en un objeto?

ES2019 introdujo el método Object.fromEntries() que le permite convertir fácilmente una lista de pares clave-valor en un objeto.*/
let arre = [['color', 'red'],['borderWidth', '1px']];
let obj = Object.fromEntries(arre); // muestra {color: "red", borderWidth: "1px"}

/*1) Convertir una array en un objeto*/
const arra = [
  ['firstName', 'John'],
  ['lastName', 'Doe'],
  ['age', 20]
];

const person = Object.fromEntries(arra);
console.log(person); // muestra {firstName: "John", lastName: "Doe", age: 20}

/*2) Convertir un mapa en objeto*/
const config = new Map();

config.set('type', 'database');
config.set('duration', 30);

const cache = Object.fromEntries(config);
console.log(cache); // se muestra {type: "database", duration: 30}

/*3) Convertir una cadena de parámetros de URL en un objeto*/
const params = 'type=listing&page=2&rowCount=10';
const searchParams = new URLSearchParams(params);

console.log(Object.fromEntries(searchParams)); //se muestra {type: "listing", page: "2", rowCount: "10"}