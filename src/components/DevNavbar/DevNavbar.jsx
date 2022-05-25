// Dependencias.
import React, { Component } from "react";

// Importación de estilos.
import "./style.scss";

// Importación de contextos.
import { NavbarContext } from "!contexts/navbar.ctx.js";

// Definición del componente: <DevNavbar />.
class DevNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavbarContext.Consumer>{(ctx) => console.log({ ctx })}</NavbarContext.Consumer>
        <h1>Navbar</h1>
      </div>
    );
  }
}

// Exportación del componente: <DevNavbar />.
export default DevNavbar;
