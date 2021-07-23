const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./upload");
  },
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage }).single("arquivo");

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.end("Ocorreu um erro.");
    }

    res.end("Concluído com sucesso.");
  });
});

app.listen(8080, () => console.log("Executando..."));

// responsável por fazer o body do parser da requizição
// quando fizer um request... e se mandar dados nesse request
// aí ele vai interpretar esses dados e deixar esses dados prontos
// prontos para serem manipulados dentro desse arquivo

// middleware é uma função que vai ser executada quando uma determinada requisição chegar
// pode ser uma middleware aplicado para um determinado padrão de url
// ou para todas as requisições que chegarem ao servidor

// multer - para interpretar o formulario que veio arquivo do upload
