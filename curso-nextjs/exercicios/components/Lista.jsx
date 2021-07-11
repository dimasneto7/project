export default function Lista(props) {
  return (
    <div>
      <h1>Lista de Algo</h1>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          color: "#00ff",
        }}
      >
        {props.children}
      </ul>
    </div>
  );
}
