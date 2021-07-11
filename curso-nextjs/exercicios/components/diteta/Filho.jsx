export default function Filho(props) {
  return (
    <div style={{ display: "flex" }}>
      <h2>{props.nome}</h2>
      <h2>{props.familia}</h2>
    </div>
  );
}
