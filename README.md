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
