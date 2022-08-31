// Dependencias.
import PropTypes from "prop-types";
import React, { Component } from "react";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";

// Importación de estilos.
import "./CuentaPage.scss";

// Definición de la pagina: Index.
class CuentaPage extends Component {
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
    console.log("[] userData: ", userInfo);

    return (
      <section className="cuentaPage_container">
        {/* Navegación de la aplicación. */}
        <section className="cuentaPage_navigation">
          <TabNavigation />
        </section>

        {/* Vista de la caja. */}
        <section className="cuentaPage_content">
          {/* Titulo. */}
          <div className="cuentaPage_banner">
            <h1>Mi Cuenta</h1>
            <p>
              Sección para editar las <strong>configuraciones</strong> de su cuenta.
            </p>
          </div>
        </section>
      </section>
    );
  }
}

// PropTypes.
CuentaPage.propTypes = {};

// Exportación de la pagina: Index.
export default CuentaPage;
