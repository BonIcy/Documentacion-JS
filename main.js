/* 
METODOS  DE STRINGS:

codePointAt() & charCodeAt()
El método charCodeAt() devuelve el Unicode del carácter en un índice especificado (posición) en una cadena.
El método codePointAt() devuelve el valor Unicode en un índice (posición) en una cadena.
El índice de la primera posición es 0, el segundo es 1, ....
El método charCodeAt() devuelve el Unicode del carácter en un índice especificado (posición) en una cadena.
El índice del primer carácter es 0, el segundo es 1, ....
El índice del último carácter es la longitud de la cadena - 1
(Lo mismo que el charAt() pero al reves jajajajajajaajajjaajaj)
*/
let ejemploo = "Recargame robux";
let posic = ejemploo.charCodeAt(4); //Aca e muestra el caracter que esta en la posicion indicada, en este caso, la "r" del medio de la palabra "Recargame"
let ejemplo2 = "Y el incentivo";
let posic2 = ejemplo2.charCodeAt(-3); ///Aca se muestra la ultima "i" de la palabra "Incentivo"
//Diferencia entre codePointAt & charCodeAt()
charCodeAt() //es UTF-16, codePointAt() es Unicode.
charCodeAt() //devuelve un número entre 0 y 65535.
//Ambos métodos devuelven un número entero que representa el código UTF-16 de un carácter, pero solo codePointAt() puede devolver el valor completo de un valor Unicode mayor que 0xFFFF (65535). 


//Ejemplo de ambas:
let ejemplo = "Yisus"
let code = ejemplo.codePointAt(0); //esto me votaria 89 ya que es el codigo en el utf-8 del caracter que esta en esta posicion, o sea la letra "Y"
let code2= ejemplo.charCodeAt(3); //esto me votaria 117 ya que es el codigo en el utf-8 del caracter que esta en esta posicion, o sea la letra "U" 