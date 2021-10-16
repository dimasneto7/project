setTimeout(() => {
  console.log("setTimeout data");
}, 1);

const promise = new Promise((resolve) => {
  resolve("promise data");
});

promise.then((data) => console.log(data));

for (let i = 0; i <= 10000; i++) {
  console.log(i);
}

// a promise tem o resolve e o reject
// resolve - sucesso | reject - erro
// Design Pattern Observer
// quando chamar o resolve... o then será modificado
// nesse caso a promise é executada primeiro que o setTimeout
