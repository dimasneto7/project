import { resolveHref } from "next/dist/next-server/lib/router/router";

export default function questao(req, res) {
  if (req.method === "GET") {
    const id = req.query.id;
    res.status(200).json({
      id,
      enunciado: "Qual é a sua cor preferida?",
      respostas: ["Branca", "Vermelha", "Amarela", "Verde"],
    });
  } else {
    resolveHref.status(405).send();
  }
}
