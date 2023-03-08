/* 
METODOS  DE STRINGS:
fromCharCode()
El método String.fromCharCode() convierte valores Unicode en caracteres.
concat()
String.fromCharCode() es un método estático del objeto String.
El método concat() une dos o más cadenas.
La sintaxis siempre es String.fromCharCode().
El método concat() no cambia las cadenas existentes.
No se puede usar myString.fromCharCode().
El método concat() devuelve una nueva cadena.

*/let hola = String.fromCharCode(72, 69, 76, 76, 79); //esto va a mostrar el mensaje "HELLO", siendo el 72 la "H", el 69 la "E", el 76 la "L" y el 79 la "O"
let texto1 = "Hola";
let texto2 = "Mundo";
let frase = texto1.concat(" ", texto2); 