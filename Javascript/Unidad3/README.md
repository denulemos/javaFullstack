# JavaScript ❤️ - Unidad 3



## Funciones

Una función es un subprograma que puede ser llamado por un código externo (o interno si queremos recursion) a la funcion. En Javascript las funciones son objetos de primera clase (son objetos y se pueden manipular y transmitir igual que a cualquier objeto), son `objectos Function`.

Las funciones no son lo mismo que los **procedimientos**, la funcion devuelve un valor, el procedimiento puede o no devolverlo. 

La funcion devuelve un valor especifico mediante el `return`. Los parametros en la llamada de una funcion son los **argumentos de la funcion**.

```
/* Declarando la función 'myFunc' */
 function myFunc(elobjeto)
 {
   elobjeto.marca= "Toyota";
 }
 /*
  * Declarando la variable 'mycar';
  * Se crea e inicializa el nuevo objeto;
  * para hacer referencia a él mediante 'mycar'
  */
 var mycar = {
   marca: "Honda",
   modelo: "Accord",
   año: 1998
 };
 
 /* Mostrando 'Honda' */
 window.alert(mycar.marca);
 
 /* Paso por referencia del objeto 'mycar' a la función 'myFunc'*/
 myFunc(mycar);
 
 /*
  * Muestra 'Toyota' como valor de la propiedad 'marca'
  * del objeto, que ha sido cambiado por la función.
  */
 window.alert(mycar.marca);
```

### Definiendo Funciones

Hay muchas formas de definir funcion.

* Por función (Nombre de la función , parámetros, pueden haber hasta 255 e instrucciones)

  ```
  function nombre([param[,param[, ...param]]]) {
     instrucciones
  }
  ```

* Por arrow. (Param es el nombre del parámetro, si no hay, es un paréntesis vacío)
  `([param] [, param]) => { instrucciones }` 

* Constructor Function, con el new.
  `new Function (arg1, arg2, ... argN, functionBody)`

## Callbacks

Es una funcion que se pasa a otra funcion como argumento, que luego se invoca dentro de la funcion externa para completar una rutina.

```
function saludar(nombre) {// ←-- definición de la función
  alert('Hola ' + nombre);
}
 
function procesarEntradaUsuario(callback) {
  var nombre = prompt('Por favor ingresa tu nombre.');
  callback(nombre);
}
 
procesarEntradaUsuario(saludar);// ←-- función pasada como parámetro
```

El ejemplo anterior es **sincronico**, se ejecuta inmediatamente. Por lo general se usan con funciones **asincronicas**.

## Closures

Es una funcion que permite acceder al ambito de una funcion exterior desde una funcion interior. Se crean cada vez que una funcion es creada.

### Ambito lexico

```
function iniciar() {
  var nombre = "internet";  // La variable nombre es una variable local creada por iniciar.
  function mostrarNombre() {  // La función mostrarNombre es una función interna, una clausura.
    alert(nombre);  // Usa una variable declarada en la función externa.
  }
  mostrarNombre();
}
iniciar();  
```

La funcion `iniciar()` crea una variable local llamada "nombre" y una funcion interna llamada `mostrarNombre(). ` Por ser una funcion interna, esta ultima solo esta disponible dentro de `iniciar()`

```
function creaFunc() {
  var nombre = "internet";
  function muestraNombre() {
    alert(nombre);
  }
  return muestraNombre;
}
 
var miFunc = creaFunc();
miFunc();
 
```

Si se ejecuta esto, se tendra el mismo efecto que el ejemplo anterior, se va a mostrar el texto "internet" en un alert. Lo distinto, es que la funcion externa nos devolvio la funcion interna `muestraNombre()` antes de ejecutarla. Las variables locales dentro de una funcion no pueden ser accedidas luego de que la funcion haya terminado de ejecutarse. La solucion al problema es un **closuse**, es un tipo especial de objeto que combina dos cosas: 

* Una funcion
* El entorno en el que se creo esa funcion (Esta formado por las variables locales que estaban dentro del alcance en el momento en el que se creo que closure)

```
function creaSumador(x) {
  return function(y) {
    return x + y;
  };
}
 
var suma5 = creaSumador(5);
var suma10 = creaSumador(10);
 
console.log(suma5(2));  // muestra 7
console.log(suma10(2)); // muestra 12
```

## Scope

Es el contexto actual de ejecucion, si una variable no esta dentro del Scope, no esta disponible para su uso. Tambien se pueden superponer en una jerarquia, de modo que los Scope secundarios tengan acceso a los ambitos primarios, pero no al reves. 

Lo siguiente no es valido ->

```
function exampleFunction() {
    var x = "declarada dentro de la función"; // x solo se puede utilizar en exampleFunction
    console.log("funcion interna");
    console.log(x);
}
 
console.log(x);  // error
```

En cambio, lo siguiente es valido ya que la variable se declara fuera de la funcion, lo que la hace global ->

```
var x = "función externa declarada";
 
exampleFunction();
 
function exampleFunction() {
    console.log("funcion interna");
    console.log(x);
}
 
console.log("funcion externa");
console.log(x);
```

## Arrow Functions

Es una alternativa compacta a una expresion de funcion tradicional, pero es limitada y no se puede usar siempre.

* No tiene sus propios enlaces a this o super, y no se debe usar como metodo
* No tiene argumentos o palabras clave `new.target`
* No apta para los metodos call, apply y bind, que son para establecer ambito o alcances.
* No se puede usar como constructor
* No se puede usar yield dentro del mismo.

```
// Función tradicional
function (a){
  return a + 100;
}
 
// Desglose de la función flecha
 
// 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
(a) => {
  return a + 100;
}
 
// 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
(a) => a + 100;
 
// 3. Suprime los paréntesis de los argumentos
a => a + 100;
 
```

Los corchetes, parentesis y return son opcionales, pero pueden ser obligatorios. Con varios o ningun argumento, se debe volver a poner el parentesis alrededor de los argumentos:

```
// Función tradicional
function (a, b){
  return a + b + 100;
}
 
// Función flecha
(a, b) => a + b + 100;
 
// Función tradicional (sin argumentos)
let a = 4;
let b = 2;
function (){
  return a + b + 100;
}
 
// Función flecha (sin argumentos)
let a = 4;
let b = 2;
() => a + b + 100;
```

Si el cuerpo requiere lineas de procesamiento de mas, hay que volver a poner los corchetes y el return. 

```
// Función tradicional
function (a, b){
  let edad = 42;
  return a + b + edad;
}
// Función flecha
(a, b) => {
  let edad = 42;
  return a + b + edad;
}
```

## Arrays

* Crear un array 
  `let frutas = ["manzana", "banana"]`

* Ver tamaño 
  `frutas.length`

* Ver el primer elemento
  `let primero = frutas[0]`

* Ver el ultimo elemento
  `let ultimo = frutas[frutas.length - 1]`

* Recorrer un array
  `frutas.forEach(function elemento, indice, array)`{}

* Añadir elemento al final del array

  `frutas.push('Naranjas')`

* Eliminar el ultimo elemento de un array
  `frutas.pop()`

* Añadir elemento al principio del array
  `frutas.unshift('fresa')`

* Eliminar primer elemento del array
  `frutas.shift()`

* Saber el indice de un elemento
  `frutas.indexOf('Banana')`

