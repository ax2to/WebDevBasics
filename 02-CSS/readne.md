# CSS (Cascading Style Sheets)

Módulo 1: Introducción a CSS
- [¿Que es CSS?](#11-definición)
- [Sintaxis básica de CSS](#12-sintaxis-básica-de-css)
- [Formas de agregar CSS a un documento HTML](#13-formas-de-agregar-css-a-un-documento-html)
- [Estructura de una hoja de estilos](#14-estructura-de-una-hoja-de-estilos)

Módulo 2: Selectores y Especificidad
- [Tipos de selectores](#21-tipos-de-selectores)
- [Especificidad y herencia](#22-especificidad)

Módulo 3: Modelos de caja (Box Model)
- [Concepto de Box Model](#31-qué-es-el-modelo-de-caja)
- Propiedades relacionadas

Módulo 4: Colores y Fondos

    Asignación de colores:
        Propiedades color y background-color.
        Valores de color: nombres, RGB, RGBA, hexadecimales, HSL.
    Fondos en CSS:
        Imágenes de fondo con background-image.
        Repetición y posicionamiento de fondos (background-repeat, background-position).
        Propiedad background-size para imágenes escalables.

Módulo 5: Tipografía y Estilo de Texto

    Propiedades de texto:
        font-family, font-size, font-weight, font-style.
    Propiedades avanzadas:
        line-height, letter-spacing, text-align, text-transform.
    Uso de fuentes externas con @font-face y Google Fonts.

Módulo 6: Layouts (Diseño de Página)

    Float y Clear:
        Concepto de flotación y su uso en diseños simples.
    Positioning:
        Posicionamiento estático, relativo, absoluto y fijo.
        Z-index y capas de contenido.
    Flexbox:
        Introducción a Flexbox.
        Propiedades principales (display: flex, justify-content, align-items, flex-direction).
        Ejemplos de layouts responsivos simples con Flexbox.

Módulo 7: Grid Layout

    Introducción a CSS Grid.
        Diferencias entre Grid y Flexbox.
        Propiedades principales (grid-template-columns, grid-template-rows, gap, grid-area).
    Ejemplos prácticos de diseño con CSS Grid.

Módulo 8: Pseudo-clases y Pseudo-elementos

    Pseudo-clases comunes:
        :hover, :focus, :active, :nth-child().
    Pseudo-elementos:
        ::before, ::after y sus usos.
    Aplicaciones prácticas: Menús, botones y estilos dinámicos.

Módulo 9: Transiciones y Animaciones

    Introducción a las transiciones:
        Propiedad transition y sus subpropiedades.
        Transiciones en hover, cambios de color, etc.
    Animaciones en CSS:
        Uso de @keyframes para crear animaciones.
        Propiedad animation y sus opciones (duration, timing-function, delay).

Módulo 10: Medios Responsivos y Media Queries

    Introducción al diseño responsive.
        Uso de unidades relativas: %, em, rem, vw, vh.
    Media Queries:
        Sintaxis de @media.
        Ejemplos de diseño adaptable a diferentes tamaños de pantalla (móvil, tablet, desktop).

Módulo 11: Buenas Prácticas y Herramientas

    Convenciones de nomenclatura (BEM, SMACSS).
    Herramientas para depuración de CSS.
        Uso de DevTools en navegadores.
        Preprocesadores de CSS (introducción a SASS y LESS).

Módulo 12: Proyecto Final

    Creación de una página web simple:
        Aplicar todos los conceptos aprendidos.
        Crear una landing page o portfolio básico con estilos responsivos.

## **Módulo 1: Introducción a CSS**

### 1.1 Definición
CSS (Cascading Style Sheets) es el lenguaje utilizado para describir la presentación de un documento escrito en HTML o XML. Mientras que HTML proporciona la estructura del contenido, CSS se encarga de cómo ese contenido será mostrado al usuario, controlando aspectos visuales como colores, tipografía, espaciado y el diseño en general. 

**Ventajas de usar CSS**:
  - **Separación de contenido y diseño**: HTML se encarga de la estructura y CSS del diseño, lo que facilita la gestión y actualización del estilo de una página sin modificar el contenido.
  - **Reutilización del estilo**: Un mismo archivo CSS puede ser aplicado a múltiples páginas, lo que ahorra tiempo y esfuerzo.
  - **Facilidad para mantener el diseño**: Cambiar el estilo en un archivo CSS impacta en todas las páginas que lo utilizan, lo que hace que sea sencillo mantener una apariencia coherente.

### 1.2 Sintaxis básica de CSS

En CSS, la sintaxis está compuesta de **selectores**, **propiedades** y **valores**. 

**Estructura básica:**

```css
selector {
  propiedad: valor;
}
```

- **Selector**: Indica el elemento HTML al que se le aplicará el estilo.
- **Propiedad**: Define qué aspecto del elemento se va a modificar (ej. `color`, `font-size`, `margin`).
- **Valor**: Especifica el valor de la propiedad, por ejemplo, un color como `blue` o un tamaño como `16px`.

**Ejemplo básico:**

```css
p {
  color: blue;
  font-size: 16px;
}
```
En este ejemplo, el selector `p` selecciona todos los elementos `<p>` (párrafos) y les asigna el color azul y un tamaño de fuente de 16px.

### 1.3 Formas de agregar CSS a un documento HTML

Hay tres maneras principales de agregar CSS a un documento HTML:

1. **CSS en línea (inline)**: Se coloca directamente dentro del elemento HTML, utilizando el atributo `style`.

   ```html
   <p style="color: blue; font-size: 16px;">Este es un párrafo en azul</p>
   ```

   - **Ventajas**: Se puede aplicar estilos rápidamente a elementos individuales.
   - **Desventajas**: No es reutilizable y puede hacer que el código sea difícil de mantener.

2. **CSS interno (internal)**: Se coloca dentro de la etiqueta `<style>` en la sección `<head>` del documento HTML.

   ```html
   <head>
     <style>
       p {
         color: blue;
         font-size: 16px;
       }
     </style>
   </head>
   ```

   - **Ventajas**: Todo el CSS está contenido en el mismo archivo HTML.
   - **Desventajas**: Si tienes varias páginas, tendrás que repetir el mismo código CSS en cada archivo.

3. **CSS externo (external)**: Se utiliza un archivo CSS separado que se enlaza al HTML mediante la etiqueta `<link>`.

   ```html
   <head>
     <link rel="stylesheet" href="styles.css">
   </head>
   ```

   En el archivo `styles.css`, se puede colocar todo el código CSS:

   ```css
   p {
     color: blue;
     font-size: 16px;
   }
   ```

   - **Ventajas**: Facilita la reutilización del código y la separación de la presentación del contenido. Es más limpio y mantiene el HTML más simple.
   - **Desventajas**: Depende de un archivo externo, por lo que si no se carga correctamente, la página no tendrá estilo.

### 1.4 Estructura de una hoja de estilos

Una hoja de estilos está formada por una serie de reglas CSS. Cada regla consiste en un **selector** y un **bloque de declaraciones**. El bloque de declaraciones contiene una o más **declaraciones CSS**, que son pares de **propiedades** y **valores**.

**Ejemplo de una hoja de estilos básica:**

```css
body {
  background-color: #f0f0f0;
}

h1 {
  color: #333;
  font-family: Arial, sans-serif;
}

p {
  color: #666;
  line-height: 1.5;
}
```

En este ejemplo:
- El selector `body` selecciona el cuerpo de la página y le asigna un color de fondo.
- El selector `h1` afecta a los encabezados de nivel 1 y les asigna un color y una fuente.
- El selector `p` ajusta el color y la altura de línea de los párrafos.

### 1.5 Comentarios en CSS

En CSS, los comentarios son útiles para documentar el código, hacer anotaciones o explicar por qué se ha utilizado cierta regla.

Los comentarios en CSS se escriben entre `/*` y `*/`. Todo lo que esté dentro de estos delimitadores será ignorado por el navegador.

```css
/* Este es un comentario */
p {
  color: blue; /* Este párrafo será azul */
}
```

### 1.6 Buenas prácticas iniciales

- **Modularidad**: Divide el CSS en archivos más pequeños o módulos según la funcionalidad (por ejemplo, uno para la tipografía, otro para el layout).
- **Nombres descriptivos**: Usa nombres claros y significativos para las clases e IDs.
- **Reutilización de estilos**: Crea clases CSS que puedan ser reutilizadas en múltiples elementos.
- **Evitar estilos en línea**: Siempre que sea posible, utiliza estilos internos o externos para mantener el código limpio y separado.

---

## **Módulo 2: Selectores y Especificidad**

En este módulo aprenderemos a utilizar **selectores** en CSS para aplicar estilos a diferentes elementos de una página web. También exploraremos el concepto de **especificidad**, que determina qué reglas CSS se aplican cuando hay múltiples definiciones para un mismo elemento.

---

### 2.1 Tipos de selectores

Los selectores son la base de CSS, ya que determinan a qué elementos del HTML se aplicarán las reglas de estilo. Existen varios tipos de selectores básicos y avanzados que permiten una gran flexibilidad.

#### 2.1.1 Selectores básicos

1. **Selector de tipo (elemento o etiqueta)**:
   Selecciona todos los elementos de un tipo particular (etiqueta HTML).

   **Ejemplo**:
   ```css
   p {
     color: red;
   }
   ```
   Este código cambia el color de **todos los párrafos (`<p>`)** en la página a rojo.

2. **Selector de clase (`.clase`)**:
   Selecciona elementos con una clase específica. Una clase se puede usar en múltiples elementos.

   **Ejemplo**:
   ```css
   .highlight {
     background-color: yellow;
   }
   ```
   Esto aplica un color de fondo amarillo a cualquier elemento que tenga la clase `highlight`.

   **HTML asociado**:
   ```html
   <p class="highlight">Este párrafo está resaltado.</p>
   ```

3. **Selector de ID (`#id`)**:
   Selecciona un elemento con un ID específico. Los IDs deben ser únicos dentro de la página.

   **Ejemplo**:
   ```css
   #main-header {
     font-size: 24px;
   }
   ```
   Esto cambiará el tamaño de fuente del elemento con el ID `main-header`.

   **HTML asociado**:
   ```html
   <h1 id="main-header">Título principal</h1>
   ```

#### 2.1.2 Selectores combinados

1. **Selector de descendientes**:
   Selecciona los elementos que están anidados dentro de otros.

   **Ejemplo**:
   ```css
   div p {
     color: blue;
   }
   ```
   Cambia el color de todos los párrafos que están dentro de un `div` a azul.

2. **Selector de hijos (`>`)**:
   Selecciona los elementos que son **hijos directos** de otro elemento.

   **Ejemplo**:
   ```css
   div > p {
     color: green;
   }
   ```
   Cambia el color de todos los párrafos que son hijos directos de un `div`.

3. **Selector de hermanos adyacentes (`+`)**:
   Selecciona un elemento que está inmediatamente después de otro.

   **Ejemplo**:
   ```css
   h1 + p {
     color: gray;
   }
   ```
   Cambia el color del párrafo inmediatamente después de un `h1` a gris.

#### 2.1.3 Selectores avanzados

1. **Selector de atributo**:
   Selecciona los elementos que tienen un atributo específico.

   **Ejemplo**:
   ```css
   input[type="text"] {
     border: 1px solid black;
   }
   ```
   Esto aplica un borde a todos los `input` cuyo atributo `type` sea `"text"`.

2. **Selector universal (`*`)**:
   Selecciona todos los elementos del documento.

   **Ejemplo**:
   ```css
   * {
     margin: 0;
     padding: 0;
   }
   ```
   Esto elimina el margen y el relleno de todos los elementos en la página.

3. **Selector de grupo**:
   Permite aplicar el mismo estilo a varios selectores.

   **Ejemplo**:
   ```css
   h1, h2, h3 {
     font-family: Arial, sans-serif;
   }
   ```
   Esto aplicará la fuente `Arial` a todos los encabezados `h1`, `h2` y `h3`.

---

### 2.2 Especificidad

La **especificidad** es el mecanismo que CSS usa para determinar qué estilo aplicar cuando hay múltiples reglas que coinciden con el mismo elemento. Cuanto más específico sea un selector, mayor será su prioridad.

#### 2.2.1 Cómo funciona la especificidad

Cada tipo de selector tiene un peso específico. Los selectores de mayor peso tienen prioridad sobre los de menor peso.

- **Selectores de ID** (`#id`): tienen la mayor especificidad.
- **Selectores de clase, atributos y pseudo-clases** (`.clase`, `[attr=value]`, `:hover`): tienen una especificidad media.
- **Selectores de tipo y pseudo-elementos** (`elemento`, `::before`): tienen la menor especificidad.
- **Selectores universales** (`*`), combinadores y selectores descendientes: tienen especificidad muy baja.

#### 2.2.2 Ejemplo de especificidad:

```css
/* 1. Menor especificidad */
p {
  color: blue;
}

/* 2. Mayor especificidad (porque usa una clase) */
.highlight {
  color: green;
}

/* 3. Mayor especificidad aún (porque usa un ID) */
#special-paragraph {
  color: red;
}
```

**HTML asociado**:
```html
<p id="special-paragraph" class="highlight">Este párrafo tiene múltiples selectores aplicados.</p>
```

En este caso, aunque el párrafo tiene tanto una clase `highlight` como un ID `special-paragraph`, prevalece el color rojo del ID, porque su especificidad es mayor.

#### 2.2.3 El uso de `!important`

El modificador `!important` permite forzar que una regla sea aplicada ignorando la especificidad. Sin embargo, su uso debe ser limitado, ya que puede hacer que el código sea difícil de mantener.

**Ejemplo**:

```css
p {
  color: blue !important;
}

#special-paragraph {
  color: red;
}
```

En este caso, aunque el ID `special-paragraph` tiene una especificidad mayor, el color azul con `!important` prevalecerá.

---

## **Módulo 3: Modelos de Caja (Box Model)**

El modelo de caja es uno de los conceptos fundamentales de CSS, ya que todos los elementos HTML se representan como cajas rectangulares en el navegador. Cada caja tiene varios componentes (contenido, relleno, bordes y márgenes) que determinan el aspecto y la distribución de los elementos en una página.

### 3.1 ¿Qué es el Modelo de Caja?

El **Modelo de Caja** (Box Model) es un esquema que describe la estructura de un elemento HTML en términos de sus áreas internas y externas. Cada elemento se compone de las siguientes partes:

1. **Contenido**: El área donde se muestra el contenido, como texto o imágenes.
2. **Padding (relleno)**: El espacio entre el contenido y el borde.
3. **Borde (border)**: El contorno que rodea el contenido y el relleno.
4. **Margin (margen)**: El espacio fuera del borde, separando el elemento de otros.

**Representación gráfica del Box Model**:

```
+-------------------------------+
|           Margin              |
| +---------------------------+ |
| |          Border           | |
| | +-----------------------+ | |
| | |       Padding         | | |
| | | +-------------------+ | | |
| | | |    Content        | | | |
| | | +-------------------+ | | |
| | +-----------------------+ | |
| +---------------------------+ |
+-------------------------------+
```

### 3.2 Propiedades del Box Model

Cada parte del modelo de caja tiene sus propias propiedades CSS que se pueden ajustar para modificar el tamaño y el espaciado de los elementos.

#### 3.2.1 **Propiedades del contenido**

- **width**: Establece el ancho del contenido del elemento.
  ```css
  div {
    width: 300px;
  }
  ```

- **height**: Establece la altura del contenido del elemento.
  ```css
  div {
    height: 200px;
  }
  ```

#### 3.2.2 **Propiedades del padding (relleno)**

El **padding** crea un espacio entre el contenido y el borde del elemento. Puede ser uniforme o especificado para cada lado.

- **padding (todos los lados)**:
  ```css
  div {
    padding: 20px;
  }
  ```

- **padding específico por lado**:
  ```css
  div {
    padding-top: 10px;
    padding-right: 15px;
    padding-bottom: 10px;
    padding-left: 15px;
  }
  ```

#### 3.2.3 **Propiedades del border (borde)**

El **border** rodea el contenido y el relleno de un elemento. Puedes especificar su ancho, estilo y color.

- **border (definir todos los atributos a la vez)**:
  ```css
  div {
    border: 2px solid black;
  }
  ```

- **border separado por lados**:
  ```css
  div {
    border-top: 2px solid red;
    border-bottom: 1px dashed green;
  }
  ```

#### 3.2.4 **Propiedades del margin (margen)**

El **margin** crea espacio fuera del borde del elemento, separándolo de otros elementos. Al igual que el padding, se puede especificar para todos los lados o individualmente.

- **margin (todos los lados)**:
  ```css
  div {
    margin: 20px;
  }
  ```

- **margin específico por lado**:
  ```css
  div {
    margin-top: 10px;
    margin-right: 15px;
    margin-bottom: 10px;
    margin-left: 15px;
  }
  ```

- **auto margin**: Utilizado frecuentemente para centrar elementos.
  ```css
  div {
    margin: 0 auto;
  }
  ```

---

### 3.3 Box Sizing (Tamaño de la caja)

El comportamiento predeterminado del modelo de caja en CSS es que el ancho y alto que defines solo afecten al **contenido**, mientras que el padding y el borde se suman a estas dimensiones, lo que a veces puede dar resultados inesperados en el diseño.

#### 3.3.1 Propiedad `box-sizing`

- **box-sizing: content-box** (comportamiento predeterminado): El `width` y `height` solo se aplican al contenido, no incluyen el padding ni el borde.
  
  ```css
  div {
    box-sizing: content-box; /* Predeterminado */
    width: 300px;
    padding: 20px;
    border: 10px solid black;
  }
  ```
  En este caso, el ancho total del `div` será: `300px (ancho del contenido) + 20px (padding izquierdo) + 20px (padding derecho) + 10px (borde izquierdo) + 10px (borde derecho) = 360px`.

- **box-sizing: border-box**: El `width` y `height` incluyen el padding y el borde. Es más fácil controlar el tamaño total del elemento.

  ```css
  div {
    box-sizing: border-box;
    width: 300px;
    padding: 20px;
    border: 10px solid black;
  }
  ```
  En este caso, el ancho total del `div` será exactamente `300px`, ya que el padding y el borde están incluidos en el cálculo.

---

### 3.4 Ejemplos prácticos del Box Model

**Ejemplo 1: Caja con todos los componentes (margen, borde, padding, contenido)**

```css
div {
  width: 200px;
  height: 100px;
  padding: 20px;
  margin: 30px;
  border: 5px solid blue;
  background-color: lightgray;
}
```

**HTML asociado:**

```html
<div>Contenido de ejemplo</div>
```

En este ejemplo:
- El ancho del contenido es `200px`, pero el tamaño total de la caja es más grande debido al padding, borde y margen.
- El `padding` agrega espacio dentro de la caja alrededor del contenido.
- El `border` rodea la caja, añadiendo más al tamaño total.
- El `margin` separa la caja de otros elementos de la página.

**Ejemplo 2: Uso de `box-sizing: border-box` para controlar el tamaño total**

```css
div {
  width: 300px;
  padding: 20px;
  border: 10px solid green;
  box-sizing: border-box;
}
```

**HTML asociado:**

```html
<div>Contenido con box-sizing: border-box</div>
```

En este ejemplo:
- El ancho total de la caja será exactamente `300px`, ya que el `padding` y el `border` están incluidos en el cálculo debido a `box-sizing: border-box`.

---

## **Módulo 4: Colores y Fondos**

El manejo de colores y fondos en CSS es crucial para la estética de una página web. Este módulo te enseñará a aplicar colores de manera efectiva a texto y elementos, así como a personalizar los fondos con colores, imágenes y patrones. 

---

### 4.1 Asignación de Colores en CSS

CSS ofrece una variedad de formas de asignar colores tanto al texto como a los fondos. Los colores se pueden definir de varias maneras:

#### 4.1.1 Propiedad `color`

La propiedad `color` se utiliza para cambiar el color del texto de un elemento.

**Ejemplo**:
```css
p {
  color: red;
}
```
Este código cambia el color de todos los párrafos (`<p>`) a rojo.

#### 4.1.2 Formas de definir colores

1. **Nombres de colores**: Se pueden usar algunos nombres de colores predefinidos como `red`, `blue`, `green`, etc.

   **Ejemplo**:
   ```css
   p {
     color: blue;
   }
   ```

2. **Colores hexadecimales**: Usan una combinación de seis caracteres, que representan los valores de rojo, verde y azul (RGB). Van precedidos por el símbolo `#`.

   **Ejemplo**:
   ```css
   p {
     color: #3498db; /* Azul claro */
   }
   ```

3. **RGB (Red, Green, Blue)**: Define el color usando valores RGB entre 0 y 255.

   **Ejemplo**:
   ```css
   p {
     color: rgb(52, 152, 219); /* Azul claro */
   }
   ```

4. **RGBA**: Es similar a RGB, pero añade un canal alfa para definir la opacidad del color. El valor de alfa va de 0 (completamente transparente) a 1 (completamente opaco).

   **Ejemplo**:
   ```css
   p {
     color: rgba(52, 152, 219, 0.5); /* Azul claro con 50% de opacidad */
   }
   ```

5. **HSL (Hue, Saturation, Lightness)**: Define los colores según su tono, saturación y luminosidad.

   **Ejemplo**:
   ```css
   p {
     color: hsl(207, 70%, 53%); /* Azul claro */
   }
   ```

6. **HSLA**: Similar a HSL, pero incluye un canal alfa para la transparencia.

   **Ejemplo**:
   ```css
   p {
     color: hsla(207, 70%, 53%, 0.5); /* Azul claro con 50% de opacidad */
   }
   ```

---

### 4.2 Propiedad `background-color`

La propiedad `background-color` define el color de fondo de un elemento. Funciona de manera similar a `color`, pero se aplica al fondo en lugar del texto.

**Ejemplo**:
```css
div {
  background-color: #f39c12; /* Naranja */
}
```
Este código establece el color de fondo de todos los `div` a un tono naranja.

---

### 4.3 Imágenes de Fondo (`background-image`)

La propiedad `background-image` permite establecer una imagen como fondo de un elemento. La sintaxis es simple, pero hay muchas opciones para ajustar cómo se muestra la imagen.

#### 4.3.1 Establecer una imagen de fondo

**Ejemplo**:
```css
div {
  background-image: url('imagen.jpg');
}
```
Este código coloca la imagen `imagen.jpg` como fondo del elemento `div`.

#### 4.3.2 Propiedades complementarias para `background-image`

1. **background-repeat**: Controla si la imagen de fondo debe repetirse.

   - **Valores**:
     - `repeat` (valor predeterminado): Repite la imagen horizontal y verticalmente.
     - `no-repeat`: La imagen no se repite.
     - `repeat-x`: Solo se repite horizontalmente.
     - `repeat-y`: Solo se repite verticalmente.

   **Ejemplo**:
   ```css
   div {
     background-image: url('imagen.jpg');
     background-repeat: no-repeat;
   }
   ```

2. **background-position**: Define la posición de la imagen dentro del elemento.

   - **Valores**:
     - `center`: Centra la imagen.
     - `top`, `bottom`, `left`, `right`: Posiciona la imagen en los bordes del elemento.
     - También se pueden usar valores en porcentajes o unidades (`px`).

   **Ejemplo**:
   ```css
   div {
     background-image: url('imagen.jpg');
     background-position: center;
   }
   ```

3. **background-size**: Establece el tamaño de la imagen de fondo.

   - **Valores**:
     - `auto`: Mantiene el tamaño original de la imagen.
     - `cover`: Escala la imagen para que cubra todo el elemento, manteniendo la proporción.
     - `contain`: Escala la imagen para que sea completamente visible dentro del elemento.
     - También se pueden usar valores exactos como `100px 50px` o porcentajes.

   **Ejemplo**:
   ```css
   div {
     background-image: url('imagen.jpg');
     background-size: cover;
   }
   ```

4. **background-attachment**: Define si la imagen de fondo se desplaza con el contenido o se queda fija.

   - **Valores**:
     - `scroll`: La imagen de fondo se desplaza con el contenido (valor predeterminado).
     - `fixed`: La imagen de fondo se queda fija mientras el contenido se desplaza.
     - `local`: La imagen se desplaza solo dentro del contenedor si este tiene scroll.

   **Ejemplo**:
   ```css
   div {
     background-image: url('imagen.jpg');
     background-attachment: fixed;
   }
   ```

#### 4.3.3 Uso de múltiples imágenes de fondo

Puedes definir múltiples imágenes de fondo para un mismo elemento. Estas se apilan en el orden en que se declaran.

**Ejemplo**:
```css
div {
  background-image: url('imagen1.jpg'), url('imagen2.png');
  background-position: center, top left;
  background-size: cover, contain;
}
```
En este ejemplo, `imagen1.jpg` se colocará en el centro y cubrirá todo el `div`, mientras que `imagen2.png` se posicionará en la esquina superior izquierda y se ajustará dentro del contenedor.

---

### 4.4 Gradientes como fondos

CSS permite crear **gradientes** (transiciones suaves entre dos o más colores) sin necesidad de imágenes externas. Hay dos tipos principales de gradientes en CSS: **lineales** y **radiales**.

#### 4.4.1 Gradiente lineal (`linear-gradient`)

Crea una transición de colores a lo largo de una línea recta.

**Ejemplo básico**:
```css
div {
  background: linear-gradient(to right, red, blue);
}
```
Este código crea un gradiente que va de rojo a azul, de izquierda a derecha.

#### 4.4.2 Gradiente radial (`radial-gradient`)

Crea una transición de colores en forma de círculo o elipse.

**Ejemplo básico**:
```css
div {
  background: radial-gradient(circle, red, blue);
}
```
Esto crea un gradiente que comienza desde el centro con color rojo y se desvanece en azul hacia los bordes.

#### 4.4.3 Gradientes avanzados

1. **Múltiples colores**:
   Los gradientes pueden tener más de dos colores.

   **Ejemplo**:
   ```css
   div {
     background: linear-gradient(to right, red, yellow, green);
   }
   ```

2. **Control de posición de los colores**:
   Puedes especificar en qué punto del gradiente debe aparecer cada color.

   **Ejemplo**:
   ```css
   div {
     background: linear-gradient(to right, red 0%, yellow 50%, green 100%);
   }
   ```

---

### 4.5 Buenas prácticas al usar colores y fondos

1. **Contraste adecuado**: Asegúrate de que el color del texto y el fondo tengan suficiente contraste para que el contenido sea legible. Puedes usar herramientas como Contrast Ratio para verificar el contraste.
2. **Evitar fondos molestos**: No sobrecargues los fondos con imágenes demasiado complejas que dificulten la lectura del contenido.
3. **Uso moderado de gradientes**: Los gradientes deben mejorar el diseño sin distraer demasiado al usuario.
4. **Imágenes optimizadas**: Siempre utiliza imágenes de fondo optimizadas para reducir el tiempo de carga de la página.

---
