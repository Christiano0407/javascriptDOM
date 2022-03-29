/* const urlApi = "https://rickandmortyapi.com/api";
console.log(urlApi);

async function fetchData() {
  const response = await fetch(urlApi),
    data = await response.json();
  allItem = [];

  data.forEach((item) => {
    const image = document.createElement("img");
    const title = document.createElement("h2");

    const container = document.createElement("div");

    container.append(image, title);

    allItem.push(container);
  });

  document.body.append(...allItem);
}

fetchData();
 */

//** API Promesa  */
const URL = "https://rickandmortyapi.com/api/character/?page=19";
//** Conectar al servidor  */

/* window
  .fetch(URL)
  .then((response) => response.json())
  .then((responses) => {
    responses.data.forEach((item) => {
      const image = document.createElement("img");
      document.body.appendChild(image);
      const title = document.createElement("h2");

      const conteiner = document.createElement("div");
    });
  });
 */
