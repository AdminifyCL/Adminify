// Dependencias.
import React, { Component } from "react";
import PropTypes from "prop-types";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";

// Importación de estilos.
import "./InventarioPage.scss";

// Definición de la pagina: Index.
class InventarioPage extends Component {
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
      <section className="inventarioPage_container">
        {/* Navegación de la aplicación. */}
        <section className="inventarioPage_navigation">
          <TabNavigation />
        </section>

        {/* Vista de la caja. */}
        <section className="inventarioPage_content">
          <h1>Inventario</h1>
        </section>
      </section>
    );
  }
}

// PropTypes.
InventarioPage.propTypes = {};

// Exportación de la pagina: Index.
export default InventarioPage;
