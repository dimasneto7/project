console.log(this === global); // false.. pq aponta para module.exports.
console.log(this === module); // false.. pq this é um objeto e a referencia de module.exports.

console.log(this === module.exports); // true
console.log(this === exports); // true

function logThis() {
  console.log("Dentro de uma função...");
  console.log(this === exports); // false
  console.log(this === module.exports); // false
  console.log(this === global); // true
}

logThis();

// this dentro de uma função.. é global
// this fora da funçao... ou seja, dentro de um module... é module.exports.
