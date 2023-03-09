/* Math.trunc() & toFixed()

El método Math.trunc() devuelve la parte entera de un número.
El método Math.trunc() elimina los decimales (NO redondea el número).

El método toFixed() convierte un número en una cadena.
El método toFixed() redondea la cadena a un número específico de decimales.


*/
let u = Math.trunc(8.76); // devuelve la parte ENTERA del numero, es decir, 8, sin tener en cuenta los decimales

let num = 5.56789;
let n = num.toFixed(); //redondea a 6 ya que si aplica los decimales y el aproximamiento

let nume = 5.56789;
let nn = nume.toFixed(2); // redondea a 5.57 ya que le indicamos que queremos ver 2 decimales
