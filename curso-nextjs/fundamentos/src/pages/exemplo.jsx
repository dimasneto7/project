import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";
// props é somente leitura

export default function Exemplo() {
  return (
    <Layout titulo="Usando Componentes">
      <Cabecalho titulo="Next 1" />
      <Cabecalho titulo="Next 2" />
    </Layout>
  );
}
