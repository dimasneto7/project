// Arrow functions
const soma = (a, b) => a + b;
console.log(soma(2, 3));

// Arrow functions (this)
// o this de uma função arrow está associado ao local onde a função foi escrita
// em uma função normal, o this aponta para global
// em uma função normal o this pode variar de acordo com a chamada da função
// ou pode mudar se mudar o contexto através do bind ou através de um call ou aply
const lexico1 = () => console.log(this === exports);

const lexico2 = lexico1.bind({});
lexico1();
lexico2();

// parametro default
function log(texto = "Node") {
  console.log(texto);
}

log();
log("Sou mais forte");

// operador rest
function total(...numeros) {
  let total = 0;
  numeros.forEach((n) => (total += n));
  return total;
}
console.log(total(2, 3, 4, 5));
