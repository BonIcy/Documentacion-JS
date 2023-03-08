/* 
METODOS  DE STRINGS:
repeat() replace() trim()

El método repeat() devuelve una cadena con un número de copias de una cadena.
El método repeat() devuelve una nueva cadena.
El método repeat() no cambia la cadena original.
El método replace() busca en una cadena un valor o una expresión regular.
El método replace() devuelve una nueva cadena con los valores reemplazados.
El método replace() no cambia la cadena original.

El método trim() elimina los espacios en blanco de ambos lados de una cadena.
El método trim() no cambia la cadena original.
*/
let txt = "Hello world!";
let resul = txt.repeat(4); // devuelve Hello world!Hello world!Hello world!Hello world!

let textt = "Visit Microsoft!";
let result = textt.replace("Microsoft", "Campus"); // muestra Visit Campus!

let text = "Mr Blue has a blue house and a blue car";
let resulta = text.replace(/blue/g, "red"); //muestra Mr Blue has a red house and a red car

let texto = "       Hello World!        ";
let results = texto.trim(); // muestra el Hello World! con espacio y luego uno sin expacios
//otra forma de obtener el mismo resultado reemplazando los espacios con comillas vacias:
let texti = "       Hello World!        ";
let resulti = texti.replace(/^\s+|\s+$/gm,''); // muestra el Hello World! con espacio y luego uno sin expacios 