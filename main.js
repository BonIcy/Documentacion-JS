/* 
FUNCIONES:
Clausuras

Las clausuras o cierres, es un concepto relacionado con las funciones y los ámbitos que suele costar comprender cuando se empieza en Javascript. Es importante tener las bases de funciones claras hasta este punto, lo que permitirá entender las bases de una clausura.

A grandes rasgos, en Javascript, una clausura o cierre se define como una función que «encierra» variables en su propio ámbito (y que continúan existiendo aún habiendo terminado la función). Por ejemplo, veamos el siguiente ejemplo:*/

// Clausura: Función incr()
const incr = (function () {
  let num = 0;
  return function () {
    num++;
    return num;
  };
})();

typeof incr; // 'function'
incr(); // 1
incr(); // 2
incr(); // 3
/*
Tenemos una función anónima que es también una función autoejecutable. Aunque parece una función por expresión, no lo es, ya que la variable incr está guardando lo que devuelve la función anónima autoejecutable, que a su vez, es otra función diferente.

La «magia» de las clausuras es que en el interior de la función autoejecutable estamos creando una variable num que se guardará en el ámbito de dicha función, por lo tanto existirá con el valor declarado: 0.

Por lo tanto, en la variable incr tenemos una función por expresión que además conoce el valor de una variable num, que sólo existe dentro de incr. Si nos fijamos en la función que devolvemos, lo que hace es incrementar el valor de num y devolverlo. Como la variable incr es una clausura y mantiene la variable en su propio ámbito, veremos que a medida que ejecutamos incr(), los valores de num (que estamos devolviendo) conservan su valor y se van incrementando.*/