// não aceita repetição / não idexada
const times = new Set();
times.add("Santos");
times.add("São Paulo").add("Palmeiras").add("Vasco");
times.add("Flamengo");
times.add("Santos");

console.log(times);
console.log(times.size);
console.log(times.has("santos"));
console.log(times.has("Santos"));
times.delete("Flamengo");
console.log(times.has("Flamengo"));

const nomes = ["Raquel", "Lucas", "Julia", "Lucas"];
const nomesSet = new Set(nomes);
console.log(nomesSet);
