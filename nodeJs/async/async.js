const playOne = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Play Now"), 1500)
      : reject(new Error("Error for Ever"));
  });
};

const playGame = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("I´m Playing  Fifa 2023"), 2000)
      : reject(new Error("Error Play The Game!"));
  });
};

const playTwo = async () => {
  try {
    const playThree = await playOne();
    const gamePlay = await playGame();
    console.log(playThree);
    console.log(gamePlay);
  } catch (error) {
    console.log(error);
  }
};
playTwo();
