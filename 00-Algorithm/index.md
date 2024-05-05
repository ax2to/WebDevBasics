# Algoritmos

Un algoritmo es un conjunto de instrucciones o reglas definidas que se siguen para realizar una tarea o resolver un problema. En términos más técnicos, es una secuencia de operaciones que se llevan a cabo para transformar la entrada de datos en una salida deseada. Estas instrucciones deben ser claras, precisas, y llevarse a cabo en un número finito de pasos.

[Definicion segun la RAE](https://dle.rae.es/algoritmo)

**Ejemplos de algoritmos:**

Vida Cotidiana: Una receta de cocina es un algoritmo que describe los pasos para preparar un platillo específico.

La Papa a la Huancaína es un plato tradicional peruano que consiste en rodajas de papa cocida cubiertas con una salsa cremosa de queso y ají amarillo. 

```
// Receta 
INICIO
    1. Ingredientes:
       - Papas amarillas
       - Queso fresco
       - Ají amarillo
       - Leche evaporada
       - Galletas de soda
       - Huevos
       - Aceitunas negras
       - Sal y pimienta

    2. Cocer las papas:
       - Lavar las papas.
       - Poner las papas en una olla con agua y sal.
       - Cocinar hasta que estén suaves.
       - Escurrir y dejar enfriar.
       - Pelar y cortar en rodajas gruesas.

    3. Preparar la salsa Huancaína:
       - Quitar las semillas y venas al ají, luego picar fino.
       - Freír el ají en un poco de aceite hasta que esté cocido.
       - Mezclar en la licuadora el ají, queso fresco, galletas, y leche evaporada.
       - Licuar hasta obtener una mezcla homogénea y cremosa.
       - Sazonar con sal y pimienta al gusto.

    4. Servir:
       - Colocar las rodajas de papa en un plato.
       - Cubrir las papas con la salsa Huancaína.
       - Decorar con rodajas de huevo cocido y aceitunas negras.
FIN
```

Informática: Un algoritmo de ordenamiento como el Quick Sort, que organiza una lista de números de menor a mayor.

Quick Sort es un método eficiente para ordenar listas, basado en la estrategia de "dividir para conquistar", donde la lista se divide en segmentos menores para ser ordenados individualmente antes de unirse.

[Wikipedia QuickSort](https://es.wikipedia.org/wiki/Quicksort)

```
ALGORITMO QuickSort(Arreglo A, entero bajo, entero alto)
    Si bajo < alto entonces
        puntoPivote = Partición(A, bajo, alto)
        QuickSort(A, bajo, puntoPivote - 1)  // Ordena el sub-arreglo izquierdo
        QuickSort(A, puntoPivote + 1, alto)  // Ordena el sub-arreglo derecho
    Fin Si
FIN ALGORITMO

ALGORITMO Partición(Arreglo A, entero bajo, entero alto)
    pivote = A[alto]  // selecciona el último elemento como pivote
    i = bajo - 1
    Para j = bajo hasta alto - 1 hacer
        Si A[j] < pivote entonces
            i = i + 1
            Intercambiar(A[i], A[j])
        Fin Si
    Fin Para
    Intercambiar(A[i + 1], A[alto])
    Retornar i + 1
FIN ALGORITMO
```

## Historia
El concepto de algoritmo tiene raíces antiguas y ha sido parte integral del desarrollo humano en la matemática y la lógica. 

La palabra castellana algoritmo deriva del latín algorithmus, que se acuñaría en el siglo XV a partir del latín algorismus, con influencia del griego arithmos, que significa «número», o de la latinización del apellido del matemático persa Al-Juarismi. La RAE, por su parte, propone que deriva del latín algobarismus, que derivaría del árabe clásico ḥisābu lḡubār, que significa «cálculo mediante cifras arábigas».

A lo largo de la historia, los algoritmos han sido fundamentales en el desarrollo de matemáticas y ciencias de la computación. En la era moderna, su importancia ha crecido exponencialmente con el advenimiento de las computadoras. Desde simples algoritmos de ordenación y búsqueda hasta complejos algoritmos en criptografía, inteligencia artificial y procesamiento de datos, los algoritmos son la columna vertebral de todas las operaciones computacionales. 

[Algoritmo en Wikipedia](https://es.wikipedia.org/wiki/Algoritmo)

## Caracteristicas
1. Definido: Cada paso del algoritmo debe estar claramente definido. Las acciones a realizar deben ser precisas y no deben dejar lugar a interpretaciones ambiguas.

2. Finito: Un algoritmo debe tener un número finito de pasos. Debe terminar eventualmente después de una cantidad limitada de pasos, evitando bucles infinitos o procesos sin fin.

3. Entrada: Los algoritmos tienen cero o más entradas, suministradas desde fuentes externas o predefinidas dentro del algoritmo. Estas entradas son los datos sobre los que el algoritmo actúa.

4. Salida: Debe producir al menos una salida. Esto incluye resultados o modificaciones del estado de ciertos datos que proporcionan una solución al problema que el algoritmo fue diseñado para resolver.

5. Efectividad: Los pasos deben ser lo suficientemente básicos para que puedan ser ejecutados en un tiempo razonable y con recursos disponibles.

## Ciclo de escritura de un algoritmo

1. Definición del Problema: Entender y especificar claramente el problema a resolver.
2. Diseño del Algoritmo: Planificar y diseñar la lógica para resolver el problema, usualmente utilizando pseudocódigo o diagramas de flujo.
3. Codificación: Implementar el algoritmo en un lenguaje de programación específico.
4. Pruebas del Algoritmo: Probar el algoritmo para asegurar que resuelve el problema correctamente en todos los casos previstos.
5. Depuración y Optimización: Corregir errores encontrados durante las pruebas y mejorar la eficiencia del algoritmo.

## Formas de representar algoritmos
Los algoritmos pueden ser expresados de muchas maneras, incluyendo al lenguaje natural, pseudocódigo, diagramas de flujo y lenguajes de programación entre otros. Las descripciones en lenguaje natural tienden a ser ambiguas y extensas. El usar pseudocódigo y diagramas de flujo evita muchas ambigüedades del lenguaje natural. Dichas expresiones son formas más estructuradas para representar algoritmos; no obstante, se mantienen independientes de un lenguaje de programación específico. 

### Pseudocódigo
El pseudocódigo es una forma de describir los pasos de un algoritmo utilizando un lenguaje más comprensible y menos estricto que los lenguajes de programación reales. No está destinado a ser ejecutado por una computadora, sino a ayudar a los programadores a planificar y razonar sobre sus programas. Es una especie de "boceto" del código.

Generalmente, el pseudocódigo se escribe y se lee de arriba hacia abajo, lo que refleja el flujo secuencial estándar de la mayoría de los lenguajes de programación. Esto significa que los pasos están ordenados tal como se espera que ocurran en la ejecución.

#### Caracteristicas
1. Claridad: Debe ser fácil de leer y entender, incluso para alguien que no está familiarizado con el lenguaje de programación final.
2. Lenguaje independiente: No está atado a ningún lenguaje de programación específico. Esto permite que sea versátil y adaptable.
3. Estructurado: Aunque no sigue la sintaxis rígida de un lenguaje de programación, debe tener una estructura lógica clara, con inicio, desarrollo y fin claramente definidos.
4. Flexibilidad: Puede adaptarse al nivel de detalle que el programador necesite.

#### Sintaxis
El pseudocódigo no tiene una sintaxis estricta pero hay convenciones comunes que se usan para proporcionar claridad y estructura.

**Inicio / Fin**
Todo pseudocodigo debe definir claramente el inicio y fin del algoritmo, esto se puede hacer de distintas formas siendo las mas comunes

INICIO / FIN: Empezar con la palabra INICIO y terminar con la palabra FIN.
```
INICIO
    // hacer algo aqui
FIN
```
ALGORITMO/PROCESO: Empezar con la palabra ALGORITMO o PROCESO seguido del nombre del programa, seguido de la ejecucion y terminando con FIN ALGORITO o PROCESO. 
```
Algoritmo SumarNumeros
    // hacer algo aqui
Fin Algoritmo

Proceso SumarNumeros
    // hacer algo aqui
Fin Proceso
```

**Indentación**
Aunque el pseudocódigo no tiene un estándar formal que exija el uso de indentación, es una práctica común utilizarla para mostrar la estructura del algoritmo claramente, especialmente para destacar las relaciones jerárquicas entre las diversas instrucciones. 
```
INICIO
    SI 1 > 0 ENTONCES
        // hacer algo aqui
    FIN SI
FIN
```

**Nomenclatura**
No hay reglas estrictas sobre el uso de mayúsculas o minúsculas en pseudocódigo. Algunos prefieren usar mayúsculas para palabras clave como SI, ENTONCES, FIN, etc., para diferenciarlas claramente de las variables y otras instrucciones. Otros optan por escribir todo en minúsculas para simplificar.
```
// Palabras clave en mayuscula
INICIO
    SI 1 > 0 ENTONCES
        // hacer algo aqui
    FIN SI
FIN

// Todo en minisculas
inicio
    si 1 > 0 entonces
        // hacer algo aqui
    fin si
fin
```

**Variables**
Una variable es un espacio de almacenamiento que contiene datos que pueden modificarse durante la ejecución de un programa. Las variables son fundamentales porque permiten que los programas sean dinámicos y adaptables. Cada variable tiene un nombre único que se usa para referenciar el valor que contiene.

Es útil adoptar un estilo claro y descriptivo para los nombres de variables y funciones, similar a lo que se recomienda en la programación real. Esto podría incluir el uso de nombres significativos que indiquen el propósito de la variable o función, aunque la elección entre camelCase, snake_case, o cualquier otra convención es flexible y depende del autor del pseudocódigo.

En pseudocodigo las variables pueden ser o no declaradas y pueden incluir el tipo de dato solo si es relevamte para el algoritmo.
```
// declaracion de variables
DEFINIR altura
DEFINIR anchura
DEFINIR area, perimetro, volumen

// asignacion de variables
LEER altura = 10
LEER anchura = 10

// variables
numero = 10
nombre = "Alan"
nombreCompleto = "Alan Tello" // camelCase
nombre_completo = "Alan Tello" // snake_case
esValido = verdadero
notas = [10,20,15,8]

// variables con tipos de datos
Entero numero = 10
Caracter nombre = "Alan"
Caracter nombreCompleto = "Alan Tello" // camelCase
Caracter nombre_completo = "Alan Tello" // snake_case
Booleano esValido = verdadero
Array notas = [10,20,15,8]
```

**Entrada y salida**
Estas expresiones se utilizan para interactuar con el usuario o con otras fuentes de datos.

- Leer: Obtiene datos de entrada del usuario o de otra fuente.
- Escribir o Imprimir: Muestra datos o resultados al usuario.

```
LEER numero, edad, cantidad
ESCRIBIR "Hola Mundo"
ESCRIBIR "Ingrese un numero"
IMPRIMIR "El numero ingresado es:"
```

**Declaraciones y operaciones de variable**
Estas expresiones están relacionadas con la manipulación y definición de variables.

- Declarar: Utilizado para definir o declarar variables.
- Inicializar: Asigna un valor inicial a una variable.
- Conjunto: Define un conjunto de valores posibles para una variable.

```
// declarar
DEFINIR numero
Entero edad
Real salario

// inicializar
numero = 10
edad = 20
salario = 1200

// conjunto
Conjunto vocales = ["a","e","i","o","u"]
Conjunto diasLaborales = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]
```

**Estructuras de control de flujo**
Estas estructuras permiten dirigir el flujo del algoritmo basándose en decisiones o condiciones.

- Si... Entonces... Sino: Usada para ejecutar bloques de código basados en una condición booleana.

```
// Si... Entonces... Sino
INICIO
    ESCRIBIR "Ingrese su edad"
    LEER edad

    SI edad >= 18 ENTONCES
        Escribir "Usted es mayor de edad."
    SINO
        Escribir "Usted es menor de edad."
    FIN SI
FIN
```
Ejemplos en codigo:
[Javascript](javascript/0-si-entonces-sino.html) |
[Python]() |
[PHP]()

- Caso o Según: Permite la selección múltiple basada en el valor de una variable.
```
// Caso o Según
CASO <expresion> DE
    <opcion1>:
        <instruccion1>
    <opcion2>:
        <instruccion2>
    <opcionN>:
        <instruccionN>
    SINO
        <instruccion sino>
FIN CASO


SEGUN <expresion> HACER
    CASO <opcion1>:
        <intruccion1>
    CASO <opcion2>:
        <intruccion2>
    CASO <optionN>
        <intruccionN>
    SINO 
        <intruccion sino>
FIN SEGUN

// Ejemplos
INICIO
    LEER dia
    CASO dia DE
        "Lunes", "Martes", "Miércoles", "Jueves", "Viernes":
            ESCRIBIR "Es un día laboral."
        "Sábado", "Domingo":
            ESCRIBIR "Es fin de semana."
    FIN CASO
FIN


INICIO
    LEER dia
    SEGUN dia HACER
        CASO "Lunes":
        CASO "Martes":
        CASO "Miércoles":
        CASO "Jueves":
        CASO "Viernes":
            ESCRIBIR "Es un día laboral."
        CASO "Sábado":
        CASO "Domingo":
            ESCRIBIR "Es fin de semana."
    FIN SEGUN
FIN
```
Ejemplos en codigo:
[Javascript](javascript/0-caso-segun.html) |
[Python]() |
[PHP]()


**Bucles o ciclos**
Estos son usados para repetir un bloque de código múltiples veces.

- Mientras: Repite un bloque de código mientras una condición sea verdadera.
```
Inicio
    numero = 1
    Mientras numero <= 5 Hacer
        Escribir numero
        numero = numero + 1
    Fin Mientras
Fin
```
- Repetir... Hasta que: Ejecuta un bloque de código hasta que la condición especificada se cumpla.
```
Inicio
    Repetir
        Leer numero
        Escribir "Número ingresado:", numero
    Hasta Que numero == 0
Fin
```
- Para... Hacer: Ejecuta un bloque de código un número determinado de veces, que puede ser definido por un contador.
```
INICIO
    Para i = 1 Hasta 10 Hacer
        Escribir i
    Fin Para
FIN
```
- Cada o Para cada: Usado para iterar sobre los elementos de una colección o rango.
```
INICIO
    Lista numeros = [1, 2, 3, 4, 5]
    Para cada numero en numeros Hacer
        Escribir numero
    Fin Para Cada
FIN
```

**Operadores lógicos**
Usados para combinar múltiples condiciones o para negar una condición.

- And: Operador lógico para "y" lógico.
- Or: Operador lógico para "o" lógico.
- No: Operador lógico que invierte el resultado de una condición.

```
INICIO
    Leer edad
    Leer estudiante
    Si edad >= 18 Y No estudiante Entonces
        Escribir "Es mayor de edad y no es estudiante."
    Fin Si
FIN
```

**Ejercicios:**
1. Escribir un algoritmo que tome dos números ingresados por el usuario y muestre su suma.
```
// Análisis
// Entradas: Dos números (numero1, numero2)
// Salidas: La suma de los dos números
// Variables: numero1, numero2, suma

Inicio
    Escribir "Ingrese el primer número:"
    Leer numero1
    Escribir "Ingrese el segundo número:"
    Leer numero2
    suma = numero1 + numero2
    Escribir "La suma es", suma
Fin
```
2. Determinar si una persona es mayor de edad basándose en su edad ingresada por el usuario.
```
// Análisis
// Entradas: Edad del usuario (edad)
// Salidas: Mensaje indicando si el usuario es mayor de edad o no
// Variables: edad

Inicio
    Escribir "Ingrese su edad:"
    Leer edad
    Si edad >= 18 Entonces
        Escribir "Usted es mayor de edad."
    Sino
        Escribir "Usted es menor de edad."
    Fin Si
Fin
```

3. Calcular el factorial de un número entero no negativo ingresado por el usuario.
```
// Análisis
// Entradas: Un número entero no negativo (n)
// Salidas: El factorial del número
// Variables: n, factorial, i
Inicio
    Escribir "Ingrese un número entero no negativo:"
    Leer n
    Si n < 0 Entonces
        Escribir "Error: El número no puede ser negativo."
    Sino
        factorial = 1
        Para i = 1 Hasta n Hacer
            factorial = factorial * i
        Fin Para
        Escribir "El factorial de", n, "es", factorial
    Fin Si
Fin
```

4. Encontrar el número más pequeño en una lista de números ingresados por el usuario.
```
// Análisis
// Entradas: Cantidad de números a ingresar y los números mismos (cantidad, numeros[])
// Salidas: El número más pequeño de la lista
// Variables: cantidad, numero, minimo, i
Inicio
    Escribir "¿Cuántos números desea ingresar?"
    Leer cantidad
    Si cantidad <= 0 Entonces
        Escribir "Error: Debe ingresar al menos un número."
    Sino
        Escribir "Ingrese el primer número:"
        Leer numero
        minimo = numero
        
        Para i = 2 Hasta cantidad Hacer
            Escribir "Ingrese el siguiente número:"
            Leer numero
            Si numero < minimo Entonces
                minimo = numero
            Fin Si
        Fin Para
        
        Escribir "El número más pequeño es", minimo
    Fin Si
Fin
```

### Diagrama de flujo