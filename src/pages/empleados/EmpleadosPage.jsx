// Dependencias.
import React, { Component } from "react";
import PropTypes from "prop-types";

// Importación de estilos.
import "./EmpleadosPage.scss";

// Definición de la pagina: Index.
class EmpleadosPage extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);

    this.state = {};
  }

  // -- Ciclo de vida del componente.
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}

  // -- Métodos.
  // -- Métodos [REDIRECT].
  // -- Métodos [HANDLER].
  // -- Métodos [MAPPING].

  // Renderizado.
  render() {
    return (
      <section className="">
        <div className="">
          <h1>Empleados - Page</h1>
        </div>
      </section>
    );
  }
}

// PropTypes.
EmpleadosPage.propTypes = {};

// Exportación de la pagina: Index.
export default EmpleadosPage;
