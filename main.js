
/* 
METODOS  DE STRINGS:
charAt()
CONTIENE LA LONGITUD DE UNA CADENA EN UNIDADES UTF
Esta propiedad devuelve el número de unidades de código en la cadena. 
JavaScript utiliza la codificación UTF-16, donde cada carácter Unicode se puede codificar como una o dos unidades de código, por lo que es posible que el valor devuelto por la longitud no coincida con el número real de caracteres Unicode en la cadena. 
Para escrituras comunes como latín, cirílico, caracteres CJK conocidos, etc., esto no debería ser un problema, pero si está trabajando con ciertas escrituras, como emojis, símbolos matemáticos o caracteres chinos oscuros, es posible que deba tener en cuenta el diferencia entre unidades de código y caracteres.
charAt()
Uso Basico:
const x = "Mozilla";
const empty = "";
El método charAt() devuelve el carácter en un índice especificado (posición) en una cadena.
console.log(`${x} is ${x.length} code units long`);
// Mozilla is 7 code units long
El índice del primer carácter es 0, el segundo 1, ...
 
(El que viene por defecto en casi de dejar el charAt() vacio, sera la posicion 0)
Examples (En ingles este jaja):
console.log(`The empty string has a length of ${empty.length}`);
// The empty string has a length of 0
    Get the first character in a string:
    let text = "HELLO WORLD";
    let letter = text.charAt(0);
    Get the second character in a string:
    let text = "HELLO WORLD";
    let letter = text.charAt(1);
*/
// Get the last character in a string:
let text = "HELLO WORLD";
let letter = text.charAt(text.length-1);

let ejemploo = "nuecesita";
console.log(ejemploo); //nuecesita
console.log(nuecesita.length); //9

//Asignarme valor a la longitud no hara cambios en una string primitiva, ejemplo:

let primi = "holaa"
primi.length = 4;

console.log(primi); //holaa
console.log(primi.length);//5
const ejemplo = "Jesus es el mas lindo"; //(Constante porque asi es y será siempre)
let caracter = ejemplo.charAt(6); //se muestra la "e" de la palabra "es" que le sigue a "Jesus"
let caracter2 = ejemplo.charAt(-2); //se muestra la "d" de la palabra "lindo" ya que en negativo empieza desde la ultima de derecha a izquierda