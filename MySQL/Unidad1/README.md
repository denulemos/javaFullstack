# MySQL

El fundamento de nuestro universo digital es una acumulación de datos que aumenta sin cesar. Como consecuencia, los sistemas de gestión de bases de datos como MySQL son los elementos centrales de Internet y del mundo interconectado. Estos permiten procesar grandes cantidades de datos de manera electrónica, archivarlos con coherencia y guardarlos permanentemente. Para ello, los datos complejos se descomponen en cantidades manejables y, en función de las necesidades, se relacionan entre sí. En nuestro manual de MySQL para principiantes te presentamos los principios básicos de la gestión de bases de datos y te mostramos a través de ejemplos cómo puedes optimizar la gestión de los datos de tu proyecto web con MySQL.

### ¿Qué es MySQL?

MySQL se cuenta junto a Oracle y Microsoft SQL Server entre los sistemas de gestión de bases de datos relacionales más populares a escala mundial (encuentras un listado actual en https://db-engines.com/en/ranking). El software desarrollado en 1994 por la empresa MySQL AB cuenta hoy en día con el patrocinio de Oracle Corporation y se comercializa bajo un sistema de licencias dual. Asimismo, además de la edición Enterprise propietaria, Oracle ofrece una versión de código abierto con una licencia GPL.

Esta licencia dual ofrece a las empresas la posibilidad de desarrollar aplicaciones propias basándose en MySQL sin tener que someterlas a la licencia de código abierto. En la comunidad open source, sin embargo, la absorción de MySQL por parte de Oracle es objeto de críticas.

MySQL está escrito en C y C++ y, además, está provisto de un analizador sintáctico de SQL basado en Yacc con un tokenizador (escáner léxico) propio. Asimismo, el sistema de gestión de bases de datos se destaca por su amplio soporte de sistemas operativos.
La abreviatura SQL procede de “Structured Query Language”, un lenguaje de programación que sirve para gestionar estructuras de bases de datos. Entre las posibles operaciones se encuentran la consulta, integración, actualización y eliminación de datos existentes.

### MariaDB

En el ámbito del desarrollo web, la integración del proyecto MySQL en el catálogo de productos de Oracle es objeto de desconfianza y crítica debido, principalmente, al aumento constante de las diferencias entre la versión MySQL con licencia GPL y el producto Enterprise de pago. Las nuevas funciones del sistema de gestión de bases de datos son cada vez más frecuentes, aunque solo en la versión propietaria. Las bases de datos de errores no públicas y los tests insuficientes hacen suponer a la comunidad que, bajo las alas del software Oracle, el proyecto open source no disfruta de igualdad de condiciones, lo que desencadena un apoyo cada vez menor por parte de esta.

Ya en el año 2009, el equipo de desarrollo principal en torno a Michael “Monty” Widenius, inventor de la base de datos MySQL, le dio la espalda al popular sistema de bases de datos y puso en marcha **con ****MariaDB**** un ****fork**** de código abierto de ****MySQL****.** A finales de 2012, distribuciones Linux como Fedora, OpenSUSE, Slackware y Arch Linux fueron las primeras en reemplazar MySQL por MariaDB como instalación estándar. Un gran número de proyectos open source, de empresas de software y plataformas web conocidas siguieron el mismo ejemplo, entre ellas Mozilla, Ubuntu, Google, Red Hat Enterprise Linux, Web of Trust, Team Speak, la Fundación Wikimedia y XAMPP.

Aún hoy queda patente que, en comparación con la versión de MySQL de código abierto, MariaDB sigue desarrollándose. Por lo tanto, es de suponer que el fork vaya a superar pronto a su proyecto madre.

En el sector del software se puede hablar de un fork como una rama de desarrollo que surge de la bifurcación de un proyecto (en su mayoría, de fuente abierta). Un fork se crea sobre el código fuente del proyecto madre y se desarrolla en un proyecto de seguimiento independiente.

### Sistemas de BD

Hoy en día, la gestión electrónica de datos tiene lugar principalmente con sistemas de bases de datos (SBS), que están formados por dos componentes, la propia base de datos (BD) y el sistema de gestión de la base de datos (SGBD):

El sistema de gestión de bases de datos: por SGBD se entiende todo aquel software que, como MySQL, sirve para gestionar el sistema de bases de datos. Entre las tareas de este software de gestión se encuentra la estructuración de los datos conforme a un modelo de base de datos predefinido. Además, el SGBD controla los accesos de escritura y lectura, administra grandes cantidades de datos y accesos paralelos y se ocupa de que se cumplan las normas con respecto a la integridad de la información, así como a su protección y seguridad.

La base de datos es un conjunto de datos con contenidos relacionados, como, por ejemplo, información de los clientes o datos de los CMS. Un SGBD puede gestionar varias bases de datos de manera simultánea.

Un Sistema de Bases de Datos (SBD) está formado por un Sistema Gestor de Bases de Datos (SGBD) y varias bases de datos (BD)

### Modelo relacional de BD

Según su definición, MySQL es un SGBD relacional. Esto significa que la totalidad de los datos que utiliza MySQL se almacena en tablas relacionadas entre sí por medio de claves (keys).

Veamos cómo se puede ilustrar esto con un ejemplo sencillo. A continuación aparecen las tablas autores y obras:

![texto_alternativo_imagen](assets/rel1.png)

![texto_alternativo_imagen](assets/rel2.png)

Todas las tablas de una base de datos relacional están formadas por columnas y filas, y cada columna está diseñada para un **atributo** determinado. En la tabla *autores* se encuentran, por ejemplo, los atributos *id, nombre* y *apellido. *Las filas de una tabla están designadas como **rows****  y cada una de ellas contiene un conjunto de datos, el cual viene identificado (numerado), por lo general, por medio de una **clave primaria**. El tipo de atributo establecido como clave primaria se define a la hora de crear la tabla. El requisito es que la clave primaria posibilite una asignación inequívoca, de modo que esta solo puede utilizarse una vez en la columna. Para ello se recomienda una numeración en serie vía **ID**.

La tabla obras presenta, además de la clave primaria , id_obras, id_autores como clave foránea (foreign key). Esta crea una relación entre ambas tablas y enlaza los conjuntos de datos de una tabla con los de la otra. Cuando se establece una conexión entre dos tablas de una base de datos relacional se puede hablar de un join. Esta conexión podría tener lugar con la siguiente consulta a la base de datos: “carga todas las obras del autor John Ronald Reuel Tolkien con la fecha de la primera publicación”.
![texto_alternativo_imagen](assets/rel3.png)
Tolkien ha sido clasificado en la tabla autores con la clave primaria id_autores1. Para consultar todas las obras de dicho autor, este se presenta en la tabla obras como clave foránea. De esta manera se solicitan todos los rows enlazados con el id_autores 1.

En la práctica, todas las operaciones de bases de datos en MySQL se llevan a cabo con comandos SQL estandarizados como SELECT, INSERT, UPDATE y DELETE, pero hablaremos de ellos en capítulos posteriores de nuestro manual de MySQL.

Como es lógico, también se pueden guardar todos los datos referentes a los autores y a sus obras en una única tabla. Un almacenamiento de datos de estas características implica que una base de datos contenga un sinnúmero de entradas redundantes, ya que, por ejemplo, los datos en las columnas nombre y apellido se especifican de forma individual para cada obra. Una redundancia de este tipo no solo supone una carga para la memoria, sino que también da lugar a que se tengan que efectuar actualizaciones en diferentes puntos de la base de datos. Es por eso que cuando se trabaja con bases de datos relacionales se limite su contenido a un asunto por tabla. Se habla, en este caso, de una normalización de los datos.

El campo de aplicación principal de MySQL es el almacenamiento de datos en el contexto de las páginas web dinámicas. La combinación de MySQL con el software de servidores web Apache y los lenguajes de script PHP o Perl se ha consolidado como estructura clásica de software en el desarrollo web. El stack web puede llevarse a cabo como LAMP (Linux), MAMP (macOS) o WAMP (Windows) con los sistemas operativos de servidores habituales.

Para los que empiezan a trabajar con MySQL pueden ser recomendables los entornos localesXAMPP para recabar las primeras experiencias con el sistema de gestión de bases de datos, el cual se basa en  MariaDB en la versión actual.

## Instalacion

A continuación, te presentamos algunos ejemplos prácticos para arrojar más luz sobre los fundamentos de MySQL. Nuestro tutorial para MySQL tiene como base el entorno de prueba de XAMPP y los códigos de snippets y las capturas de pantalla se centran en las operaciones de bases de datos que se llevan a cabo a través de PHP con ayuda de un servidor Apache HTTP en un ordenador Windows. En lugar de la clásica base de datos MySQL, en este caso, se aplica el fork MariaDB. Actualmente, ambos sistemas de gestión de bases de datos son tan compatibles que todas las operaciones son exactamente iguales. En el marco de un tutorial para principiantes es indiferente si se trabaja con MySQL o con MariaDB.

También tienes la posibilidad de integrar un stack web personalizado. MySQL y MariaDB se pueden combinar, según sea necesario, con diversos sistemas operativos, servidores web y lenguajes de scripts. Los paquetes de descarga gratuitos y con licencia GPL están disponibles en la página mysql.com y mariadb.com. Puedes obtener instrucciones detalladas de instalación para diferentes plataformas en la documentación en inglés de MySQL y MariaDB.

