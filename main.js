/* Math.random()


El método Math.random() devuelve un número aleatorio desde 0 (inclusive) hasta 1 (exclusivo), pero sin incluirlo.
Basicamente pone un limite en 0.99 haciendo que el 1 no sea opcion posible para sacar.

*/
let x = Math.random() * 10;  //numero random entre 0 y 10

let y = Math.floor((Math.random() * 100) + 1); //cualquier numero ENTERO entre 1 y 100