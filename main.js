/* 
METODOS  DE STRINGS:
length
CONTIENE LA LONGITUD DE UNA CADENA EN UNIDADES UTF
Esta propiedad devuelve el número de unidades de código en la cadena. 
JavaScript utiliza la codificación UTF-16, donde cada carácter Unicode se puede codificar como una o dos unidades de código, por lo que es posible que el valor devuelto por la longitud no coincida con el número real de caracteres Unicode en la cadena. 
Para escrituras comunes como latín, cirílico, caracteres CJK conocidos, etc., esto no debería ser un problema, pero si está trabajando con ciertas escrituras, como emojis, símbolos matemáticos o caracteres chinos oscuros, es posible que deba tener en cuenta el diferencia entre unidades de código y caracteres.
Uso Basico:
const x = "Mozilla";
const empty = "";
console.log(`${x} is ${x.length} code units long`);
// Mozilla is 7 code units long
console.log(`The empty string has a length of ${empty.length}`);
// The empty string has a length of 0
*/

let ejemplo = "nuecesita";
console.log(ejemplo); //nuecesita
console.log(nuecesita.length); //9

//Asignarme valor a la longitud no hara cambios en una string primitiva, ejemplo:

let primi = "holaa"
primi.length = 4;

console.log(primi); //holaa
console.log(primi.length);//5