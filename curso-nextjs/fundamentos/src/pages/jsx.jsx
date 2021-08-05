import Layout from "../components/Layout";

export default function Jsx() {
  const a = 4;
  const b = 3;

  const obj = { nome: "John", idade: 30 };

  const subtitulo = <h2>O subtítulo é esse aqui</h2>;

  function novosubtitulo() {
    return <h3>{"o novo subtítulo é muito legal".toUpperCase()}</h3>;
  }

  return (
    <Layout>
      <div>
        <h1>JSX é um conceito central</h1>
        {subtitulo}
        {novosubtitulo()}
        {a * b}
        <p>{JSON.stringify(obj)}</p>
      </div>
    </Layout>
  );
}
