import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      <h1>Famlía {props.familia}</h1>
      <Filho nome="Dimas " familia={props.familia} />
      <Filho nome="Fabiano " familia={props.familia} />
      <Filho {...props} nome="Olivia " />
    </div>
  );
}
