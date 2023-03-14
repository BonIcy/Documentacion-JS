/* 
FUNCIONES:

Ahora que conocemos las funciones anónimas, podremos comprender más fácilmente como utilizar callbacks (también llamadas funciones callback o retrollamadas). A grandes rasgos, un callback (llamada hacia atrás) es pasar una función B por parámetro a una función A, de modo que la función A puede ejecutar esa función B de forma genérica desde su código, y nosotros podemos definirlas desde fuera de dicha función:*/
// fB = Función B
const fBb = function () {
    console.log("Función B ejecutada.");
  };
  
  // fA = Función A
  const fAa = function (callback) {
    callback();
  };

  fAa(fBb);
  /* Esto nos podría permitir crear varias funciones para utilizar a modo de callback y reutilizarlas posteriormente con diferentes propósitos. De hecho, los callbacks muchas veces son la primera estrategia que se suele utilizar en Javascript para trabajar la asincronía.
 */
// fB = Función B (callback)
const fB = function () {
    console.log("Función B ejecutada.");
  };
  
  // fError = Función Error (callback)
  const fError = function () {
    console.error("Error");
  };
  
  // fA = Función A
  const fA = function (callback, callbackError) {
    const n = ~~(Math.random() * 5);
    if (n > 2) callback();
    else callbackError();
  };
  
  fA(fB, fError); // Si ejecutamos varias veces, algunas darán error y otras no
/*   Viendo este ejemplo, podemos planear ejecutar la función fA() cambiando los callbacks según nos interese, sin necesidad de crear funciones con el mismo código repetido una y otra vez. Además, en el caso de que las funciones callbacks sean muy cortas, muchas veces utilizamos directamente la función anónima, sin necesidad de guardarla en una variable previamente: */
// fA = Función A
const fAaa = function (callback, callbackError) {
    const n = ~~(Math.random() * 5);
    if (n > 2) callback();
    else callbackError();
  };
  
  fAaa(
    function () {
      console.log("Función B ejecutada.");
    },
    function () {
      console.error("Error");
    }
  );
  //usar cuando se este seguro de que el callback no se va a reutilizar o no te interesa guardarla en una variable