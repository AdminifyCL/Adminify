// Dependencias.
import React, { Component } from "react";
import PropTypes from "prop-types";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";

// Importación de estilos.
import "./VentasPage.scss";

// Definición de la pagina: Index.
class VentasPage extends Component {
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
      <section className="ventasPage_container">
        {/* Navegación de la aplicación. */}
        <section className="ventasPage_navigation">
          <TabNavigation />
        </section>

        {/* Vista de la caja. */}
        <section className="ventasPage_content">
          <h1>Ventas</h1>
        </section>
      </section>
    );
  }
}

// PropTypes.
VentasPage.propTypes = {};

// Exportación de la pagina: Index.
export default VentasPage;
