### Instalación Bootstrap

**Que es un Framework?**

Un framework de desarrollo es una herramienta de software, que basado en la tecnología de un lenguaje  de programación y que, por lo general, se define como una aplicación o conjunto de módulos, permite el desarrollo ágil de aplicaciones mediante la aportación de librerías y/o funcionalidades ya creadas.

**¿Qué es Boostrap?**

Es un Framework que permite generar en forma más sencilla y con menos código un FrontEnd de una página web en forma responsive y basándose en las cualidades de CSS.

**Utilización**

Comenzaremos por detallar las formas posibles de utilizar Bootstrap.

Los archivos CSS de Bootstrap

Usando el servicio de BootstrapCDN, puedes incluir Bootstrap en tus proyectos añadiendo la siguiente línea en todas tus páginas:

```html
<head>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

</head>
```

La URL concreta y el valor del atributo integrity dependen de cada versión de Bootstrap. Visita el sitio BootstrapCDN:

[https://getbootstrap.com/docs/4.5/getting-started/introduction/](https://getbootstrap.com/docs/4.5/getting-started/introduction/)

para obtener siempre la versión más reciente.

##### **Los archivos JavaScript de Bootstrap**

Muchos de los componentes de Bootstrap requieren JavaScript para funcionar. En concreto, requieren otros Frameworks de JavaScript llamados jQuery, Popper.js y los propios plugins creados por Bootstrap. Para enlazarlos, añade las siguientes líneas justo antes de la etiqueta `</body>` de cierre.

Aunque recomendamos el uso de jQuery's Slim, la versión completa de jQuery también funciona:

```html
<!-- Optional JavaScript -->

<!-- jQuery first, then Popper.js, then Bootstrap JS -->

---

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>

---

<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>

<script

________________________________________________________________________________ src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
```

El orden en el que se enlazan los archivos JavaScript tiene que ser exactamente ese: primero jQuery, luego Popper y luego Bootstrap. Las URLs correctas para cada versión de esas librerías las puedes encontrar visitando cada uno de los sitios que las alojan.

Nota: Si utilizas nuestro archivo bootstrap.bundle.js (o bootstrap.bundle.min.js) la librería Popper ya está incluida, pero jQuery no.

Igualmente, todo lo que tenga que ver con JavaScript lo veremos en la próxima unidad.

##### **La primera plantilla Bootstrap**

Antes de utilizar Bootstrap, asegúrate de que tus páginas están preparadas para los estándares más recientes de HTML. Entre otras cosas, eso significa que deben utilizar el doctype de HTML5 e incluir una etiqueta `<meta>` para definir el viewport.

En resumen, la estructura básica de tus páginas debería ser:

```html
<!doctype html>

<html lang="en">

<head>

<!-- Etiquetas <meta> obligatorias para Bootstrap -->

<meta charset="utf-8">

<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!-- Enlazando el CSS de Bootstrap -->

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

<title>¡Hola Mundo!</title>

</head>

<body>

<h1>¡Hola Mundo!</h1>

<!-- Opcional: enlazando el JavaScript de Bootstrap -->

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>


<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>

<script
src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>

</body>

</html>
```

Antes de comenzar a diseñar el layout o estructura de contenidos de las páginas, es necesario tener en cuenta algunas cosas importantes.

##### **Se requiere el doctype de HTML5**

Bootstrap utiliza algunos elementos HTML y algunas propiedades CSS que requieren el uso del doctype de HTML5. No olvides incluir este doctype en todas tus páginas con el siguiente código:

```
<!doctype html>

<html lang="en">


</html>
```

##### **Diseño "responsive"**

Bootstrap promueve el diseño de tipo "mobile first", en el que primero se diseñan los contenidos para que se vean bien en un móvil y luego se hacen los ajustes necesarios para que se vea bien en dispositivos más grandes como tablets y notebooks y computadoras de escritorio.

Añade la siguiente etiqueta `<meta>` para que los contenidos se vean bien por defecto en los móviles y el zoom funcione como esperan los usuarios:

```
<head>

<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

</head>
```

##### **La propiedad box-sizing**

Para que sea más fácil controlar con CSS la anchura/altura de los elementos, Bootstrap cambia el valor de la propiedad box-sizing para no usar el valor por defecto content-box y en su lugar usar border-box. Este cambio hace que la propiedad padding no afecte al tamaño final de los elementos, pero podría causar algunos pequeños errores con código de terceros como Google Maps o Google Custom Search Engine.

Si alguna vez tienes que cambiar este valor para algún elemento concreto, utiliza lo siguiente:

```
.selector-de-algun-elemento {

box-sizing: content-box;

}
```

##### **Normalización de estilos**

Bootstrap utiliza la hoja de estilos Reboot y así la forma de los diseños se ven en diferentes navegadores y en algunas oportunidades para aplicar un estilo por defecto ligeramente diferente a algunos elementos HTML.

##### **Descargando Bootstrap**

Además de enlazar directamente los archivos CSS y JavaScript ofrecidos por BootstrapCDN (tal y como se explicó anteriormente), existen otras formas de integrar Bootstrap en tus proyectos.

* Descargando los archivos CSS y JavaScript

Visita la página oficial de descargas de Bootstrap para descargar un archivo ZIP comprimido con los archivos CSS y JavaScript listos para usar. Los archivos se entregan compilados y minimizados, pero no incluyen ni documentación, ni el código fuente, ni las dependencias JavaScript como jQuery y Popper.js.

* Descargando el código fuente

Visita la página oficial de descargas de Bootstrap para descubrir la forma en la que puedes descargar el código fuente original de los archivos CSS y JavaScript de Bootstrap.

Para integrar esos archivos en tu aplicación, necesitarás herramientas adicionales como un compilador Sass, la librería Autoprefixer, etc.

* Gestores de paquetes

Otra alternativa para incluir el código fuente de Bootstrap en tus aplicaciones es añadir Bootstrap como dependencia de tu proyecto usando cualquiera de los siguientes gestores de paquetes.

El gestor npm

Permite integrar Bootstrap en tus proyectos Node.js y JavaScript en general mediante npm o yarn:

`$ npm install bootstrap`

aunque esta opción ya queda fuera del alcance de este curso de FrontEnd.

##### **Compatibilidad con los navegadores**

Bootstrap es compatible con las versiones estables más recientes de todos los navegadores y sistemas operativos más populares.

##### **Uso de JavaScript en Bootstrap**

Los plugins de Bootstrap se pueden incluir individualmente (usando los archivos js/dist/*.js de cada uno de ellos) o todos juntos mediante el archivo bootstrap.js o su versión minimizada bootstrap.min.js (incluye solo uno de ellos, no los dos).

##### **Dependencias**

Algunos plugins JavaScript y componentes CSS dependen de otros plugins. Así que si utilizas los plugins individualmente, tienes que comprobar sus dependencias en la documentación y añadirlas a mano.

Al margen de esto, todos los plugins dependen de jQuery, por lo que debes incluir jQuery en la página antes de usar algún plugin. Además, los plugins de dropdowns, popovers y tooltips también dependen de Popper.js.

##### **Accesibilidad**

La accesibilidad de un proyecto diseñado con Bootstrap depende fundamentalmente del código HTML y los estilos/plugins que añadas tu mismo. Aún así, Bootstrap hace todo lo posible para ayudarte a conseguir que tus sitios sean accessibles.

##### **Elementos HTML**

La documentación de Bootstrap siempre muestra en sus ejemplos los elementos y atributos HTML recomendados para hacer tus aplicaciones accesibles.

##### **Componentes interactivos**

Los componentes interactivos, como las ventanas modales y los menús desplegables han sido diseñados para que funcionen con el ratón, el teclado y también las pantallas táctiles de los móviles. Gracias al uso de los atributos WAI-ARIA, estos componentes también son accesibles mediante dispositivos como lectores de pantalla.

##### **Contraste de colores**

Desafortunadamente, la mayoría de colores de las paletas generadas por Bootstrap no tienen un nivel de contraste suficiente según el estándar WCAG 2.0, que requiere un ratio de 4.5:1 cuando se utiliza un color de fondo claro. Así que tendrás que definir tus propios colores si quieres lograr ese objetivo.

##### **Ocultando contenidos**

Los contenidos que no se muestran por pantalla pero que se incluyen para que sean accededidos por dispositivos como los lectores de pantalla, se pueden ocultar aplicando la clase CSS .sr-only (el nombre viene de las siglas en inglés de "screen reader" o lector de pantalla):

```
<p class="text-danger">

<span class="sr-only">Advertencia: </span>

Esta acción es irreversible.

</p>

Para los elementos ocultos de tipo "Ir directamente al contenido", puedes combinar la clase .sr-only con la clase .sr-only-focusable. Esto hace que el contenido sea visible cuando se selecciona (útil para los usuarios que utilizan el teclado):

<a class="sr-only sr-only-focusable" href="#content">Ir al contenido</a>
```

##### **Reduciendo el movimiento**

Bootstrap también soporta el uso de la opción prefers-reduced-motion mediante la cual los navegadores indican que el usuario prefiere reducir el movimiento de los elementos de la página. Si está activada, las ventanas modales por ejemplo no muestran ninguna animación ni al abrirse ni al cerrarse.

### Diseño

### Cuadrícula de Boostrap

La cuadrícula basada en flexbox (una forma de maquetado en CSS) para dispositivos móviles y para crear diseños de todas las formas y tamaños gracias a un sistema de doce columnas, cinco niveles de respuesta predeterminados, con variables Sass y mixins, y docenas de clases predefinidas.

#### **Cómo funciona**

El sistema de cuadrícula de Bootstrap utiliza una serie de contenedores, filas y columnas para diseñar y alinear el contenido.

A continuación se muestra un ejemplo y una mirada en profundidad de cómo se utiliza la cuadrícula.

**El siguiente detalle saldrá del código a continuación:**

| Una de tres columnas | Una de tres columnas | Una de tres columnas |
| - | - | - |

Código

```
<pre><div class="container"><br/><div class="row"><br/><div class="col-sm"><br/>      Una de tres columnas<br/></div><br/><div class="col-sm"><br/>      Una de tres columnas<br/></div><br/><div class="col-sm"><br/>      Una de tres columnas<br/></div><br/></div><br/></div></pre>
```

El ejemplo anterior crea tres columnas de igual ancho en dispositivos pequeños, medianos, grandes y extra grandes utilizando nuestras clases de cuadrícula predefinidas. Esas columnas están centradas en la página con la clase padre .container.

Desglosándolo, así es como funciona:

* Los contenedores proporcionan un medio para centrar y rellenar horizontalmente el contenido de su sitio. Utilizando .container para un ancho de píxel receptivo o .container-fluid para width: 100% en todos los tamaños de vista y dispositivo.
* Las filas col-sm son representativas de columnas. Cada columna tiene una horizontal padding (o margen interno) para controlar el espacio entre ellas. Esto padding luego se contrarresta en las filas con márgenes negativos. De esta manera, todo el contenido de sus columnas se alinea visualmente en el lado izquierdo.
* En un diseño de cuadrícula, el contenido debe colocarse dentro de las columnas y solo las columnas pueden ser hijos inmediatos de las filas.
* Gracias a la tecnología flexbox, las columnas de la cuadrícula sin un especificado width se distribuirán automáticamente como columnas de igual ancho. Por ejemplo, cuatro instancias de .col-sm tendrán automáticamente un 25% de ancho desde el punto de interrupción pequeño y hacia arriba.
* Las clases de columna indican la cantidad de columnas que le gustaría usar de las 12 posibles por fila. Entonces, si deseas tres columnas de igual ancho, podés usar .col-4.
* Las columnas width se establecen en porcentajes, por lo que siempre son fluidas y tienen un tamaño relativo a su elemento principal.
* Las columnas tienen horizontales padding para crear los margenes verticales entre columnas individuales, sin embargo, podés eliminar de las margin filas y padding de las columnas con .no-gutters en .row.
* Para que la cuadrícula responda, hay cinco puntos de interrupción de la cuadrícula, uno para cada punto de interrupción de respuesta : todos los puntos de interrupción (extra pequeños), pequeños, medianos, grandes y extra grandes.
* Los puntos de interrupción de la cuadrícula se basan en consultas de medios de ancho mínimo, lo que significa que se aplican a ese único punto de interrupción y a todos los que están por encima de él (por ejemplo, se .col-sm-4 aplica a dispositivos pequeños, medianos, grandes y extragrandes, pero no al primer xs punto de interrupción).

Podés usar clases de cuadrícula predefinidas (como .col-4) o mixins de Sass para un marcado más semántico.

Hay que tener en cuenta que existen limitaciones y en[ ](https://github.com/philipwalton/flexbugs)flexbox , como la imposibilidad de utilizar algunos elementos HTML como contenedores flexibles .

#### **Opciones de cuadrícula**

Mientras Bootstrap usa em o rem para definir la mayoría de tamaños, px se usan para puntos de interrupción de cuadrícula y anchos de contenedor. Esto se debe a que el ancho de la ventana gráfica está en píxeles y no cambia con el tamaño de fuente .

Vea cómo funcionan los aspectos del sistema de cuadrícula Bootstrap en múltiples dispositivos con una práctica tabla.

|   | Extra pequeño<576px> | **Pequeño 576px** | **Medio 768px** | **Grande 992px** | **Extra grande 1200px** |
| - | - | - | - | - | - |
| **Ancho máximo del contenedor** | Ninguno (automático) | 540 px | 720px | 960 px | 1140 px |
| **Prefijo de clase** | .col-xs | .col-sm- | .col-md- | .col-lg- | .col-xl- |
| **# de columnas** | 12 |   |   |   |   |
| **Ancho de canal (márgenes)** | 30px (15px a cada lado de una columna) |   |   |   |   |
| **Pueden encastrarse columnas** | si |   |   |   |   |
| **Orden de columnas** | si |   |   |   |   |

#### **Columnas de diseño automático**

Utilice clases de columna específicas de puntos de interrupción para facilitar el tamaño de la columna sin una clase numerada explícita como .col-sm-6.

##### **Igual ancho**

Por ejemplo, aquí hay dos diseños de cuadrícula que se aplican a todos los dispositivos y ventanas gráficas, desde xs hasta xl. Agregue cualquier cantidad de clases sin unidades para cada punto de interrupción que necesite y cada columna tendrá el mismo ancho.

| 1 de 2 | 2 de 2 |
| - | - |

| 1 de 3 | 2 de 3 | 3 de 3 |
| - | - | - |

Código:

```
<pre> <div class="container"><br/>  <div class="row"><br/>    <div class="col"><br/>      1 de 2<br/>    </div><br/>    <div class="col"><br/>      2 de 2<br/>    </div><br/>  </div><br/>  <div class="row"><br/>    <div class="col"><br/>      1 de 3<br/>    </div><br/>    <div class="col"><br/>      2 de 3<br/>    </div><br/>    <div class="col"><br/>      3 de 3<br/>    </div><br/>  </div><br/></div></pre>
```

##### **Multilínea de igual ancho**

Cree columnas de igual ancho que abarquen varias líneas insertando un lugar .w-100 donde desee que las columnas se dividan en una nueva línea. Haga que los descansos sean receptivos mezclándolos .w-100 con algunas utilidades de pantalla responsives .

Hubo un error en Safari flexbox que impidió que esto funcionara sin un explícito flex-basiso border. Existen soluciones para las versiones anteriores del navegador, pero no deberían ser necesarias si los navegadores de destino no caen en las versiones con errores.

| col | col |
| - | - |

| espacio |
| - |

| col | col |
| - | - |

Código

```
<pre><div class="container"><br/><div class="row"><br/><div class="col">col</div><br/><div class="col">col</div><br/><div class="w-100">espacio</div><br/><div class="col">col</div><br/><div class="col">col</div><br/></div><br/></div></pre>
```



##### 

##### **Establecer un ancho de columna**

El diseño automático de las columnas de la cuadrícula de flexbox también significa que podés establecer el ancho de una columna y hacer que las columnas hermanas tomen una nueva dimension automáticamente a su alrededor. Podés usar clases de cuadrícula predefinidas (como se muestra a continuación), combinaciones de cuadrículas o anchos en línea. Tenga en cuenta que las otras columnas cambiarán de tamaño sin importar el ancho de la columna central.

| 1 de 3 | 2 de 3 (6 col) | 3 de 3 |
| - | - | - |

| 1 de 3 | 2 de 3 (5 col) | 3 de 3 |
| - | - | - |

Código

```
<pre><div class="container"><br/><div class="row"><br/><div class="col"><br/>1 de 3<br/></div><br/><div class="col-6"><br/>2 de 3 (6 col)<br/></div><br/><div class="col"><br/>3 de 3<br/></div><br/></div><br/><div class="row"><br/><div class="col"><br/>1 de 3<br/></div><br/><div class="col-5"><br/>2 de 3 (5 col)<br/></div><br/><div class="col"><br/>3 de 3<br/></div><br/></div><br/></div></pre>
```



##### **Contenido de ancho variable**

Use col-{breakpoint}-autoclases para dimensionar columnas según el ancho natural de su contenido.

Código

```
<pre><div class="container"><br/><div class="row justify-content-md-center"><br/><div class="col col-lg-2"><br/>1 of 3<br/></div><br/><div class="col-md-auto"><br/>Variable width content<br/></div><br/><div class="col col-lg-2"><br/>3 of 3<br/></div><br/></div><br/><div class="row"><br/><div class="col"><br/>1 of 3<br/></div><br/><div class="col-md-auto"><br/>Variable width content<br/></div><br/><div class="col col-lg-2"><br/>3 of 3<br/></div><br/></div><br/></div></pre>
```



#### 

#### **Clases **responsivas

La cuadrícula de Bootstrap incluye cinco niveles de clases predefinidas para crear diseños complejos de respuesta. Personalice el tamaño de sus columnas en dispositivos extra pequeños, pequeños, medianos, grandes o extra grandes como mejor le parezca.

##### 

##### **Todos los puntos de interrupción**

Para cuadrículas que son iguales desde el dispositivo más pequeño al más grande, use las clases .col y .col-*. Especifique una clase numerada cuando necesite una columna de tamaño especial; de lo contrario, no dude en seguir .col.

Código

```
<pre><div class="container"><br/><div class="row"><br/><div class="col">col</div><br/><div class="col">col</div><br/><div class="col">col</div><br/><div class="col">col</div><br/></div><br/><div class="row"><br/><div class="col-8">col-8</div><br/><div class="col-4">col-4</div><br/></div><br/></div></pre>
```



##### 

##### **Apilado a horizontal**

Con un solo conjunto de .col-sm-*clases, podés crear un sistema de cuadrícula básico que comienza apilado y se vuelve horizontal en el pequeño punto de interrupción ( sm).

Código

```
<pre><div class="container"><br/><div class="row"><br/><div class="col-sm-8">col-sm-8</div><br/><div class="col-sm-4">col-sm-4</div><br/></div><br/><div class="row"><br/><div class="col-sm">col-sm</div><br/><div class="col-sm">col-sm</div><br/><div class="col-sm">col-sm</div><br/></div><br/></div></pre>
```



##### 

##### **Mezclar y combinar**

Para que las columnas simplemente se apilen en algunos niveles de cuadrícula podemos utilizar una combinación de diferentes clases para cada nivel según sea necesario. Vea el ejemplo a continuación para tener una mejor idea de cómo funciona todo.

Código

```
<pre><div class="container"><br/><div class="row"><br/><div class="col">col</div><br/><div class="col">col</div><br/><div class="col">col</div><br/><div class="col">col</div><br/></div><br/><div class="row"><br/><div class="col-8">col-8</div><br/><div class="col-4">col-4</div><br/></div><br/></div></pre>
```



##### Paddings

Los paddings se pueden ajustar de manera responsive mediante el relleno específico del punto de interrupción y las clases de utilidad de margen negativo. Para cambiar los márgenes en una fila determinada y que empareje con un margen negativo en .row y las utilidades de relleno coincidentes en el .col . Es posible que el .container o el .container-fluid padre también deba ajustarse para evitar un desbordamiento no deseado, utilizando nuevamente la utilidad de relleno coincidente.

Aquí hay un ejemplo de cómo personalizar la cuadrícula Bootstrap en el lg punto de interrupción. Hemos aumentado el .col acolchado con .px-lg-5, lo hemos contrarrestado con .mx-lg-n5 en el padre .row y luego hemos ajustado el .container con .px-lg-5.

Código

```
<pre><div class="container px-lg-5"><br/><div class="row mx-lg-n5"><br/><div class="col py-3 px-lg-5 border bg-light">Custom column padding</div><br/><div class="col py-3 px-lg-5 border bg-light">Custom column padding</div><br/></div><br/></div></pre>
```



##### Row-Cols

Utilizar las .row-cols-* clases responsives para establecer rápidamente la cantidad de columnas que mejor representen tu contenido y diseño. Mientras que las .col-* clases normales se aplican a las columnas individuales (p. Ej., .col-md-4), Las clases de columnas de fila se establecen en el padre .row como una forma rápida.

Utilizar estas clases de filas y columnas para crear rápidamente diseños de cuadrícula básicos o para controlar los diseños de tus tarjetas.

```
<pre><div class="container"><br/><div class="row row-cols-2"><br/><div class="col">Column</div><br/><div class="col">Column</div><br/><div class="col">Column</div><br/><div class="col">Column</div><br/></div><br/></div><br/> <div class="container"><br/><div class="row row-cols-3"><br/><div class="col">Column</div><br/><div class="col">Column</div><br/><div class="col">Column</div><br/><div class="col">Column</div><br/></div><br/></div><br/> <div class="container"><br/><div class="row row-cols-4"><br/><div class="col">Column</div><br/><div class="col">Column</div><br/><div class="col">Column</div><br/><div class="col">Column</div><br/></div><br/></div><br/> <div class="container"><br/><div class="row row-cols-4"><br/><div class="col">Column</div><br/><div class="col">Column</div><br/><div class="col-6">Column</div><br/><div class="col">Column</div><br/></div><br/></div><br/> <div class="container"><br/><div class="row row-cols-1 row-cols-sm-2 row-cols-md-4"><br/><div class="col">Column</div><br/><div class="col">Column</div><br/><div class="col">Column</div><br/><div class="col">Column</div><br/></div><br/></div></pre>
```



##### Bordes y Estilos

Los bordes entre columnas en nuestras clases de cuadrícula predefinidas se pueden eliminar con .no-gutters. Esto elimina la negativa margins de .row y la horizontal padding de todas las columnas hijos inmediatos.

Acá está el código fuente para crear estos estilos.Tené en cuenta que las anulaciones de columnas tienen un alcance solo en las primeras columnas secundarias y se orientan a través del selector de atributos . Si bien esto genera un selector más específico, el relleno de columnas aún se puede personalizar aún más con las utilidades de espaciado.

Deja a la clase superior.container o.container-fluid implica la no anulación de los bordes

Tené en cuenta que se puede seguir usando esto con todas las demás clases de cuadrícula predefinidas (incluidos los anchos de columna, los niveles de respuesta, los reordenamientos y más).

```
<pre><div class="row no-gutters"><br/><div class="col-sm-6 col-md-8">.col-sm-6 .col-md-8</div><br/><div class="col-6 col-md-4">.col-6 .col-md-4</div><br/></div></pre>
```



##### 

```
<pre><div class="example-container"><br/><div class="example-row"><br/><div class="example-content-main">Main content</div><br/><div class="example-content-secondary">Secondary content</div><br/></div><br/></div></pre>
```



##### **Envoltura de columna**

Si se colocan más de 12 columnas en una sola fila, cada grupo de columnas adicionales, como una unidad, se ajustará a una nueva línea.

```
<pre><div class="container"><br/><div class="row"><br/><div class="col-9">.col-9</div><br/><div class="col-4">.col-4<br>Since 9 + 4 = 13 > 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div><br/><div class="col-6">.col-6<br>Subsequent columns continue along the new line.</div><br/></div><br/></div></pre>
```



##### 

##### **Saltos de columna**

Romper columnas a una nueva línea en flexbox requiere un pequeño truco: agregá un elemento width: 100% donde quieras que desees ajustar tus columnas a una nueva línea. Normalmente, esto se logra con varios .row , pero no todos los métodos de implementación pueden dar cuenta de esto.

```
<pre> <div class="container"><br/><div class="row"><br/><div class="col-6 col-sm-3">.col-6 .col-sm-3</div><br/><div class="col-6 col-sm-3">.col-6 .col-sm-3</div><br/> <!-- Force next columns to break to new line --><br/><div class="w-100"></div><br/><div class="col-6 col-sm-3">.col-6 .col-sm-3</div><br/><div class="col-6 col-sm-3">.col-6 .col-sm-3</div><br/></div><br/></div></pre>
```



También podés aplicar esta interrupción en puntos de interrupción específicos con nuestras utilidades de pantalla responsive .

```
<pre> <div class="container"><br/><div class="row"><br/><div class="col-6 col-sm-4">.col-6 .col-sm-4</div><br/><div class="col-6 col-sm-4">.col-6 .col-sm-4</div><br/><!-- Force next columns to break to new line at md breakpoint and up --><br/><div class="w-100 d-none d-md-block"></div><br/><div class="col-6 col-sm-4">.col-6 .col-sm-4</div><br/><div class="col-6 col-sm-4">.col-6 .col-sm-4</div><br/></div><br/></div></pre>
```



#### 

#### **Reordenación**

##### 

##### **Clases de pedidos**

Utilice .order-classes para controlar el **orden visual** de su contenido. Estas clases responden, por lo que puede establecer el orderpunto de interrupción (por ejemplo, .order-1.order-md-2). Incluye soporte para 1a través 12a través de todos los cinco niveles de la red.

```
<pre> <div class="container"><br/><div class="row"><br/><div class="col"><br/>First in DOM, no order applied<br/></div><br/><div class="col order-12"><br/>Second in DOM, with a larger order<br/></div><br/><div class="col order-1"><br/>Third in DOM, with an order of 1<br/></div><br/></div><br/></div></pre>
```



También hay clases responsive .order-firsty .order-lastque cambian el valor orderde un elemento aplicando order: -1y order: 13( order: $columns + 1), respectivamente. Estas clases también se pueden mezclar con las .order-*clases numeradas según sea necesario.

```
<pre> <div class="container"><br/><div class="row"><br/><div class="col order-last"><br/>First in DOM, ordered last<br/></div><br/><div class="col"><br/>Second in DOM, unordered<br/></div><br/><div class="col order-first"><br/>Third in DOM, ordered first<br/></div><br/></div><br/></div></pre>
```



##### 

##### **Desplazamiento de columnas**

Podés compensar las columnas de la cuadrícula de dos formas: nuestras .offset-classes de cuadrícula responsives y nuestras utilidades de margen . Las clases de cuadrícula se dimensionan para coincidir con las columnas, mientras que los márgenes son más útiles para diseños rápidos donde el ancho del desplazamiento es variable.

###### **Clases de compensación**

Mover las columnas a la derecha usando .offset-md-* classes. Estas clases aumentan el margen izquierdo de una columna por * columnas. Por ejemplo, se .offset-md-4 mueve .col-md-4 sobre cuatro columnas.

```
<pre><div class="container"><br/><div class="row"><br/><div class="col-md-4">.col-md-4</div><br/><div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div><br/></div><br/><div class="row"><br/><div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div><br/><div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div><br/></div><br/><div class="row"><br/><div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div><br/></div><br/></div></pre>
```



Además de la limpieza de columnas en los puntos de interrupción de respuesta, es posible que deba restablecer las compensaciones. Podés ver esto en el ejemplo siguiente.

 ```
<pre><div class="container"><br/><div class="row"><br/><div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div><br/><div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div><br/></div><br/><div class="row"><br/><div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div><br/><div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div><br/></div><br/></div></pre>
 ```



##### Utilidades de margen

Con el cambio a flexbox en v4, podés usar utilidades de margen, como .mr-auto y forzar a las columnas hermanas a separarse unas de otras.

```
<pre> <div class="container"><br/><div class="row"><br/><div class="col-md-4">.col-md-4</div><br/><div class="col-md-4 ml-auto">.col-md-4 .ml-auto</div><br/></div><br/><div class="row"><br/><div class="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div><br/><div class="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div><br/></div><br/><div class="row"><br/><div class="col-auto mr-auto">.col-auto .mr-auto</div><br/><div class="col-auto">.col-auto</div><br/></div><br/></div></pre>
```



#### 

#### **Anidamiento**

Para anidar su contenido con la cuadrícula predeterminada, agregue un nuevo .row conjunto de .col-sm-* columnas dentro de una .col-sm-* columna existente . Las filas anidadas deben incluir un conjunto de columnas que sumen 12 o menos (no es necesario que utilice las 12 columnas disponibles).

```
<pre><div class="container"><br/><div class="row"><br/><div class="col-sm-9"><br/>Level 1: .col-sm-9<br/><div class="row"><br/><div class="col-8 col-sm-6"><br/>Level 2: .col-8 .col-sm-6<br/></div><br/><div class="col-4 col-sm-6"><br/>Level 2: .col-4 .col-sm-6<br/></div><br/></div><br/></div><br/></div><br/></div></pre>
```





#### **Mixins de Sass**

Al usar los archivos Sass de origen de Bootstrap, tenés la opción de usar variables y mixins de Sass para crear diseños de página personalizados, semánticos y receptivos. Nuestras clases de cuadrícula predefinidas utilizan estas mismas variables y combinaciones para proporcionar un conjunto completo de clases listas para usar para diseños de respuesta rápida.

##### 

##### **Variables**

Las variables y los mapas determinan el número de columnas, el ancho del margen y el punto de consulta de medios en el que comenzar las columnas flotantes. Los usamos para generar las clases de cuadrícula predefinidas documentadas anteriormente, así como para los mixins personalizados que se enumeran a continuación.

<pre>$grid-columns:      12;<br/>$grid-gutter-width: 30px;<br/>$grid-breakpoints: (<br/>// Extra small screen / phone<br/>xs: 0,<br/>// Small screen / phone<br/>sm: 576px,<br/>// Medium screen / tablet<br/>md: 768px,<br/>// Large screen / desktop<br/>lg: 992px,<br/>// Extra large screen / wide desktop<br/>xl: 1200px<br/>);<br/>$container-max-widths: (<br/>sm: 540px,<br/>md: 720px,<br/>lg: 960px,<br/>xl: 1140px<br/>);</pre>

##### 

##### **Mixins**

Los mixins se utilizan junto con las variables de cuadrícula para generar CSS semántico para columnas de cuadrícula individuales.

Código

<pre>// Creates a wrapper for a series of columns<br/>@include make-row();<br/>// Make the element grid-ready (applying everything but the width)<br/>@include make-col-ready();<br/>@include make-col($size, $columns: $grid-columns);<br/>// Get fancy by offsetting, or changing the sort order<br/>@include make-col-offset($size, $columns: $grid-columns);</pre>

##### 

##### **Uso de ejemplo**

Podés modificar las variables a sus propios valores personalizados, o simplemente usar los mixins con sus valores predeterminados. A continuación, se muestra un ejemplo del uso de la configuración predeterminada para crear un diseño de dos columnas con un espacio entre ellas.

<pre> .example-container {<br/>@include make-container();<br/>// Make sure to define this width after the mixin to override<br/>// `width: 100%` generated by `make-container()`<br/>width: 800px;<br/>}<br/>.example-row {<br/>@include make-row();<br/>}<br/>.example-content-main {<br/>@include make-col-ready();<br/>@include media-breakpoint-up(sm) {<br/>@include make-col(6);<br/>}<br/>@include media-breakpoint-up(lg) {<br/>@include make-col(8);<br/>}<br/>}<br/>.example-content-secondary {<br/>@include make-col-ready();<br/>@include media-breakpoint-up(sm) {<br/>@include make-col(6);<br/>}<br/>@include media-breakpoint-up(lg) {<br/>@include make-col(4);<br/>}<br/>}</pre>

Otro ejemplo sería:

```
<pre><div class="example-container"><br/><div class="example-row"><br/><div class="example-content-main">Main content</div><br/><div class="example-content-secondary">Secondary content</div><br/></div><br/></div></pre>
```



#### **Personalizando la cuadrícula**

Utilizando nuestras variables y mapas Sass de cuadrícula incorporados, es posible personalizar completamente las clases de cuadrícula predefinidas. Cambiar el número de niveles, las dimensiones de la consulta de medios y el ancho del contenedor y luego vuelva a compilar.

##### 

##### **Columnas y canalones**

El número de columnas de la cuadrícula se puede modificar mediante variables Sass. $grid-columns se utiliza para generar los anchos (en porcentaje) de cada columna individual mientras $grid-gutter-width establece el ancho de las canaletas de las columnas.

Código

<pre>$grid-columns: 12 !default;<br/>$grid-gutter-width: 30px !default;</pre>

##### 

##### **Niveles de cuadrícula**

Más allá de las propias columnas, también podés personalizar el número de niveles de cuadrícula. Si solo quisiera cuatro niveles de cuadrícula, actualizaría $grid-breakpoints y $container-max-widths a algo como esto:

Código

<pre>$grid-breakpoints: (<br/>xs: 0,<br/>sm: 480px,<br/>md: 768px,<br/>lg: 1024px<br/>);<br/>$container-max-widths: (<br/>sm: 420px,<br/>md: 720px,<br/>lg: 960px<br/>);</pre>

Cuando realices cambios en las variables o mapas de Sass, deberás guardar los cambios y volver a compilarlos. Al hacerlo, se generará un nuevo conjunto de clases de cuadrícula predefinidas para anchos de columna, compensaciones y orden. Las utilidades de visibilidad responsive también se actualizarán para usar los puntos de interrupción personalizados. Asegúrate que los valores de cuadrícula en conjunto px (no rem, em o %).

### Valores globales de página

##### **Reboot**

Reboot, es una colección de cambios CSS específicos de elementos en un solo archivo, kickstart Bootstrap para proporcionar una línea de base elegante, consistente y simple sobre la que construir.

Reboot se basa en Normalize, proporcionando muchos elementos HTML con estilos algo rígidos utilizando solo selectores de elementos. El estilo adicional se realiza solo con clases. Por ejemplo, reiniciamos algunos <table> estilos para una línea de base más simple y más tarde proporcionamos .table, .table-bordered y más.

Aquí están nuestras pautas y razones para elegir qué anular en Reboot:

* Actualice algunos valores predeterminados del navegador para usar rem en lugar de em para el espaciado de componentes escalable.
* Evite margin-top. Los márgenes verticales pueden colapsar y producir resultados inesperados. Sin embargo, lo que es más importante, una sola dirección de margin es un modelo más simple.
* Para facilitar el escalado entre los tamaños de dispositivos, los elementos de bloque deben usar rem para margin.
* Mantenga las declaraciones de fontpropiedades relacionadas al mínimo, utilizando inheritsiempre que sea posible.

#### **Valores predeterminados de página**

Los elementos <html>y <body>se actualizan para proporcionar mejores valores predeterminados en toda la página. Más específicamente:

* box-sizing establece globalmente en todos los elementos, incluidos *::before y *::after, a border-box. Esto asegura que el ancho declarado del elemento nunca se exceda debido al relleno o al borde.
* No font-size se declara ninguna base en el <html>, pero 16px se asume (el navegador predeterminado). font-size: 1rem se aplica en la <body> y escala de tipos de fácil respuesta a través de consultas de medios respetando las preferencias del usuario y asegurando un enfoque más accesible.
* El <body> también establece un font-family, line-height y text-align. Esto se hereda más tarde por algunos elementos de formulario para evitar inconsistencias de fuentes.
* Por motivos de seguridad, el <body> lleva declarado background-color, por defecto #fff.

#### **Pila de fuentes nativas**

Las fuentes web predeterminadas (Helvetica Neue, Helvetica y Arial) se han eliminado en Bootstrap 4 y se han reemplazado con una "pila de fuentes nativas" para una representación de texto óptima en cada dispositivo y sistema operativo.

<pre>$font-family-sans-serif:<br/>// Safari for macOS and iOS (San Francisco)<br/>-apple-system,<br/>// Chrome < 56 for macOS (San Francisco)<br/>BlinkMacSystemFont,<br/>// Windows<br/>"Segoe UI",<br/>// Android<br/>Roboto,<br/>// Basic web fallback<br/>"Helvetica Neue", Arial,<br/>// Linux<br/>"Noto Sans",<br/>// Sans serif fallback<br/>sans-serif,<br/>// Emoji fonts<br/>"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;</pre>

Esto font-family se aplica a <body> y se hereda automáticamente de forma global a través de Bootstrap. Para cambiar el global font-family, actualice $font-family-base y recompile Bootstrap.

#### **Encabezados y párrafos**

Todos los elementos de encabezado, por ejemplo, <h1> y <p> se restablecen para que se margin-top eliminen. Se han margin-bottom: .5rem agregado títulos y párrafos margin-bottom: 1rem para facilitar el espaciado.

| Bóveda | Ejemplo |
| - | - |
|   | **h1. Encabezado de Bootstrap** |
|   | **h2. Encabezado de ****Bootstrap** |
|   | **h3. Encabezado de Bootstrap** |
|   | **h4. Encabezado de Bootstrap** |
|   | **h5. Encabezado de Bootstrap** |
|   | **h6. Encabezado de Bootstrap** |

#### Listas

A todas las listas— <ul>, <ol>y <dl>— se le han eliminados los margin-top y se ha establecido el  margin-bottom: 1rem. Las listas anidadas no tienen margin-bottom.

Para un estilo más simple, una jerarquía clara y un mejor espaciado, las listas de descripción han actualizado margin . <dd> de reposición margin-left a  0 y complemento margin-bottom: .5rem. <dt> si están en negrita .

#### 

#### **Texto preformateado**

El elemento <pre> se reinicia para eliminar su margin-top y usar unidades rem para su margin-bottom.

<pre>.example-element {<br/>margen inferior: 1rem;<br/>}</pre>



#### Tablas

Las tablas se ajustan ligeramente a los estilos <caption>, contraen los bordes y garantizan la coherencia en text-align todas partes. Los cambios adicionales para los bordes, el relleno y más vienen con [la ](https://getbootstrap.com/docs/4.5/content/tables/)[.table](https://getbootstrap.com/docs/4.5/content/tables/)[clase](https://getbootstrap.com/docs/4.5/content/tables/) .

Esta es una tabla de ejemplo, y este es su título para describir el contenido.

| Encabezado de la tabla | Encabezado de la tabla | Encabezado de la tabla | Encabezado de la tabla |
| - | - | - | - |
| Celda de tabla | Celda de tabla | Celda de tabla | Celda de tabla |
| Celda de tabla | Celda de tabla | Celda de tabla | Celda de tabla |
| Celda de tabla | Celda de tabla | Celda de tabla | Celda de tabla |

#### 

#### **Formularios**

Se han reiniciado varios elementos de formulario para estilos base más simples. Estos son algunos de los cambios más notables:

* <fieldset> no tienen bordes, relleno ni margen, por lo que se pueden usar fácilmente como envoltorios para entradas individuales o grupos de entradas.
* <legend>, como los conjuntos de campos, también se han rediseñado para mostrarse como una especie de encabezado.
* <label> están configurados para display: inline-block y permitir margin.
* <input>, <select>, <textarea> y <button> son abordados principalmente por Normalize, pero Reboot elimina sus margin conjuntos line-height: inherit y también.
* <textarea> Los mensajes de correo electrónico se modifican para que solo se puedan cambiar de tamaño verticalmente, ya que el cambio de tamaño horizontal a menudo "rompe" el diseño de página.
* <button> y los <input> elementos button tienen cursor: pointer when :not(:disabled).

##### 

##### **Punteros en botones**

Reboot incluye una mejora para role="button" cambiar el cursor predeterminado a  pointer. Agregue este atributo a los elementos para ayudar a indicar que los elementos son interactivos. Este rol no es necesario para los elementos <button>, que obtienen su propio  cambio decursor.

Botón de elemento sin botón

Copiar

`<pre><span role="button" tabindex="0">Non-button element button</span></pre>`

#### 

#### **Elementos **varios

El elemento <address> se actualiza para restablecer el navegador predeterminado font-style de italic normal. Line-height y ahora también se hereda, por otro lado,  margin-bottom: 1rem se ha agregado. <address> son para presentar la información de contacto del antepasado más cercano (o todo un trabajo). Conserve el formato terminando las líneas con <br>.

*Twitter,**
**Inc.1355 Market St, Suite 900**
**San Francisco, CA 94103**
**P: (123) 456-7890*

*Nombre completo**
*[*first.last@example.com*](mailto:first.last@example.com)

##### 

##### **Blockquote**

El valor predeterminado margin en blockquotes es 1em 40px, por lo que lo restablecemos a 0 0 1rem algo más consistente con otros elementos.

##### **Elementos en línea**

El `<abbr>` elemento recibe un estilo básico para que se destaque entre el texto del párrafo.

### Tipografía

### **Configuración global**

Bootstrap establece estilos básicos de visualización, tipografía y enlaces globales. Cuando se necesite más control, consulte las [clases de utilidad textual](https://getbootstrap.com/docs/4.5/utilities/text/) .

* Utilice una [pila de fuentes nativas](https://getbootstrap.com/docs/4.5/content/reboot/#native-font-stack) que seleccione la mejor font-familypara cada sistema operativo y dispositivo.
* Para una escala de tipos más inclusiva y accesible, asumimos la raíz predeterminada del navegador font-size (generalmente 16px) para que los visitantes puedan personalizar los valores predeterminados de su navegador según sea necesario.
* Establezca el color del enlace global mediante $link-colory aplique subrayados de enlace solo en :hover.

#### 

#### **Encabezados**

Todos los títulos HTML, <h1>hasta <h6>, están disponibles.

Código

```
<pre><h1>h1. Bootstrap heading</h1><br/><h2>h2. Bootstrap heading</h2><br/><h3>h3. Bootstrap heading</h3><br/><h4>h4. Bootstrap heading</h4><br/><h5>h5. Bootstrap heading</h5><br/><h6>h6. Bootstrap heading</h6></pre>
```



.h1 a .h6 y clases intermedias también están disponibles, para cuando desee hacer coincidir el estilo de fuente de un encabezado :

```
<pre><p class="h1">h1. Bootstrap heading</p><br/><p class="h2">h2. Bootstrap heading</p><br/><p class="h3">h3. Bootstrap heading</p><br/><p class="h4">h4. Bootstrap heading</p><br/><p class="h5">h5. Bootstrap heading</p><br/><p class="h6">h6. Bootstrap heading</p></pre>
```



##### **Personalización de títulos**

Utilice las clases de utilidad incluidas para recrear el pequeño texto del encabezado secundario de Bootstrap 3.

##### Encabezado de pantalla elegante con texto secundario difuminado

Copiar

```
<pre><h3><br/>Fancy display heading<br/><small class="text-muted">With faded secondary text</small><br/></h3></pre>
```



#### **Mostrar títulos**

Los elementos de encabezado tradicionales están diseñados para funcionar mejor en la carne del contenido de su página. Cuando necesite que un encabezado se destaque, considere usar un encabezado de visualización , un estilo de encabezado más grande y un poco más obstinado. Tenga en cuenta que estos encabezados no responden de forma predeterminada, pero es posible habilitar [tamaños de fuente receptivos](https://getbootstrap.com/docs/4.5/content/typography/#responsive-font-sizes) .

 ```
<pre> <h1 class="display-1">Display 1</h1><br/><h1 class="display-2">Display 2</h1><br/><h1 class="display-3">Display 3</h1><br/><h1 class="display-4">Display 4</h1></pre>
 ```

#### **Dirigir**

Haga que un párrafo se destaque agregando .lead.

`<pre><p class="lead"><br/>Párrafo destacado.<br/></p></pre>`

##### **Alineación**

Utilice las utilidades de texto según sea necesario para cambiar la alineación de su cita en bloque.

```
<pre><blockquote class="blockquote text-center"><br/><p class="mb-0">Renglón 1</p><br/><footer class="blockquote-footer">Renglón 2 <cite title="Source Title">Título</cite></footer><br/></blockquote></pre>
```

### Tablas

Documentación y ejemplos para el estilo opcional de tablas (dado su uso frecuente en complementos de JavaScript) con Bootstrap.

#### **Ejemplos**

Debido al uso generalizado de tablas en widgets de terceros como calendarios y selectores de fechas, boostrap ha diseñado tablas para que sean **opcionales en su implementación** . Simplemente hay que agregar la clase base .table a cualquier <table>, y luego amplíar con estilos personalizados las diversas clases de modificadores incluidas.

Usando el marcado de tabla más básico, así es como .table se ven las tablas basadas en Bootstrap. **Todos los estilos de tabla se heredan en Bootstrap 4** , lo que significa que cualquier tabla anidada tendrá el mismo estilo que la **tabla** principal.

| # | primero | Último | Encargarse de |
| - | - | - | - |
| 1 | marca | Otón | @mdo |
| 2 | Jacob | Thornton | @grasa |
| 3 | Larry | el pájaro | @gorjeo |

Copiar

```
<pre><table class="table"><br/><thead><br/><tr><br/><th scope="col">#</th><br/><th scope="col">First</th><br/><th scope="col">Last</th><br/><th scope="col">Handle</th><br/></tr><br/></thead><br/><tbody><br/><tr><br/><th scope="row">1</th><br/><td>Mark</td><br/><td>Otto</td><br/><td>@mdo</td><br/></tr><br/><tr><br/><th scope="row">2</th><br/><td>Jacob</td><br/><td>Thornton</td><br/><td>@fat</td><br/></tr><br/><tr><br/><th scope="row">3</th><br/><td>Larry</td><br/><td>the Bird</td><br/><td>@twitter</td><br/></tr><br/></tbody><br/></table></pre>
```



También podés invertir los colores, con texto claro sobre fondos oscuros, con .table-dark.

| # | primero | Último | Encargarse de |
| - | - | - | - |
| 1 | marca | Otón | @mdo |
| 2 | Jacob | Thornton | @grasa |
| 3 | Larry | el pájaro | @gorjeo |

Código

```
<pre><table class="table table-dark"><br/><thead><br/><tr><br/><th scope="col">#</th><br/><th scope="col">First</th><br/><th scope="col">Last</th><br/><th scope="col">Handle</th><br/></tr><br/></thead><br/><tbody><br/><tr><br/><th scope="row">1</th><br/><td>Mark</td><br/><td>Otto</td><br/><td>@mdo</td><br/></tr><br/><tr><br/><th scope="row">2</th><br/><td>Jacob</td><br/><td>Thornton</td><br/><td>@fat</td><br/></tr><br/><tr><br/><th scope="row">3</th><br/><td>Larry</td><br/><td>the Bird</td><br/><td>@twitter</td><br/></tr><br/></tbody><br/></table></pre>
```

#### **Opciones de cabecera de **tabla

Similar a las tablas y tablas oscuras, podés usar las clases modificadoras .thead-light o .thead-dark para hacer que los <thead> aparezcan en gris claro u oscuro.

| # | primero | Último | Encargarse de |
| - | - | - | - |
| 1 | marca | Otón | @mdo |
| 2 | Jacob | Thornton | @grasa |
| 3 | Larry | el pájaro | @gorjeo |

| # | primero | Último | Encargarse de |
| - | - | - | - |
| 1 | marca | Otón | @mdo |
| 2 | Jacob | Thornton | @grasa |
| 3 | Larry | el pájaro | @gorjeo |

Código

```
<pre><table class="table"><br/><thead class="thead-dark"><br/><tr><br/><th scope="col">#</th><br/><th scope="col">First</th><br/><th scope="col">Last</th><br/><th scope="col">Handle</th><br/></tr><br/></thead><br/><tbody><br/><tr><br/><th scope="row">1</th><br/><td>Mark</td><br/><td>Otto</td><br/><td>@mdo</td><br/></tr><br/><tr><br/><th scope="row">2</th><br/><td>Jacob</td><br/><td>Thornton</td><br/><td>@fat</td><br/></tr><br/><tr><br/><th scope="row">3</th><br/><td>Larry</td><br/><td>the Bird</td><br/><td>@twitter</td><br/></tr><br/></tbody><br/></table><br/> <br/><table class="table"><br/><thead class="thead-light"><br/><tr><br/><th scope="col">#</th><br/><th scope="col">First</th><br/><th scope="col">Last</th><br/><th scope="col">Handle</th><br/></tr><br/></thead><br/><tbody><br/><tr><br/><th scope="row">1</th><br/><td>Mark</td><br/><td>Otto</td><br/><td>@mdo</td><br/></tr><br/><tr><br/><th scope="row">2</th><br/><td>Jacob</td><br/><td>Thornton</td><br/><td>@fat</td><br/></tr><br/><tr><br/><th scope="row">3</th><br/><td>Larry</td><br/><td>the Bird</td><br/><td>@twitter</td><br/></tr><br/></tbody><br/></table></pre>
```




#### **Filas **con rayas

Utilizando .table-striped para agregar rayas a cualquier fila de la tabla dentro del <tbody>.

```
<pre><table class="table table-striped"><br/><thead><br/><tr><br/><th scope="col">#</th><br/><th scope="col">First</th><br/><th scope="col">Last</th><br/><th scope="col">Handle</th><br/></tr><br/></thead><br/></table></pre>
```



#### Recursos Varios.

Agregá .table-bordered para bordes en todos los lados de la tabla y las celdas.

Agregá .table-borderless para una tabla sin bordes.

Agregá .table-hoverpara habilitar un estado de desplazamiento en las filas de la tabla dentro de un <tbody>.

Agregá .table-sm para hacer las tablas más compactas cortando el relleno de la celda a la mitad.

Para definir un color de fondo es posible utilizar clases del tipo table en sus diferentes versiones en cada llamada a un <tr>, por ej:

```
<pre><tr class="table-primary">...</tr><br/><tr class="table-secondary">...</tr><br/><tr class="table-success">...</tr><br/><tr class="table-danger">...</tr><br/><tr class="table-warning">...</tr><br/><tr class="table-info">...</tr><br/><tr class="table-light">...</tr><br/><tr class="table-dark">...</tr></pre>
```



En cada punto de interrupción, podés utilizar .table-responsive para tablas de desplazamiento horizontal.

##### **Punto de interrupción específico**

Usá.`table-responsive{-sm|-md|-lg|-xl}` según sea necesario para crear tablas receptivas hasta un punto de interrupción en particular. Desde ese punto de interrupción en adelante, la tabla se comportará normalmente y no se desplazará horizontalmente.

`<pre><div class="table-responsive-sm"><br/><table class="table"><br/>...<br/></table><br/></div></pre>` 

### Imágenes

#### **Imágenes **responsives

Las imágenes en Bootstrap responden con .img-fluid. Max-width: 100%; y  height: auto; se aplican a la imagen para que se adapte al elemento principal.

Responsive image

Ejemplo:

<pre><img src="..." class="img-fluid" alt="Responsive image"></pre>

###### Imágenes SVG e Internet Explorer

En Internet Explorer 10 y 11, las imágenes SVG .img-fluid tienen un tamaño desproporcionado. Para solucionar esto, agregá  width: 100%; o .w-100 donde sea necesario. Esta corrección dimensiona incorrectamente otros formatos de imagen, por lo que Bootstrap no la aplica automáticamente.

#### **Miniaturas de imágenes**

Además de las utilidades de radio de borde , podés utilizar .img-thumbnail para dar a una imagen una apariencia de borde redondeado de 1 px.

`<img src="..." alt="..." class="img-thumbnail">`

#### **Alinear imágenes**

Alineá las imágenes con las clases flotantes auxiliares o las clases de alineación de texto . Block

Las imágenes de nivel se pueden centrar usando la clase .mx-auto .

```
<pre><p> <img src="..." class="rounded float-left" alt="..."></p><p><img src="..." class="rounded float-right" alt="..."></p><p><img src="..." class="rounded mx-auto d-block" alt="..."></p><p> </p><p><div class="text-center"></p><p><img src="..." class="rounded" alt="..."></p><p></div></p></pre>
```



#### **Imagen**

Si estás utilizando el elemento <picture> para especificar varios elementos <source> para un específico <img>, asegúrate de agregar las clases .img-* <img> .

``` html
<pre> <picture><br/><source srcset="..." type="image/svg+xml"><br/><img src="..." class="img-fluid img-thumbnail" alt="..."><br/></picture></pre>
```



