let aprovados = new Array("Bia", "Ana", "Carlos");
console.log(aprovados);

aprovados = ["Bia", "Ana", "Carlos"];
console.log(aprovados[0]);

aprovados[3] = "Paulo";
console.log(aprovados);

aprovados.push("Dimas");
console.log(aprovados);
console.log(aprovados.length);

aprovados[9] = "Rafael";
console.log(aprovados.length);
console.log(aprovados);
console.log(aprovados[8] === undefined);

aprovados.sort();
console.log(aprovados);

delete aprovados[1];
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"];
aprovados.splice(1, 1, "Elemento2", "Elemento3");
console.log(aprovados);
