// Dependencias.
import React, { Component } from "react";

// Importación de componentes.
import DevNavbar from "!components/DevNavbar/DevNavbar.jsx";

// Importación de contextos.
import { NavbarContext } from "!contexts/navbar.ctx.js";

// Importación de estilos.
import "./style.scss";

// Definición del componente: <DevNavbar />.
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: {} };
  }

  componentDidMount() {
    // Estado inicial.
    this.setState({ page: { pageName: "index", url: "/" } });
  }

  render() {
    return (
      <div>
        <NavbarContext.Provider value={this.state.page}>
          <DevNavbar />
        </NavbarContext.Provider>

        <h1>Hola</h1>
      </div>
    );
  }
}

// Exportación del componente: <DevNavbar />.
export default App;
