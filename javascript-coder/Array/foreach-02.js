Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
    // o valor atual / o indice atual / o array completo
  }
};

const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

aprovados.forEach2(function (nome, indice) {
  console.log(`${indice + 1} - ${nome}`);
});
