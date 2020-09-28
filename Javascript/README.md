# Javascript ❤️

## Introduccion ¿Que es?

* Es un lenguaje capaz que aportar soluciones a la mayoria de los ambitos tecnologicos.
* Es el unico lenguaje de programacion que entienden los navegadores.
* Sirve para el desarollo**frontend**, desarollo para varias plataformas gracias a**NodeJS**, desarollo de aplicaciones mobiles nativas e hibridas y desarollo de aplicaciones de escritorio multiplataforma.
* Es un lenguaje**levemente tipado**, su aprendizaje al principio es rapido, pero luego es necesario profundizar.
* Librerias como JQuery y React, o frameworks como Angular, VueJS o Ionic estan basados en Javascript.

## Historia

Javascript fue creado por Netscape, creador de un navegador hoy en dia desaparecido, precursor de Firefox. Su creador, Brendan Eich, creo al lenguaje en una semana.

Al principio se llamaba *Mocha*, y antes de su lanzamiento fue llamado *LiveScript* y finalmente se llamo *Javascript* ya que Netscape y Sun Microsystems hicieron un acuerdo, en donde tambien se agregaria soporte para Java en Netscape. **Javascript no tiene nada que ver con Java**.

En esa epoca, las paginas constaban solo de HTML basico, surgio la necesidad de ejecutar pequeños programas en la pagina web para tener cierta interaccion con las acciones del usuario en la pagina.

Esta idea tuvo exito asi que otros fabricantes empezaron a implementar JS en sus clientes web. Microsoft lo llamo JScript y se presento con IE3, JScript era compatible con JS, y cada navegador hacia una pequeña carrera para desarollar su propio JS.

Con el tiempo, las diferencias entre JS y JScript fueron tantas que se dieron problemas con los desarollos y usuarios, para resolver esto, surgio *ECMAScript* que es un standar del lenguaje JS (No se pudo llamar igual por temas de licencias).

## ECMAScript

Es el estandar creado para hacer que JS sea homogeneo en todos los navegadores. Esta estandarizacion empezo en 1997, y sigue hasta hoy.

La version mas moderna de ECMAScript es la 6, y la 7 ya esta en proceso y funcionando en algunos clientes web.

Esta estandarizacion es hecha por ECMA International bajo el pedido de Netscape.

Hubo una version abandonada de ECMA, la version 4, porque sus propuestas no tuvieron el apoyo suficiente, y la version 5, que vino luego, es la unica que soportan todos los navegadores existentes, incluido IE.

La version 5 incluyo soporte para JSON, getters y setters, strict mode y otros, tambien se definio la implementacion del modelo de objetos en los navegadores (DOM).
La version mas revolucionaria fue la version 6 (ECMAScript 2015). Presento clases y objetos para JS, modulos, operadores nuevos, funciones lambda, iteradores, etc.. A partir de esta version, hubo un compromiso de presentar una version distinta por año, actualmente, existe ECMA9 que salio en 2018.

# JavaScript

## Lado Cliente

JS se ejecuta en el navegador, del lado del cliente (No como PHP que se ejecuta de lado servidor).
Con JS podemos crear efectos visuales, y hacer mas interactivas las paginas web para el usuario. Tambien, gracias a las API de JS en HTML5, podemos acceder a la camara web, almacenamiento, crear graficos vectoriales, mapas de bits, etc..
JS hoy en dia no funciona solo como un lenguaje del lado del cliente, pero se recomienda empezar por ahi.

## Como lenguaje integrador

JS hoy puede servir como lenguaje nativo de programas de consola con NodeJS, tambien sirve para desarollar aplicaciones hibridas para celulares.

## Empezando con JavaScript

Primero se deben conocer bien los lenguajes basicos de la web, como HTML y CSS.

# Consola

Todos los navegadores web incluyen una consola para desarolladores. Esta consola muestra los mensajes de informacion, error o alerta que se reciben de las petciiones al cargar las paginas. Tambien se incluyen debuggers e inspectores. Tambien se pueden ejecutar comandos JS en la misma.

**Firefox** : Se abre con Control - Mayus - J.

**Chrome**: Se abre con Control - Mayus - I

**Edge/IE**: F12

Si quiero mostrar un mensaje en la consola del navegador:

```javascript
<script>
console.log("Hola") 
</script>
```

* Si quiero que el mensaje se muestre en azul, como "informacion" `console.info()`

* Si quiero mostrar un error `console.error()`

* Si quiero mostrar una advertencia `console.warn()`

* Si quiero ver una representación de un objeto en JS  `console.dir(object)`

* Si quiero ver todos los links de la pagina `console.dir(document.links)`

* Si quiero ver los XML de todos los objetos descendientes de un objeto `console.dirxml(object)`

* Si quiero limpiar la ventana de la consola `console.clear()`

* Si quiero un mensaje personalizado `console.log("%cMensaje de color verde y grande", "color: green; font-size: x-large;")`

* Si quiero crear una tabla simple de dos columnas `console.table({Nombre: "Hola", Apellido: "Hola"})`

* Si quiero una tabla de 3 columnas

  ```javascript
  var gente= [["Hola", "Holis"], ["Pepe", "Perez"], ["Juan", "Lopez"]]
  console.table(gente)
  ```

* Tabla con 3 columnas y encabezados

  ```javascript
  function Person(Nombre, Apellido) {
    this.Nombre = Nombre;
    this.Apellido = Apellido;}
  var oficina = {};
  oficina.Jefe = new Person("Norfi", "Carrodeguas");
  oficina.Subdirector = new Person("Pedro", "Perez");
  oficina.Empleado = new Person("Juan", "Lopez");
  console.table(oficina);
  ```

* Tabla con 4 columnas y encabezados

  ```javascript
  let sitiosweb = [
    {Nombre: "NorfiPC",
      Autor: "Norfi Carrodeguas",
      Enlace: "https://norfipc.com"},
    {Nombre: "Otro sitio",
      Autor: "Pedro Perez",
      Enlace: "https://pedroperez.com"},
    {Nombre: "Tercer sitio",
      Autor: "Juan Lopez",
      Enlace: "https://juanlopez.com"}
  ];
  ```

  

# Empezando con el Lenguaje

JS tiene una sintaxis parecida a Java y C.

**Comentarios**

```javascript
<SCRIPT>
//Este es un comentario de una línea

/*Este comentario se puede extender

por varias líneas.

Las que quieras*/
</SCRIPT>
```

**Mayusculas y Minusculas**

Se respetan. No es lo mismo `alert()` que `Alert()`. Lo mismo con las variables. 

**Separacion de instrucciones**

JS separa las instrucciones por ; o por un salto de linea. Los puntos y coma no son necesarios, solo que no podemos poner dos instrucciones en una misma linea. 

# Variables en Javascript

**Qué es una variable?** Es un espacio de memoria donde se almacena un dato. Es una caja que almacena un dato, y esta caja tambien tiene un nombre. 

```javascript
sumando1 = 23
sumando2 = 23
sumatotal = sumando1 + sumando2
```

**¿Cómo debe ser el nombre?** 
`Edad, paisDeNacimiento, _nombre, $elemento y Otr$_Nombres`, no pueden empezar con numeros

**¿Cómo NO debe ser el nombre?**

`12meses, tu nombre, return, for, mas-o-menos o pe%pe`, aca hay nombres que empiezan con numero, o son palabras reservadas.

**Declarar variables **

```javascript
var op1 //Variable global, a menos que la declaremos adentro de una funcion
var op2

var op1 = 22
var op2 = 55

var op1, op2

let var //Esta variable solo esta declarada en su bloque de codigo, es decir, entre dos {}

const var = 1 //Constante
```

## Conversiones Numericas

**parseInt() y parseFloat()** 

Funciones creadas para analizar un string y devolver un numero si es posible, ignorando los espacios. Si el primer caracter encontrado no puede ser convertido a numero, el resultado sera `NaN (Not a number)`

```javascript
parseInt("10"); // 10
parseInt("10.8"); // 10
parseInt("10 22"); // 10
parseInt(" 14 "); // 14
parseInt("20 dias"); // 20
parseInt("Hace 20 dias"); // NaN
parseInt("44aa33bb"); // 44
parseInt("3.14"); // 3
parseInt("314e-2"); // 314
parseInt(""); // NaN -> ¡¡el string vacio se convierte a NaN!!
parseInt(null); // NaN
parseInt("10",10); // 10
parseInt("010"); // 10 ¡¡ * 8 en navegadores antiguos * !!
parseInt("10",8); // 8
parseInt("0x10"); // 16 0x indica que el número es hexadecimal
parseInt("10",16); //16
```

**parseFloat(string)**

Convierte el String a un numero con coma. 

```javascript
parseFloat("3.14"); // 3.14
parseFloat("314e-2"); // 3.14
parseFloat("0.0314E+2"); // 3.14
parseFloat("3.14dieciseis"); // 3.14
parseFloat("A3.14"); // NaN
parseFloat("tres"); // NaN
parseFloat("e-2"); // NaN
parseFloat("0x10"); // 0 -> No admite el prefijo 0x para indicar 'hexadecimal'
parseFloat(""); // NaN -> ¡¡el string vacio se convierte a NaN!!
parseFloat(null); // NaN
```

**Number()**

Es especificamente para la conversion de tipos. Es un constructor para crear objetos del tipo number. 

```javascript
var myNumber = new Number(14); //Constructor
var myNumber = Number("14"); //Metodo

//Sin el new
Number("12"); // 12
Number("3.14"); // 3.14
Number("314e-2"); // 3.14
Number("0.0314E+2"); // 3.14
Number("e-2"); // NaN
Number('0x10'); // 16 admite el prefijo 0x para indicar 'hexadecimal'
Number(" 12 "); // 12
Number("20 dias"); // NaN
Number("Hace 20 dias"); // NaN
Number("44aa33bb"); // NaN
Number(""); // 0 -> ¡¡el string vacio se convierte a 0!!
Number(" "); // 0
Number(null); // 0
Number(true); // 1
Number( (1<2) ); // 1
Number( (1===2) ); // 0
Number(false); // 0
```

**Conversion explicita**

Es una forma de conversion rapida a numero. 

```
var myNumberValue = "8" - 0; // number 8
var myNumberValue = "8" * 1; // number 8
var myNumberValue = "8" / 1; // number 8
var myNumberValue = +"8"; // number 8
+"12"; // 12
+"3.14"; // 3.14
+"314e-2"; // 3.14
+"0.0314E+2"; // 3.14
+"e-2"; // NaN
+"0x10"; // 16 admite el prefijo 0x para indicar 'hexadecimal'
+" 12 "; // 12
+"20 dias"; // NaN
+"Hace 20 dias"; // NaN
+"44aa33bb"; // NaN
+""; // 0 -> ¡¡el string vacio se convierte a 0!!
+" "; // 0
+null; // 0
//boolean
+true; // 1
+false; // 0
+(1<2); // 1
+(1===2); // 0
```

Resumiendo :

- parseInt() tiene un parámetro extra para indicar la base del número (radix).
- parseFloat() no admite radix. Todos los números se consideran en base decimal.
- parseInt(), Number() y '+' interpretan el prefijo '0x' como número hexadecimal, parseFloat() no.
- parseInt() y parseFloat() pueden extraer un número al principio de un string.
- Si el string contiene caracteres no numéricos, Number() y '+' no lo convierten, devuelven NaN.
- Cuando el argumento es un objeto, parseInt() y parseFloat() llamarán al método .toString() antes de analizar la cadena. Number() y +var llamarán primero a .valueOf() y despues a .toString() si es necesario.
- parseInt() no entiende la notación exponencial, todos los demás si.
- parseInt() y parseFloat() convierten el string vacio en NaN.
- Number() y '+' convierten el string vacio en 0.
- parseInt() y parseFloat() de un boolean es NaN.
- Number() y '+' de un boolean devuelven 0 para false y 1 para true.