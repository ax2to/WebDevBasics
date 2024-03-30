# JavaScript

## Tema 1: Introducción a JavaScript
### ¿Qué es JavaScript?
JavaScript es un lenguaje de programación que se utiliza en el desarrollo web para hacer que las páginas sean interactivas y dinámicas. Es un componente fundamental de la web moderna y se ejecuta en el navegador del usuario, lo que permite crear experiencias web más ricas y personalizadas.

- **Lenguaje de alto nivel:** Esto significa que JavaScript está diseñado para que sea fácil de entender y escribir para los humanos. No necesitas preocuparte por los detalles técnicos de cómo funcionan las computadoras para empezar a escribir código en JavaScript.

- **Interpretado:** JavaScript es un lenguaje interpretado, lo que significa que el código JavaScript se ejecuta línea por línea en el navegador web. No es necesario compilar el código antes de ejecutarlo, lo que hace que el desarrollo sea más rápido y flexible.

- **Orientado a objetos:** JavaScript es un lenguaje orientado a objetos, lo que significa que se basa en el concepto de objetos y clases. Un objeto en JavaScript es una colección de datos y funciones que trabajan juntos para realizar una tarea específica.

### Historia y evolución de JavaScript
JavaScript fue creado por Brendan Eich en 1995 mientras trabajaba en Netscape Communications Corporation. Desde entonces, ha experimentado múltiples versiones y revisiones, con la introducción de nuevas características y mejoras en cada versión.

- **Orígenes:** Originalmente llamado Mocha, luego renombrado a LiveScript y finalmente a JavaScript, el lenguaje fue diseñado para agregar interactividad a las páginas web de una manera fácil y rápida.

- **Estandarización:** En 1997, JavaScript fue estandarizado como ECMAScript por Ecma International. La estandarización ayudó a garantizar la consistencia en la implementación del lenguaje en diferentes navegadores web.

- **Evolución:** Con el tiempo, JavaScript ha evolucionado para convertirse en un lenguaje de programación versátil y poderoso, con el desarrollo de nuevas características y funcionalidades en cada nueva versión.

### ¿Por qué aprender JavaScript?
Aprender JavaScript es fundamental para cualquier desarrollador web, ya que es el lenguaje de programación principal utilizado en el desarrollo web frontend. Hay varias razones para aprender JavaScript:

- **Interactividad:** JavaScript permite agregar interactividad y dinamismo a las páginas web, lo que mejora la experiencia del usuario y hace que las aplicaciones web sean más atractivas y funcionales.

- **Demanda laboral:** JavaScript es uno de los lenguajes de programación más populares y demandados en la industria tecnológica. Los desarrolladores de JavaScript son altamente solicitados y bien remunerados.

- **Versatilidad:** JavaScript se puede utilizar tanto en el frontend como en el backend del desarrollo web, lo que lo convierte en una herramienta versátil para crear aplicaciones web completas.

### Entorno de desarrollo
Para empezar a programar en JavaScript, necesitarás configurar un entorno de desarrollo adecuado:

- **Editor de texto:** Utiliza un editor de texto como Visual Studio Code, Sublime Text o Atom para escribir y editar tu código JavaScript.

- **Navegador web:** Utiliza un navegador web moderno como Chrome, Firefox o Edge para ejecutar y probar tu código JavaScript.

- **Consola del navegador:** La consola del navegador es una herramienta de desarrollo que te permite ejecutar comandos y depurar tu código JavaScript en tiempo real. Es una herramienta invaluable para los desarrolladores web.

## Tema 2: Fundamentos de JavaScript
### Sintaxis básica de JavaScript
En programación, la sintaxis se refiere a las reglas y estructuras que debes seguir al escribir código en un lenguaje de programación. Es como las reglas gramaticales en un idioma: si no sigues las reglas adecuadas, el código no funcionará correctamente.

- **Instrucciones:** En JavaScript, las instrucciones son como las acciones que le dices a la computadora que realice. Por ejemplo, imprimir un mensaje en la pantalla o calcular un número.

- **Puntos y coma:** A menudo, al final de una instrucción, se utiliza un punto y coma (;). Esto le dice a JavaScript que la instrucción ha terminado. Aunque en muchos casos, los puntos y coma son opcionales, es una buena práctica incluirlos para evitar posibles errores.

- **Mayúsculas y minúsculas:** JavaScript distingue entre mayúsculas y minúsculas. Esto significa que las palabras escritas con mayúsculas son diferentes de las escritas con minúsculas. Por ejemplo, variable y Variable serían tratadas como dos variables diferentes.

### Variables y tipos de datos
Las variables en JavaScript se utilizan para almacenar datos que pueden cambiar durante la ejecución del programa.

- **Declaración de variables:** Para declarar una variable, usamos las palabras clave `var`, `let` o `const`, seguidas del nombre de la variable.

- **Tipos de datos:** JavaScript admite varios tipos de datos, incluyendo números (enteros y decimales), cadenas de texto (texto entre comillas), booleanos (verdadero o falso), null (valor especial que representa la ausencia de valor) y undefined (cuando una variable no tiene valor asignado).

Por ejemplo, aquí hay algunas variables en JavaScript:

```javascript
var numero = 10;
let texto = "Hola, mundo!";
const pi = 3.14;
```
En este ejemplo, numero es una variable que almacena un número, texto es una variable que almacena una cadena de texto y pi es una variable constante que almacena el valor de pi.

### Operadores aritméticos, de asignación, de comparación y lógicos
Los operadores en JavaScript son símbolos especiales que se utilizan para realizar operaciones en variables y valores. 

#### Operadores aritméticos
Los operadores aritméticos se utilizan para realizar operaciones matemáticas básicas como suma, resta, multiplicación, división y más.

- **Suma (+):** Se utiliza para sumar dos valores.
```javascript
let resultado = 10 + 5;
console.log(resultado); // Output: 15
```

- **Resta (-):** Se utiliza para restar un valor de otro.
```javascript
let resultado = 10 - 5;
console.log(resultado); // Output: 5
```

- **Multiplicación (*):** Se utiliza para multiplicar dos valores.
```javascript
let resultado = 10 * 5;
console.log(resultado); // Output: 50
```

- **División (/):** Se utiliza para dividir un valor entre otro.
```javascript
let resultado = 10 / 5;
console.log(resultado); // Output: 2
```

- **Módulo (%):** Devuelve el resto de la división entera de dos valores.
```javascript
let resultado = 10 % 3;
console.log(resultado); // Output: 1 (10 dividido entre 3 es 3 con un resto de 1)
```

#### Operadores de asignación
Los operadores de asignación se utilizan para asignar valores a variables.

- **Asignación (=):** Se utiliza para asignar el valor de la derecha a la variable de la izquierda.

```javascript
let numero = 10;
```

- **Asignación de adición (+=):** Se utiliza para sumar el valor de la derecha al valor existente de la variable y luego asignar el resultado a la variable.

```javascript
let numero = 10;
numero += 5; // Equivalente a: numero = numero + 5;
console.log(numero); // Output: 15
```

- **Asignación de substracción (`-=`), multiplicación (`*=`), división (`/=`) y módulo (`%=`):** Funcionan de manera similar a +=, pero con las operaciones correspondientes.

#### Operadores de comparación
Los operadores de comparación se utilizan para comparar dos valores y devolver un valor booleano (`true` o `false`).

- **Igualdad (==):** Comprueba si dos valores son iguales. No verifica el tipo de datos.

```javascript
console.log(10 == 10); // Output: true
console.log(10 == "10"); // Output: true (aunque son tipos de datos diferentes)
```

- **Igualdad estricta (===):** Comprueba si dos valores son iguales y del mismo tipo de datos.

```javascript
console.log(10 === 10); // Output: true
console.log(10 === "10"); // Output: false (son tipos de datos diferentes)
```

- **Desigualdad (!=):** Comprueba si dos valores son diferentes. No verifica el tipo de datos.

```javascript
console.log(10 != 5); // Output: true
console.log(10 != "10"); // Output: false (aunque son tipos de datos diferentes)
```

- **Desigualdad estricta (!==):** Comprueba si dos valores son diferentes o si son de tipos de datos diferentes.

```javascript
console.log(10 !== 5); // Output: true
console.log(10 !== "10"); // Output: true (son tipos de datos diferentes)
```

#### Operadores lógicos
Los operadores lógicos se utilizan para realizar operaciones lógicas en valores booleanos y devolver un nuevo valor booleano como resultado.

- **Y lógico (&&):** Devuelve true si ambos operandos son true.

```javascript
console.log(true && true); // Output: true
console.log(true && false); // Output: false
```

- **O lógico (||):** Devuelve true si al menos uno de los operandos es true.

```javascript
console.log(true || false); // Output: true
console.log(false || false); // Output: false
```

- **Negación lógica (!):** Invierte el valor booleano de su operando.

```javascript
console.log(!true); // Output: false
console.log(!false); // Output: true
```

### Comentarios en JavaScript
En JavaScript, los comentarios son texto que se utiliza para documentar y explicar el código. Los comentarios no se ejecutan como parte del programa y son ignorados por el intérprete de JavaScript. Esto significa que puedes agregar comentarios en tu código para explicar lo que hace cada parte sin afectar su funcionalidad.

- **Comentarios de una sola línea:** Se utilizan para agregar comentarios cortos en una sola línea de código. Se crean anteponiendo // al texto del comentario.

```javascript
// Este es un comentario de una sola línea
let numero = 10; // Aquí declaramos una variable
```

- **Comentarios de varias líneas:** Se utilizan para agregar comentarios más largos que abarcan varias líneas de código. Se crean encerrando el texto del comentario entre /* y */.

```javascript
/* Este es un comentario
   de varias líneas que explica
   una sección de código */
let resultado = 10 * 5; // Aquí realizamos una operación de multiplicación
```

Los comentarios son útiles por varias razones:

- **Documentación del código:** Los comentarios explican cómo funciona el código, su propósito y cualquier detalle importante que otro programador pueda necesitar saber.

- **Facilitar la comprensión:** Los comentarios hacen que el código sea más comprensible para otros desarrolladores o para ti mismo en el futuro, especialmente en partes complejas o poco claras del código.

- **Depuración:** Los comentarios pueden ayudar en la depuración al explicar el razonamiento detrás de una sección específica del código, lo que facilita encontrar y corregir errores.

Ejemplos de comentarios

```javascript
// Declaración de variables
let numero = 10; // Esta es una variable para almacenar un número
let texto = "Hola, mundo!"; // Esta es una variable para almacenar un mensaje de texto

/* Cálculo del resultado
   Multiplicamos el número por 5 para obtener el resultado */
let resultado = numero * 5;
```

## Tema 3: Control de flujo
- Estructuras de control: if, else, else if, switch
- Bucles: while, do while, for
- Uso de break y continue

## Tema 4: Funciones
- ¿Qué son las funciones?
- Declaración y llamada de funciones
- Parámetros y argumentos de funciones
- Retorno de valores en funciones
- Alcance de las variables: ámbito global y ámbito local

## Tema 5: Arrays y Objetos
- ¿Qué son los arrays y los objetos en JavaScript?
- Manipulación de arrays: acceso a elementos, modificación, eliminación, longitud
- Creación y manipulación de objetos: propiedades y métodos

## Tema 6: Eventos
- Introducción a los eventos en JavaScript
- Manipulación de eventos en el navegador: click, input, submit, etc.
- Uso de addEventListener para manejar eventos

## Tema 7: DOM (Document Object Model)
- ¿Qué es el DOM?
- Acceso y manipulación de elementos HTML mediante JavaScript
- Creación, modificación y eliminación de elementos dinámicamente

## Tema 8: Manipulación del CSS
- Cambio de estilos CSS mediante JavaScript
- Añadir, eliminar y modificar clases CSS
- Animaciones y transiciones CSS controladas por JavaScript

## Tema 9: AJAX y Fetch API
- Introducción a AJAX
- Uso de la Fetch API para realizar peticiones HTTP asíncronas
- Trabajo con JSON

## Tema 10: Introducción a ES6+
- Principales características de ECMAScript 6 y posteriores (ES6+)
- Let y const
- Arrow functions
- Template literals
- Destructuring
- Spread y Rest operators