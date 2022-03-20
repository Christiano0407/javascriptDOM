const onePlay = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve(`Play the Game!`), 2000)
      : reject(new Error(`Erros the gamme`));
  });
};

const twoPlay = async () => {
  const threePlay = await onePlay();
  console.log(threePlay);
};

twoPlay();

const playStation = () => {
  return new Promise((resolve, reject) => {
    true
      ? resolve("Tienes permiso de jugar")
      : reject(new Error("No!, NO TIENES PERMISO"));
  });
};

const never = async () => {
  const neverGamer = await playStation();
  console.log(neverGamer);
};

never();

// =============================================================>
const doAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve(`This is the true!`), 2000)
      : reject(new Error(`Error, problem!`));
  });
};

const doAwait = async () => {
  const something = await doAsync();
  console.log(something);
};

console.log(`BEFORE`);
doAwait();
console.log(`AFTER`);

//TWO:
const doOne = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve(`Async is true!!`);
      }, 3000);
    } else {
      const error = new Error(`Problems!`);
      reject(error);
    }
  });
};

const doTwo = async () => {
  const doThree = await doOne();
  console.log(doThree);
};

//reconocer los errores:
/* const doTwo = async () => {
    try{
    const doThree = await doOne()
    console.log(doThree);
    }catch(error){
    console.error(error);
    }
} */

doTwo();
