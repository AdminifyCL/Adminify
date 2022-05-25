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

  // Cargando el contexto.
  static contextType = NavbarContext;

  // Ciclos de vida del componente.
  componentDidMount() {
    console.log("[componentDidMount][DevNavbar]");
    console.log("ctx: ", this.context);
  }

  componentDidUpdate(prevProps) {
    console.log("[componentDidUpdate][DevNavbar]");
    console.log("ctx: ", this.context);
  }

  // Renderizado.
  render() {
    return (
      <div>
        <h1>Navbar page</h1>
      </div>
    );
  }
}

// Exportación del componente: <DevNavbar />.
export default DevNavbar;
