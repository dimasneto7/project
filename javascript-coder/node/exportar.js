console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1; // o 'a' ficará visível fora do arquivo
exports.b = 2; // o 'b' ficará visível fora do arquivo
module.exports.c = 3; // o 'c' ficará visível

exports = null;
console.log(module.exports);

module.exports = { publico: true };
