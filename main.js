/* 
METODOS  DE STRINGS:
slice () substr() substring() split()
El método slice() extrae una parte de una cadena.
El método slice() devuelve la parte extraída en una nueva cadena.
El método slice() no cambia la cadena original.
Los parámetros de inicio y fin especifican la parte de la cadena que se va a extraer.
La primera posición es 0, la segunda es 1, ...
Un número negativo selecciona desde el final de la cadena.
El método substr() extrae una parte de una cadena.
El método substr() comienza en una posición específica y devuelve un número específico de caracteres.
El método substr() no cambia la cadena original.
Para extraer caracteres del final de la cadena, utilice una posición inicial negativa.
El método substring() extrae caracteres, entre dos índices (posiciones), de una cadena y devuelve la subcadena.
El método substring() extrae caracteres de principio a fin (exclusivo).
El método substring() no cambia la cadena original.
Si el inicio es mayor que el final, los argumentos se intercambian: (4, 1) = (1, 4).
Los valores iniciales o finales inferiores a 0 se tratan como 0.
El método split() divide una cadena en una matriz de subcadenas.
El método split() devuelve la nueva matriz.
El método split() no cambia la cadena original.
Si (" ") se usa como separador, la cadena se divide entre palabras.
*/
let textt = "Hello world!";
let resultt = textt.slice(0, 5); //muestra Hello!
let resulttt = textt.slice(3);  //muestra lo World!

let text = "Hello world!";
let result = text.substr(1, 4); //deberia mostrar ello
let resultw = text.substr(2); //deberia mostrar llo World!

let texta = "Hello world!";
let resulta = texta.substring(1, 4); //mustra ell
let resultaa = texta.substring(2); // muestra llo world!

let texti = "How are you doing today?";
const myArray = texti.split(" "); //divide una cadena en una array de subcadenas y devuelve la array: How,are,you,doing,today?

let texte = "How are you doing today?";
const myArrayy = texte.split(" ");
let word = myArrayy[1]; //la palabra en la posicion 1 es "are", asi que eso muestra

let textu = "How are you";
const myArraye = textu.split(""); // reemplaza espacios  How,are,you
const myArrayee = textu.split(" ", 2); //usa el parametro de limite : How,are 