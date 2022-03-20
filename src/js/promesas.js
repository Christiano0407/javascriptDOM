/*PROMESAS*/

const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Muy bien!");
    } else {
      reject(`Esto, está mal!`);
    }
  });
};

somethingWillHappen()
  .then((Response) => console.log(Response))
  .catch((error) => console.error(error));

/*Two*/
const somethingHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve(`true!`);
      }, 2000);
    } else {
      const error = new Error(`NO!!!`);
      reject(error);
    }
  });
};

somethingHappen2()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

/*Ejecutar todas las promesas*/

Promise.all([somethingWillHappen(), somethingHappen2()])
  .then((response) => {
    console.log(`Array`, response);
  })
  .catch((err) => {
    console.error(err);
  });
