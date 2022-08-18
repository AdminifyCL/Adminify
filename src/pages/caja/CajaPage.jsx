// Dependencias.
import React, { Component } from "react";
import PropTypes from "prop-types";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";

// Importación de estilos.
import "./CajaPage.scss";

// Definición de la pagina: Index.
class CajaPage extends Component {
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
      <section className="cajaPage_container">
        {/* Navegación de la aplicación. */}
        <section className="cajaPage_navigation">
          <TabNavigation />
        </section>

        {/* Vista de la caja. */}
        <section className="cajaPage_content">
          <h1>Caja</h1>
        </section>
      </section>
    );
  }
}

// PropTypes.
CajaPage.propTypes = {
  userInfo: PropTypes.object,
};

// Exportación de la pagina: Index.
export default CajaPage;
