const pilotos = ["Senna", "Prost", "Rubens", "Piquet"];
pilotos.pop(); // remove o último elemento do array

console.log(pilotos);

pilotos.push("Hamilton");
console.log(pilotos);

pilotos.shift(); // remove p primeiro elemento do array
console.log(pilotos);

pilotos.unshift("Massa"); // acrescenta
console.log(pilotos);

// splice pode adicionar o remover elementos dentro de um array

// adicionar
pilotos.splice(4, 0, "Berger", "Schummaker", "Alesi", "Vellenueve"),
  console.log(pilotos);

// remover
pilotos.splice(3, 1);
console.log(pilotos);

// slice... retorna um novo array
const algunsPilotos = pilotos.slice(2);
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4); // do indice 1 ao indice 4
console.log(algunsPilotos2);
