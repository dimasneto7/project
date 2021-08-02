import React from "react";
import ReactDOM from "react-dom";

import Saudacao from "./componentes/Saudacao";

ReactDOM.render(
  <>
    <Saudacao tipo="Bom dia" nome="João" />
  </>,
  document.getElementById("root")
);
