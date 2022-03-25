# javascriptDOM

Javascript practice and manipulation with of DOM.

# Platzi Course

> Javascript Course with Platzi

- [Platzi](https://platzi.com/home)

> MDN ( DOM)

- [MDN_Library](https://developer.mozilla.org/es/)

> CAn I Use

- [Can I Use](https://caniuse.com/)

> API DOM = WEB Api

- [Rapid_API](https://rapidapi.com/hub)
- [Axios_API](https://axios-http.com/)
- [API_GitHub](https://github.com/topics/api)

## NodeLists vs Array

> NodeLists vs Array

- La diferencia entre NodeList y Array, es que el NodeList carece de métodos que si están disponibles en los Arrays, pero podemos pasar esto fácilmente usando el operador de propagación.
- Recomendación importante cada vez que obtengamos un NodeList pásemelo a Array ya que los motores de javascript como el motor V8 de google están mas optimizados para Arrays que para NodeList.

## Crear y Agregar Nodos

> Create Nodos DOM

- Al decir “crear nodos” nos referimos a crear elementos dentro de nuestro DOM. Para ello podemos hacer uso de:

> createElement

- createElement: Para crear una etiqueta HTML:

  > createTextNode

- createTextNode: Para crear un texto:

  > parentElement.appendChild()

- parentElement.appendChild(): Agrega un hijo al final algún elemento

  > parentElement.append()

- parentElement.append(): Es la evolución de appendChild, podemos agregar más de un nodo, puedes agregar texto y… no es soportado por Internet Explorer

  > parentElement.insertBefore():

- parentElement.insertBefore(): Inserta nodos antes del elemento que le pasemos como referencia, este nodo de referencia tiene que ser un hijo DIRECTO del padre

  > parentElement.insertAdjacentElement():

- parentElement.insertAdjacentElement(): Inserta nodos según las opciones que le pasemos:
  beforebegin: Lo inserta antes del nodo
  afterbegin: Lo inserta despues del nodo
  beforeend: Lo inserta antes de donde finaliza el nodo
  afterend: Lo inserta después de donde finaliza el nodo

## Otras formas de agregar

> node.outerHTML

- Sirve para leer HTML para leer HTML

> node.innerHTML:

- Sirve para escribir HTML

> Alert

- hack: Cuando en el inspector de elementos seleccionas un elemento y en la consola escribes $0, este te devolverá el elemento tal como si lo hubieses seleccionado con document.querySelector().
  .
  Aquí les dejo el playground que usó el profesor para hacer las pruebas:
  https://codepen.io/jonalvarezz/pen/OJXeNab?editors=0110
  .
  El problema con estas formas de inserciones es que permiten la inserción XSS, es decir, código maligno, y cualquier usuario programador malicioso podría meter scripts molestos, imagina que cada que un usuario llegue a tu página le salga un alert… ¡Sería catastrófico! Siempre sanitiza (remover caracteres especiales) los inputs de tus usuarios

  ## Atributos y propiedades

  > Atributos y propiedades

- Básicamente un atributo ( al inicio) es el estado inicial en nuestro HTML, es HTML solo podemos escribir atributos porque es el estado inicial con el que se renderizan y una propiedad es la variable que podemos cambiar a lo largo de la ejecución del programa mediante JavaScript, es decir, podemos acceder a dichos atributos y cambiarlo, haciendo que sean propiedades, aquí un poco más de información sobre ello.

- Las Propiedades pueden cambiar en cualquier momento.
- Lo genial de JavaScript es que podemos cambiarlas de forma dinámica. Recordemos que JavaScript son en su mayoría objetos, por lo que los nodos HTML dentro de JavaScript son representados como objetos. Teniendo eso en cuenta, podemos acceder a cualquier atributo de dichos nodos desde HTML y cambiar sis propiedades

- // Al seleccionar el nodo HTML, JavaScript lo convierte en un objeto!
  const input = document.querySelector("input")

- // Y of course, podemos modificarlo como cualquier otro objeto de JavaScript:
  input.placeholder = "Escribe algo"
  input.value = 2
  input.type = "number"

## Eliminar nodos

> Eliminar nodos

> parentElement.removeChild()
> docuement.remove(): Es la evolución de removeChild
> document.replaceChild()

- Existen 3 formas de eliminar nodos en el DOM

- Remove Child (1)

Podemos eliminar un nodo según a un método que proviene del padre y pasamos la referencia a eliminar

- padre.removeChild(nodoAEliminar)

- Remove (2)

Es la evolución de remove child
No esta soportado en internet explorer

- nodoAEliminar.remove()

- Replace Child (3)

Nos permite remplazar un nodo

- padre.replaceChild(nuevoNodo, aRemplazar)
- : Reemplaza un nodo (en pocas palabras lo elimina y mete otro)

## Operaciones en lote

- ¿Qué es el Spread Operator?
  Si te causa duda esto, no te preocupes, aquí te lo explico:

- El spread operator trabaja con arreglos y objetos, cuando lo pasamos en la llamada a una función, lo que hará es deconstruir ese arreglo y lo pasará como parámetros individuales para la función… aquí un ejemplo para que me entiendas:

- Esto es muy útil cuando tenemos demasiados valores, recuerda, mientras menos modifiques el DOM, más eficiente será tu programa, y recordemos que tenemos a append() que nos permite insertar múltiples elementos en el DOM en una sola llamada, ¡aprovechémoslo!

- Dato curioso:
- En algunos frameworks de JavaScript como Vue, existe una cosa llamada el Virtual DOM, no es más que un objeto JavaScript que simula al DOM real, al menos en Vue, esto tiene un proxy que está observando por cambios en ese Virtual DOM para reaccionar y renderizar solo una pequeña parte en el DOM (en lugar de reescribirlo completamente)

![](https://static.platzi.com/media/user_upload/Ee3PlLlUMAARqT5-3e39919b-9cc1-426f-881e-9a3b2df38c72.jpg)

## fundamentos-node-platzi

> Curso de fundamentos de NodeJS en Platzi
> Documentation Node Js

- [Node Js](https://nodejs.org/api/globals.html)
  > Globals
- Los modulos globales son módulos del core.
- [Globales](https://nodejs.org/api/globals.html)

  ![](https://static.platzi.com/media/user_upload/global-fa55c760-fa57-43f2-a670-a86345c49c42.jpg)

> Fyle System

-[](https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_file_system)

- NOS PERMITE ENTRAR A ARCHIVOS DE NUESTRO SISTEMA.
- Actualmente tanto la version LTS como current agregaron la API de File System basado en promesas 😃
- El file system provee una API para interactuar con el sistema de archivos cerca del estándar POSIX.
  POSIX es el estándar para interfaces de comando y shell, las siglas las significan: “Interfaz de sistema operativo portátil” la X de POSIX es por UNIX.

- El file system nos permite acceder archivo del sistema, leer, modificar., escribirlos, es muy útil para precompiladores, para lo que requiera hacer grabados de disco, o bases de datos en node requieren un uso intensivo de Node.Todo lo que hagamos con modulos por buenas prácticas son asincronos, pero tienen una version sincrona no recomendada pues pordría bloquear el event loop con más facilidad.

Para ver más sobre la documentación de FileSystem:

Ejemplo de uso de forma nativa:

![](https://static.platzi.com/media/user_upload/carbon%20%281%29-f13190cd-86f1-4d80-b164-770d19f26bc0.jpg)

> File System Js
> ![](https://static.platzi.com/media/user_upload/file-system-ad3732c3-b706-4019-9287-44ca5a42ad3f.jpg)

> Main Js
> ![](https://static.platzi.com/media/user_upload/main-1508cf5a-0c4a-4e20-aaae-987b004f8e6b.jpg)

# MIT LICENSE:

> MIT License

MIT License

Copyright (c) 2022 Chris_Velázquez04

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
