//** == Try / Catch ==> Sabemos que "algo" puede romperse ======= */
function serompe() {
  return 5 + A;
}
//serompe(); //**ERROR => A */

//** == TRY / CATCH ==  */
try {
  serompe();
} catch (err) {
  //console.error("Sorry!");
  console.error(err);
}
