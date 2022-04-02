//** ==== API Promise One Exercise =====  */
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
//** ==== Exercise Two Promise ======================>  */

/* const promise = new Promise((resolve, reject) => {
  let isTrue = true;

  if (isTrue) {
    setTimeout(() => {
      resolve("Promise Complete");
    }, 2000);
  } else {
    reject("Error Promise");
  }
});

promise
  .then((response) => console.log(response))
  .catch((error) => console.log(error)); */

//** API Promesa  */
//const URL = "https://rickandmortyapi.com/api/character/?page=19";
//** Conectar al servidor  */
/* const container = document.querySelector("#container");

const addApi = () => {

    fetch("https://rickandmortyapi.com/api/character/") 
    .then((response) => response.json())
    .then((data) =>  {
        container.innerText =  JSON.stringify(data); 
    })
     .catch((err) => console.error(new Error(err));
};
 */

//** ==== 2ND Parameter Of FETCH is a Object ====  */

/* const getDataApiJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const jsonJokeData = await response.json();
  console.log(jsonJokeData.joke);
};

getDataApiJoke(); */

//** =====  Text Plan == Pasar a un texto Plano (ya no en Json) ====  */
/* const getDataApiJoke = async () => {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "text/plain",
      },
    });

    const textJokeData = await response.text();
    console.log(textJokeData.joke);
  } catch (error) {
    console.log(error);
  }
};

getDataApiJoke(); */

/* const getDataApiJoke = async () => {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    const jsonJokeData = await response.json();
    console.log(jsonJokeData);
  } catch (error) {
    console.log(error);
  }
};

getDataApiJoke();
 */
