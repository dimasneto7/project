export default function Estilo(props) {
  const estilos = {
    backgroundColor: props.numero >= 0 ? "#2D2" : "#D22",
    color: props.color,
    textAlign: props.direita ? "right" : "left",
  };

  return (
    <div>
      <h1 style={{ estilos }}>Texto qualquer</h1>
    </div>
  );
}
