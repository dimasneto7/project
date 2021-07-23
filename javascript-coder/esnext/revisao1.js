// let e const

// let tem escopo de bloco
// var tem escopo global

{
  var a = 2;
  let b = 3;
  console.log(b); // não pega fora do escopo
}
console.log(a); // pega pois a é global

// Template String
const produto = "iPad";
console.log(`${produto} é caro!`);

// Destructuring
const [l, e, ...tras] = "Cod3r";
console.log(l, e, tras);

const [x, y] = [1, 2];
console.log(x, y);

const { idade, nome } = { nome: "Ana", idade: 9 };
console.log(idade, nome);
