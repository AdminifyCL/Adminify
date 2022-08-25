// Dependencias.
import React, { Component } from "react";
import PropTypes from "prop-types";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";

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
      <section className="empleadosPage_container">
        {/* Navegación de la aplicación. */}
        <section className="empleadosPage_navigation">
          <TabNavigation />
        </section>

        {/* Vista del empleado. */}
        <section className="empleadosPage_content">
          <h1>Empleados</h1>
        </section>
      </section>
    );
  }
}

// PropTypes.
EmpleadosPage.propTypes = {};

// Exportación de la pagina: Index.
export default EmpleadosPage;
