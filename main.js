/* 
METODOS  DE STRINGS:
indexOf() lastIndexOf() search() localeCompare()
El método indexOf() devuelve la posición de la primera aparición de un valor en una cadena.
El método indexOf() devuelve -1 si no se encuentra el valor.
El método indexOf() distingue entre mayúsculas y minúsculas.
El método lastIndexOf() devuelve el índice (posición) de la última aparición de un valor especificado en una cadena.
El método lastIndexOf() busca la cadena desde el final hasta el principio.
El método lastIndexOf() devuelve el índice desde el principio (posición 0).
El método lastIndexOf() devuelve -1 si no se encuentra el valor.
El método lastIndexOf() distingue entre mayúsculas y minúsculas.
El método search() compara una cadena con una expresión regular **
El método search() devuelve el índice (posición) de la primera coincidencia.
El método search() devuelve -1 si no se encuentra ninguna coincidencia.
El método search() distingue entre mayúsculas y minúsculas.
El método localeCompare() compara dos cadenas en la configuración regional actual.
El método localeCompare() devuelve el orden de clasificación -1, 1 o 0 (para antes, después o igual).
-1 si se ordena antes
0 si se ordenan igual
1 si se ordena despues
La configuración regional actual se basa en la configuración de idioma del navegador.
*/
let text = "Hello world, welcome to the universe.";
let result = text.indexOf("welcome"); // se muestra 13, ya que es donde inicia el welcome

let text1 = "Hello world, welcome to the universe.";
text1.indexOf("e"); //muestra 1


let text2 = "Hello planet earth, you are a great planet.";
let result1 = text2.lastIndexOf("planet"); // mustra 36 porque es el ultimo planet en el string


let text3 = "Mr. Blue has a blue house";
let position = text3.search("Blue"); //muestra 4

let text4 = "Mr. Blue has a blue house";
let position2 = text4.search(/blue/); //muestra 15

let text5 = "Mr. Blue has a blue house";
let position3 = text5.search(/blue/i);//muestra 4

let textt1 = "ab";
let textt2 = "cd";
let resultt = textt1.localeCompare(text2); //muestra -1

let texttt1 = "cd";
let texttt2 = "ab";
let resulttt = texttt1.localeCompare(text2); // muestra 1 