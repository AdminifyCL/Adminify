// Dependencias.
import React, { Component } from "react";
import PropTypes from "prop-types";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";

// Importación de estilos.
import "./EstadisticasPage.scss";

// Definición de la pagina: Index.
class EstadisticasPage extends Component {
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
    const { userInfo } = this.props;

    console.log({ userInfo });
    return (
      <section className="estadisticasPage_container">
        {/* Navegación de la aplicación. */}
        <section className="estadisticasPage_navigation">
          <TabNavigation />
        </section>

        {/* Vista de la caja. */}
        <section className="estadisticasPage_content">
          <h1>Estadisticas</h1>
        </section>
      </section>
    );
  }
}

// PropTypes.
EstadisticasPage.propTypes = {};

// Exportación de la pagina: Index.
export default EstadisticasPage;
