/* 
formData()
FormData

Este capítulo trata sobre el envío de formularios HTML: con o sin archivos, con campos adicionales y cosas similares.

Los objetos FormData pueden ser de ayuda en esta tarea. Tal como habrás supuesto, éste es el objeto encargado de representar los datos de los formularios HTML.

El constructor es:*/

let formData = new FormData([form]);

/*Si se le brinda un elemento HTML form, el objeto automáticamente capturará sus campos.
formData ejemplo "simple"
<form id="formElem">
  <input type="text" name="name" value="John">
  <input type="text" name="surname" value="Smith">
  <input type="submit">
</form>

<script>
  formElem.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('/article/formdata/post/user', {
      method: 'POST',
      body: new FormData(formElem)
    });

    let result = await response.json();

    alert(result.message);
  };
</script>
En este ejemplo, el código del servidor no es representado ya que está fuera de nuestro alcance. El servidor acepta la solicitud POST y responde “Usuario registrado”.


También es posible iterar por los campos del objeto formData utilizando un bucle for..of:*/

let formData = new FormData();
formData.append('key1', 'value1');
formData.append('key2', 'value2');

// Se listan los pares clave/valor
for(let [name, value] of formData) {
  alert(`${name} = ${value}`); // key1 = value1, luego key2 = value2
}

/*Métodos de FormData

Contamos con métodos para poder modificar los campos del FormData:

    formData.append(name, value) – agrega un campo al formulario con el nombre name y el valor value,
    formData.append(name, blob, fileName) – agrega un campo tal como si se tratara de un <input type="file">, el tercer argumento fileName establece el nombre del archivo (no el nombre del campo), tal como si se tratara del nombre del archivo en el sistema de archivos del usuario,
    formData.delete(name) – elimina el campo de nombre name,
    formData.get(name) – obtiene el valor del campo con el nombre name,
    formData.has(name) – en caso de que exista el campo con el nombre name, devuelve true, de lo contrario false

Un formulario técnicamente tiene permitido contar con muchos campos con el mismo atributo name, por lo que múltiples llamadas a append agregarán más campos con el mismo nombre.*/

//Supongamos que tiene un formulario de suscripción con dos campos nombre y correo electrónico.
<form id="subscription">
    <h1>Subscribe</h1>
    <div id="message"></div>
    <div class="field">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your fullname" required />
        <small></small>
    </div>
    <div class="field">
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" placeholder="Enter your email address" required />
        <small></small>
    </div>
    <div class="field">
        <button type="submit" class="full" id="submit">Subscribe</button>
    </div>
</form>
//Cuando hace clic en el botón Enviar, el navegador web envía los valores de los campos de nombre y correo electrónico en el formulario al servidor.

//De manera similar, la interfaz FormData le permite construir un conjunto de pares clave/valor que representan campos de formulario y sus valores en JavaScript.

//Una vez que tenga un objeto FormData, puede publicarlo en el servidor utilizando la API de obtención. Si desea enviar el formulario como si fuera una solicitud GET, puede pasar el objeto FormData al constructor URLSearchParams.

//Crear un objeto FormData
const formData = new FormData(form);
//los valores de formData serian:
const btn = document.querySelector('#submit');
const form = document.querySelector('#subscription');

btn.addEventListener('click', (e) => {
    //evita que el formulario se envíe
    e.preventDefault();

    // muestra los form values
    const formData = new FormData(form);
    const values = [...formData.entries()];
    console.log(values);
});
/* Cómo funciona.
    Primero, seleccione el botón Enviar usando el método querySelector() del objeto del documento.
    A continuación, agregue un controlador de eventos para manejar el evento de clic del botón Enviar.
    Luego, llame al método preventDefault() del objeto de evento para evitar el envío de formularios.
    Después de eso, cree un nuevo objeto FormData a partir del elemento de formulario.
    Finalmente, llame al método de entradas () del objeto FormData. Dado que el métodoentries() devuelve un iterador, debe utilizar el operador de propagación (...).

 */