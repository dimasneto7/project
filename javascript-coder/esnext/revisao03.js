// Object.value - pega os valores de um objeto
// Object.entries - vai dar a chave valor - um array de arrays
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(Object.keys(obj));

// Melhorias na Notação Literal
const nome = "Carla";
const pessoa = {
  nome,
  ola() {
    return "Ola pessoal";
  },
};

console.log(pessoa.nome, pessoa.ola());

// Class
// Para criar objetos apatir de uma classe, usar a palavra reservada (new)
// Da mesma forma em uma função construtora você pode criar novas instancias usando o operador (new)
class Animal {}
class Cachorro extends Animal {
  falar() {
    return "Au au";
  }
}

console.log(new Cachorro().falar());
