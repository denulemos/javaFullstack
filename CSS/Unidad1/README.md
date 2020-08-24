# CSS

### Atributos globales HTML y CSS

Los atributos globales son atributos comunes a todos los elementos HTML y pueden usarse en todos los elementos, aunque pueden no tener efecto en algunos de ellos.

Los atributos globales pueden especificarse en todos los elementos HTML, e incluso en aquellos no especificados en el estándar. Esto significa que cualquier elemento no estándar también debe permitir estos atributos, aún cuando el uso de tales elementos significa que el documento ya no cumple con HTML5.

Los navegadores que cumplen HTML5 esconden contenido que se marque como `<foo hidden>` .. `<foo>` aun cuando `<foo>` no es un elemento HTML valido.

**Descripción**

A continuación, enumeramos atributos que se utilizan en HTML y que reciben o interactúan con CSS para cumplir con la norma de maquetado actual.

* **accesskey**

Proporciona y genera un acceso de teclado para el elemento actual. Este atributo consiste de una lista de caracteres, separadas por espacios. El navegador debe utilizar el primero que exista en la distribución del teclado del ordenador.

El valor del atributo debe constar de un solo carácter imprimible (que incluye caracteres acentuados y otros que pueden ser generados por el teclado).

HTML

`<p> Para probar presiona una <strong><u> X </u> </strong> y estaras dando foco a este boton: </p> <button accesskey="x"`

CSS

`.output{font: 1rem 'Fira Sans0, sans-serif; letter-spacing: 1px;}`

Funciona con Alt+Shift+key seleccionada en navegadores Chrome y Mozilla, puede modificarse en algún navegador su forma de llamada.

* **class**

Es una lista de clases del elemento, separadas por espacios.

Las clases permiten a CSS y JavaScript seleccionar y acceder a elementos específicos a través de selectores de clase o funciones, como el método Document.getElementsByClassName(), que veremos en detalle y usaremos más adelante.

HTML

````
<p>Periodista: Gracias por la entrevista.</p>
<p class="nota editorial">Esta es una nota realizada en 2019.-</p>
 <p>Periodista: Como fueron sus comienzos?.</p>
 <p class="nota">[Podés continuar leyendo esta nota en la pag.20]</p>
 
CSS
.output {
    font: 1rem 'Fira Sans', sans-serif;
}
.nota {
    font-style: italic;
    font-weight: bold;
}
.editorial {
    background: rgb(255, 0, 0, .25);
    padding: 10px;
}
.editorial:before {
    content: 'Editor: ';
}
````
