const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
];

const paraObjeto = (json) => JSON.parse(json); // transformando de json para objeto
const apenasPreco = (produto) => produto.preco;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado);
