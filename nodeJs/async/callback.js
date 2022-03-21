function callback(micalback) {
  console.log("Soy un calback!");
  setTimeout(function () {
    console.log("Sincronía calback");
    micalback();
  }, 1000);
}
console.log("Iniciamos proceso");
callback(function () {
  console.log("Terminamos proceso");
});
