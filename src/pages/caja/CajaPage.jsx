// Dependencias.
import React, { Component } from "react";
import { Link } from "react-router-dom";
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
  handleUserLogout = async () => {
    const { logout } = this.props;

    await logout();
  };

  // -- Métodos [MAPPING].

  // Renderizado.
  render() {
    const { userInfo } = this.props;

    console.log({ userInfo });
    return (
      <section className="cajaPage_container">
        {/* Navegación de la aplicación. */}
        <section className="cajaPage_navigation">
          <TabNavigation />
        </section>

        <section className="cajaPage_content">Hola</section>
      </section>
    );
  }
}

// PropTypes.
CajaPage.propTypes = {
  logout: PropTypes.func.isRequired,
  userInfo: PropTypes.object,
};

// Exportación de la pagina: Index.
export default CajaPage;
