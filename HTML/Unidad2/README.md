## Formato de texto

### Formateando un texto en HTML

Además de todo lo relativo a la organización de los párrafos, uno de los aspectos primordiales del formateo de un texto es el de la propia letra. Resulta muy común y práctico presentar texto resaltado en negrita, itálica y otros. Paralelamente el uso de índices, subíndices resulta vital para la publicación de textos científicos. Todo esto y mucho más es posible por medio del HTML a partir de multitud de etiquetas entre las cuales vamos a destacar algunas.

Pero antes de comenzar cabe hacer una reflexión sobre por qué son interesantes estas etiquetas y se siguen usando, a pesar que están entrando prácticamente en el terreno de CSS, ya que en la práctica están directamente formateando el aspecto de las fuentes. Son importantes porque las etiquetas en si no están para definir un estilo en concreto, sino una función de ciertas palabras dentro de un contenido. Por ejemplo, las negritas quieren decir que algo tiene más fuerza o importancia dentro de un texto y una itálica se puede usar para un texto que citado o algún énfasis particular.

##### **Negrita**

Podemos escribir texto en negrita incluyéndolo dentro de las etiquetas B y su cierre (bold). Esta misma tarea es desempeñada por STRONG y su cierre, siendo ambas equivalentes. Nosotros nos inclinamos por la primeras por simple razón de esfuerzo.

Escribiendo un código de este tipo:

<pre><b>Texto en negrita</b></pre>

Obtenemos este resultado: **Texto en negrita**

***Nota***: ¿Qué diferencia hay entre B y STRONG? Aunque las dos etiquetas hacen el mismo efecto, tienen una peculiaridad que las hace distintas. La etiqueta B indica negrita, mientras que la etiqueta STRONG indica que se debe escribir con fuerza.

El HTML lo interpretan los navegadores según su criterio, es por eso que las páginas se pueden ver de distinta manera en unos navegadores y en otros. La etiqueta H1 quiere decir "encabezado de nivel 1", es el navegador el responsable de formatear el texto de manera que parezca un encabezado de primer nivel. En la práctica los encabezados de los navegadores habituales son muy parecidos (tamaño de letra grande y en negrita), pero otro navegador podría colocar los encabezados con subrayado si le pareciese oportuno.

La diferencia entre b y STRONG se podrá entender ahora. Mientras que B significa simplemente negrita y todos los navegadores la interpretarán como negrita, STRONG es una etiqueta que significa que se tiene que resaltar fuertemente el texto y cada navegador es el responsable de resaltarlo como desee. En la práctica STRONG coloca el texto en negrita, pero podría ser que un navegador decidiese resaltar colocando negrilla, subrayado y color rojo en el texto.

##### Italica

También en este caso existen dos posibilidades, una corta: I y su cierre (italic) y otra un poco más larga: EM y su cierre. En este manual, y en la mayoría de las páginas que veréis por ahí, os encontraréis con la primera forma sin duda más sencilla a escribir y a acordarse.

He aquí un ejemplo de texto en itálica:

<pre><i>Texto en itálica</i></pre>

Que da el siguiente efecto:

*Texto en itálica*

##### **Subrayado**

El HTML nos propone también para el subrayado el par de etiquetas: U (underlined). Sin embargo, el uso de subrayados ha de ser aplicado con mucha precaución dado que los enlaces hipertexto van, a no ser que se indique lo contrario, subrayados con lo que podemos confundir al lector y apartarlo del verdadero interés de nuestro texto.

Además, cabe decir que la etiqueta U se ha quedado obsoleta, debido a que es algo que realmente se debe hacer del lado del CSS, al ser básicamente un estilo.

##### **Subíndices y supraíndices**

Este tipo de formato resulta de extremada utilidad para textos científicos. Las etiquetas empleadas son:

<pre><p><sup> y </sup> para los supraíndices</p><p><sub> y </sub> para los subíndices</p></pre>

##### **Anidar etiquetas**

Todas estas etiquetas y por supuesto el resto de las vistas y que veremos más adelante pueden ser anidadas unas dentro de otras de manera a conseguir resultados diferentes. Así, podemos sin ningún problema crear texto en negrita e itálica embebiendo una etiqueta dentro de la otra:

<pre><b>Esto sólo está en negrita <i>y esto en negrita e itálica</i></b></pre>

Esto nos arroja un texto como este:

**Esto sólo está en negrita *****y esto en negrita e itálica***

***Consejo***: Cuando anides etiquetas HTML hazlo correctamente. Nos referimos a que si abres etiquetas dentro de otra más principal, antes de cerrar la etiqueta principal cierres las etiquetas que hayas abierto dentro de ella.

Debemos evitar códigos como el siguiente:

<pre><b>Esto está en negrita e <i>itálica</b></i></pre>

En favor de códigos con etiquetas correctamente anidadas:

<pre><b>Esto está en negrita e <i>itálica</i></b></pre>

Esto es muy aconsejable, ya que aunque los navegadores entiendan bien las etiquetas mal anidadas, por dos razones:

Sistemas como XML no son tan permisivos con estos errores y puede que en el futuro nuestras páginas no funcionen correctamente.

A algunos navegadores les cuesta tiempo de procesamiento resolver este tipo de errores, incluso más que mostrar una página, por ende, debemos evitar que una mala codificación interfiera en la fluidez de transmisión de datos del servidor a nuestro dispositivo.

##### **Los ****colores y HTML**

Ahora aprenderás a crear colores en notación RGB con valores en hexadecimal, la manera más habitual de expresar un color en el lenguaje HTML. Explicamos la correcta utilización de los colores en el HTML.

En la composición de webs juegan un papel muy importante los colores. Usar una paleta de colores definida suele ayudar a la consistencia de un diseño y a transmitir ciertas sensaciones al usuario. Como parte de nuestro aprendizaje de HTML tenemos que detenernos a comprender cómo se expresan los colores en el lenguaje.

En HTML se usa una notación específica de especificar un color, compuesta por tres valores "RGB": Red, Green, Blue. Rojo, Verde y Azul. Es decir, que para conseguir un color cualquiera mezclaremos cantidades de cada uno de esos colores. RGB es el modelo usado para la creación de colores de los monitores y televisores, así que es un excelente modo de expresar color en un medio digital como una web.

Los valores RBG en HTML se indican en numeración hexadecimal, en base 16. (Los dígitos pueden crecer hasta 16. Como no hay tantos dígitos numéricos, se utilizan las letras de la A a la F).

Para conseguir un color, mezclaremos valores asignando dos dígitos a cada valor RBG. De esta manera: "#RRGGBB"

Como has observado, colocamos también una almohadilla "#" al principio, para indicar que esa cadena es un valor de color en hexadecimal.

Más adelante en el artículo veremos ejemplos en una paleta, con valores en RGB. No obstante ejemplos podrían ser #000000 para el negro, #FFFFFF para el blanco, #660000 sería un rojo oscuro o #FF0000 un rojo brillante.

Actualmente hay otras formas de escribir colores en las que profundizaremos en CSS. Muchas veces se utilizan diferentes estilos de escritura para definir colores, porque alguna notación es más versátil y podemos conseguir más fácilmente cualquier tonalidad deseada o el manejo de la opacidad (transparencia) en un sólo código.

##### **Atributos de color en etiquetas HTML**

En HTML existen numerosas etiquetas que soportan atributos de color. Para que tengas una primera referencia, así se cambiaría la fuente para escribir en rojo:

<font color="#FF0000">Rojo</font>

Como ves, al Atributo color le damos un valor RGB en formato hexadecimal. El caracter # se coloca al principio de la cadena.

Nota: De nuevo tenemos que advertir sobre la necesidad de expresar todo lo que son estilos mediante CSS. En HTML nos debemos centrar en lo que es escribir el contenido y en CSS en aplicar el estilo. Es de destacar, que el color es más estilo que contenido, así que debería ir en el CSS.

El motivo por el cual toda la etiqueta <font> ha quedado en desuso, es justamente porque solo se utiliza para aplicar un estilo.

En CSS los colores se pueden expresar de la misma manera que en HTML y en tambien abordaremos otras opciones de codificación que mencioné en esta sección.

##### **Combinar otros colores**

Al principio puede parecer difícil crear combinaciones de color con valores hexadecimales, pero con la práctica nos iremos acostumbrando y hasta seremos capaces de pensar un color y conseguir de cabeza un valor RGB aproximado. Nos vendrá bien tener en mente la rueda de colores.

Algunos editores como el Geany propuesto, o Visual Studio Code, vienen con "color pickers" integrados para facilitar esta tarea, sin tener que cambiar de programa.

Para obtener una rueda y los códigos de colores te recomendamos que ingreses en el sitio:

[https://htmlcolorcodes.com/es/](https://htmlcolorcodes.com/es/)

donde, en forma totalmente gratuita y sin registración previa podrás consultar códigos, tablas y nombres de colores.

##### **Colores seguros**

En lo que respecta a los colores, no podemos saber que tipo de pantalla va a tener la persona que nos visita y la resolución de color. Por eso una buena idea es usar aquellos colores considerados seguros, que son los "Safe colors", y corresponden a colores compatibles con todos los sistemas.

***Nota***: Hoy la necesidad de usar colores seguros (aquellos que se verán bien en todos los monitores, independientemente de su paleta de color), no es tan grande como hace años, porque la tecnología ha evolucionado mucho y es raro encontrar un monitor que solo soporte 256 colores. No obstante es un conocimiento que resulta interesante por el hecho de remarcar la naturaleza universal de la web y la necesidad de construir páginas que sean capaces de adaptarse a cada medio donde va a ser consultada. En este curso no vamos a entrar en detalles que tienen que ver con el diseño gráfico, pero si es de tu interes te recomiendo leer sobre el Responsive Web Design y el uso de colores. Igualmente, en nuestro proyecto de una página web, abordaremos casos Responsive en webs para pc y celulares.

La forma de conseguir colores seguros es limitando nuestros colores a los que se pueden conseguir utilizando los siguientes valores:

00
33
66
99
AA
CC
FF

Es interesante comentar que, cuando usamos colores seguros, podemos resumir la notación RGB usando tres caracteres en vez de 6. Por ejemplo, #000 equivale a #000000. O #ABC equivale a #AABBCC.

Usando todas las combinaciones de "safe colors", conseguimos una paleta de colores variados.

### Atributos de Pagina

Explicamos una serie de atributos que se aplican de manera global a toda la página, como el color de fondo el del texto, de los enlaces, márgenes, etc.

En este artículo nos metemos de nuevo en el terreno del CSS. Veremos todo tipo de estilos que se pueden aplicar a una página, colores o imágenes de fondo, colores para los enlaces, etc. Todo eso tiene que ir en el CSS. Si estás decidido a aprender CSS a continuación de aprender HTML (que deberías), puedes saltarte este texto tranquilamente. Ahora bien, si quieres seguir aprendiendo cosas del HTML y te apetece empezar con lo que sabes a poner un poco de color a la página, lee a continuación.

*Las páginas HTML pueden construirse con variedad de atributos que le pueden dar un aspecto a la página muy personalizado. Podemos definir atributos como el color de fondo, el color del texto o de los enlaces. Estos atributos se definen en la etiqueta BODY y, como decíamos son generales a toda la página.*

Lo mejor para explicar su funcionamiento es verlos uno por uno.

##### **Atributos para fondos**

**bgcolor**: especificamos un color de fondo para la página. En el capítulo anterior y en el taller de los colores y HTML hemos aprendido a construir cualquier color, con su nombre o su valor RGB. El color de fondo que podemos asignar con bgcolor es un color plano, es decir el mismo para toda la superficie del navegador.

**background**: sirve para indicar la colocación de una imagen como fondo de la página. La imagen se coloca haciendo un mosaico, es decir, se repite muchas veces hasta ocupar todo el espacio del fondo de la página. En capítulos más adelante veremos como se insertan imágenes con HTML y los tipos de imágenes que se pueden utilizar.

**Ejemplo**

En el video de esta sección vamos a colocar esta imagen que obtenés del siguiente link [https://pin.it/3SQWX21](https://pin.it/3SQWX21) como fondo en la página.

Y te invito a practicar a vos tambié en tu casa. Para trabajar con una imagen vamos a colocarla en la misma carpeta donde está el HTML que vamos a trabajar. Más adelante también hablaremos sobre cómo acceder a otros archivos que están en otras carpetas, mediante la composición de rutas un poco más complejas que harán más prolijo el ambiente de trabajo, pero por el momento suponemos que la imagen se encuentra en el mismo directorio que la página.

*Recomendación*: Siempre que coloques una imagen de fondo, debemos poner también un color de fondo cercano al color de la imagen.

Esto se debe a que, al colocar una imagen de fondo, el texto de la página debemos colocarlo en un color que contraste suficientemente con dicho fondo. Si el visitante no puede ver el fondo, puede que el texto no contraste lo suficiente con el color de fondo por defecto de la web.

Entonces, supongamos que: la imagen de fondo es oscura, tendremos que poner un texto claro para que se pueda leer.

Ocurre parecido cuando se está cargando la página. Si todavía no ha llegado a nuestro sistema la imagen de fondo, se verá el fondo que hayamos seleccionado con bgcolor y es interesante que sea parecido al color de la imagen para que se pueda leer el texto mientras se carga la imagen de fondo.

##### **Color del texto**

**text**: este atributo sirve para asignar el color del texto de la página. Por defecto es el negro.

Además del color del texto, tenemos tres atributos para asignar el color de los enlaces de la página. Ya debemos saber que los enlaces deben diferenciarse del resto del texto de la página para que los usuarios puedan identificarlos fácilmente. Para ello suelen aparecer subrayados y con un color más vivo que el texto. Los tres atributos son los siguientes:

* **link**: el color de los enlaces que no han sido visitados. (por defecto es azul clarito)
* **v****link**: el color de los enlaces visitandos. La "v" viene justamente de la palabra visitado. Es el color que tendrán los enlaces que ya hemos visitado. Por defecto su color es morado. Este color debería ser un poco menos vivo que el color de los enlaces normales.
* **alink**: es el color de los enlaces activos. Un enlace está activo en el preciso instante que se pulsa. A veces es difícil darse cuenta cuando un enlace está activo porque en el momento en el que se activa es porque lo estamos pulsando y en ese caso el navegador abandonará la página rápidamente y no podremos ver el enlace activo más que por unos instantes mínimos.

**Ejemplo de color del texto**

Si a una página le vamos a poner el color de fondo sea negro, y los colores del texto y los enlaces sean claros. Pondremos el color de texto blanco y los enlaces amarillos, más resaltados los que no estén visitados y menos resaltados lo que ya están visitados. 

##### **Márgenes**

Con otros atributos de la etiqueta BODY se pueden asignan espacios de margen en las páginas, lo que es muy útil para eliminar los márgenes en blanco que aparecen a los lados, arriba y debajo de la página. Estos atributos son distintos para Internet Explorer y para otros navegadores, por lo que debemos utilizarlos todos si queremos que todos los clientes web los interpreten perfectamente.

* **leftmargin**: para indicar el margen a los lados de la página. Válido para iexplorer.
* **topmargin**: para indicar el margen arriba y debajo de la página. Para iexplorer.
* **marginwidth**: la contrapartida de leftmargin para Firefox. (Margen a los lados)
* **marginheight**: igual que topmargin, pero para Firefox. (Margen arriba y abajo)

Tenemos un artículo sobre la utilización de estos atributos para hacer diseños avanzados con tablas en distintas definiciones de pantalla, que puede ser interesante de leer.

##### **¿ Por qué todos estos estilos deberían definirse en CSS ?**

Como hemos dicho, todos estos estilos deberían indicarse en el CSS. Existen muchos motivos para ello pero uno de ellos seguro que ahora se podrá comprender. Imagina un sitio web con 30 páginas distintas (no tiene que ser muy grande para llegar a ese número). Imagina que llegado un día te cansas del color negro de fondo y lo quieres azul, y el color de los enlaces amarillo y lo quieres verde. Si tienes los estilos en el HTML tendrías que ir, página a página, cambiando los estilos 30 veces.

CSS, es un tipo de codificación que entre otras cosas, permite tener los estilos definidos en un único lugar, un archivo con código en texto plano, y todas las páginas de tu sitio web usarían ese mismo archivo para definir su [presentación](https://aulasvirtuales.bue.edu.ar/mod/lesson/view.php?id=6310 "Presentación"). Así, si un día te cansas del color de fondo, el color del texto, el tipo de letra o su tamaño, entonces solo tienes que ir a un único lugar (el archivo CSS) y cambiarlo una única vez.

### Enlaces

Un sitio web podría ser considerado como un conjunto de archivos, basado en páginas HTML e imágenes, que constituyen el contenido al que el usuario tiene acceso.

Sin embargo, no podríamos hablar de navegación si estos archivos HTML no estuviesen debidamente conectados entre ellos y el exterior de nuestro sitio por medio de enlaces url´s.

La particularidad de HTML de relacionar contenidos de los archivos introduciendo referencias bajo forma de enlaces que permitan un acceso rápido a otra información deseada, fue una de las características que lo impulsó vertiginosamente. De poco serviría tener páginas aisladas a las que el usuario no puede acceder o no vincular una información con otra.

Un enlace puede ser fácilmente detectado por el usuario en una página. Basta con deslizar el puntero del ratón sobre las imágenes o el texto y ver como cambia de su forma original transformándose por regla general en una mano con un dedo señalador. Adicionalmente, estos enlaces suelen ir, en el caso de los textos, coloreados y subrayados para que el usuario no tenga dificultad en reconocerlos.

* **Sintaxis de un enlace**

Para colocar un enlace, nos serviremos de las etiquetas A y su cierre. Dentro de la etiqueta de apertura deberemos especificar asimismo el destino del enlace. Este destino será introducido bajo forma de atributo, el cual lleva por nombre "href".

La sintaxis general de un enlace es por tanto de la forma:

<pre> <span><a href="destino">hacé click aquí</a></span></pre>

Siendo el **"hacé click aquí"** un texto o una imagen. Es la parte de la página que se colocará activa y donde deberemos pulsar para acceder al enlace. Por su parte, "destino" será una página, y también (con algún cambio) puede ser un correo electrónico o un archivo.

Por ejemplo, un enlace a Google, tendría esta manera

<pre> <span><a href="</span><a href="http://www.google.com/">http</a><a href="http://www.google.com/">s</a><a href="http://www.google.com/">://www.</a><a href="http://www.google.com/">google</a><a href="http://www.google.com/">.com/</a>">Ir a Google</a></pre>

Ahora, si queremos que el contenido del enlace sea una imagen y no un texto, podremos colocar la correspondiente etiqueta IMG dentro de la etiqueta A.

<pre> <a href="<a href="https://www.google.com/">http</a><a href="https://www.google.com/">s</a><a href="https://www.google.com/">://www.</a><a href="https://www.google.com/">google.com/</a>"><img src="logo.jpg"></a></pre>

*Nota*: no hemos visto aún nada sobre imágenes, aunque lo veremos en el próximo encuentro.

##### El aspecto de los Enlaces

Es posible, mediante HTML, y las hojas de estilo CSS, definir el aspecto que tendrán los enlaces en una página. De manera predeterminada el navegador los destaca para que podamos distinguirlos entre el texto de la página. Generalmente encontraremos a los enlaces subrayados y coloreados en azul, aunque esta regla depende del navegador del usuario y de sus estilos definidos como predeterminados.

Ese estilo lo correcto es colocarlo en el código de CSS, pero también se puede definir en la etiqueta BODY. Eso es algo que se explicó en el artículo Atributos generales de la página.

* **Tipos de enlaces**

Para estudiar en profundidad los enlaces tenemos que clasificarlos por su tipo, porque dependiendo ese tipo algunas cosas cambiarán a la hora de construirlos.

En función del destino los enlaces pueden ser agrupados en:

* **Enlaces internos**: los que se dirigen a otras partes dentro de la misma página.
* **Enlaces locales**: los que se dirigen a otras páginas del mismo sitio web.
* **Enlaces remoto**s: los dirigidos hacia páginas de otros sitios web.
* **Enlaces email**s: para crear un mensaje de correo dirigido a una dirección.
* **Enlaces con archivos**: para que los usuarios puedan hacer download de ficheros.

##### **Sintaxis de los enlaces en la misma página**

Crear un enlace que apunte al final de la página. Lo primero será colocar nuestro enlace origen. Este enlace de origen es el que el usuario podrá hacer clic.jo](#abajo)`

Como podés ver, el contenido del enlace es el texto "Ir abajo" y el destino, #abajo, es un punto de la misma página que todavía no hemos definido. Ojo al símbolo "#": es él quien especifica al navegador que el enlace apunta a una sección en particular, a un punto interno dentro de la misma página.

En segundo lugar, hay que generar un enlace en el destino, al que hemos llamado "ancla". Este enlace no llevará contenido, puesto que no queremos que nadie lo pulse, sino que nos sirva de ancla. Tampoco llevará el atributo "href", porque no tiene que apuntar a ningún lugar, sino que le apuntarán a él. Para poder distinguirlo de otros posibles enlaces realizados dentro de la misma página a cada ancla se le asigna un nombre por medio del atributo "name".

Para entender cómo crear los enlaces internos nos tenemos que fijar en el name="abajo" del ancla. Pues bien, si queremos crear un enlace interno a esta ancla, colocaremos en en enlace de origen el href="#abajo", o sea, el nombre del enlace más un "#" para que el navegador sepa que es un enlace interno.

##### Cómo construir enlaces en HTML cuyo destino sean otras páginas dentro del mismo sitio web.

Como hemos dicho, un sitio web esta constituido de páginas interconexas, que se relacionan mediante enlaces de hipertexto. Para abordar el estudio dividimos la materia por los distintos tipos de enlaces que nos podemos encontrar, atendiendo al tipo de destino. En el capitulo anterior vimos cómo enlazar distintas secciones dentro de una misma página.

En este artículo nos pondremos con otros tipos de enlaces, a los que hemos llamado **"Enlaces locales"**. Se trata de un tipo de enlace mucho más común en el día a día del desarrollo. De hecho, es el tipo de enlace que más se produce en lo general. Estos enlaces locales nos permiten relacionar distintos documentos HTML que componen un sitio web. Gracias a los enlaces locales podremos convertir varias páginas sueltas en un sitio web completo, compuesto de varios documentos.
