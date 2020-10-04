# JavaScript ❤️ - Unidad 2

## Operadores

### Operadores Aritmeticos

* '+' Suma.
* '-' Resta.
* '*' Multiplicacion.
* '/' Division.
* '%' El resto de la division entre 2 numeros.
* '++' Incremento en uno.
* '--' Resta en uno.

### Operadores de Asignacion

* = Asignacion
* += Asignacion con suma
* -= Asignacion con resta
* *= Asignacion con multiplicacion
* /= Asignacion con division
* %= Asignacion con resto

## TypeOf

El tipo de datos determina el tipo de operacion que se realiza, por ejemplo, el '+' puede sumar dos numeros o concatenar 2 caracteres.

Para comprobar el tipo de un dato, se usa `typeof` que devuelve una cadena de texto que nos dice el tipo de dato que se esta manejando

```javascript
var boleano = true

var numerico = 22

var numerico_flotante = 13.56

var texto = "mi texto"

var fecha = new Date()

document.write("<br>El tipo de boleano es: " + typeof boleano)

document.write("<br>El tipo de numerico es: " + typeof numerico)

document.write("<br>El tipo de numerico_flotante es: " + typeof numerico_flotante)

document.write("<br>El tipo de texto es: " + typeof texto)

document.write("<br>El tipo de fecha es: " + typeof fecha)

//Devolverá

El tipo de boleano es: boolean

El tipo de numerico es: number

El tipo de numerico_flotante es: number

El tipo de texto es: string

El tipo de fecha es: object
```




