// Dependencias.
import React, { Component } from "react";

// Importación de componentes.
import DevNavbar from "!components/DevNavbar/DevNavbar.jsx";

// Importación de contextos.

// Importación de estilos.
import "./style.scss";

// Definición del componente: <DevNavbar />.
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <DevNavbar />

        <h1>Hola</h1>
      </div>
    );
  }
}

// Exportación del componente: <DevNavbar />.
export default App;
