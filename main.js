/* 
FUNCIONES:
Ámbito léxico de this

Aunque aún no la hemos utilizado, una de las principales diferencias de las funciones flecha respecto a las funciones tradicionales, es el valor de la palabra clave this, que no siempre es la misma.

Por ejemplo, si utilizamos una función de forma global en nuestro programa, no notaremos ninguna diferencia:*/

// Si son funciones globales
const a = function () {
  console.log(this);
};
const b = () => {
  console.log(this);
};

a(); // Window
b(); // Window

/*Sin embargo, si utilizamos una función en el interior de un objeto, como suele ser el caso más habitual, si encontraremos diferencias. Observa que en la primera función, donde se utiliza una función tradicional, el this devuelve el objeto padre de la función.

Por otro lado, en la segunda función, donde se utiliza una función flecha, el this no devuelve el objeto padre de la función, sino que devuelve Window.*/

padre = {
  a: function () {
    console.log(this);
  },
  b: () => {
    console.log(this);
  },
};

padre.a(); // padre
padre.b(); // Window
/*
Esta es una diferencia clave que hay que tener bien en cuenta a la hora de trabajar con las funciones flecha. Una buena práctica es utilizar funciones tradicionales como las funciones de primer nivel y, luego, en su interior o en callbacks, utilizar funciones flecha.*/