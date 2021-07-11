import Estilo from "../../components/Estilo";

export default function usandoEstilo() {
  return (
    <div>
      <Estilo numero={3} color="#fff" />;
      <Estilo numero={-3} color="#000" direita />;
    </div>
  );
}
