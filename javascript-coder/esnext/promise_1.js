// quando vc cria uma nova Promise - vc cria um objeto
let p = new Promise(function (cumprirPromessa) {
  cumprirPromessa(["Ana", "Bia", "Gui", "Pedro"]);
})
  .then((valor) => valor[0])
  .then((primeiro) => primeiro[0])
  .then((letra) => letra.toLowerCase())
  .then((letraMinuscula) => console.log(letraMinuscula));
