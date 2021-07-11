export default function SomaUm(props) {
  // props.numero++;
  // não pode pois propriedade é somente leitura;

  return (
    <div>
      <h1>{props.numero + 1}</h1>
    </div>
  );
}
