// Dependencias.
import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { Component } from "react";

// Importación de componentes.
import EstadisticasPage from "../../pages/estadisticas/EstadisticasPage.jsx";

// Definición del contenedor.
class EstadisticasContainer extends Component {
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

  // -- Render
  render() {
    return <EstadisticasPage />;
  }
}

// PropTypes.
EstadisticasContainer.propTypes = {};

// Redux
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

// Exportación del contenedor.
export default connect(mapStateToProps, mapDispatchToProps)(EstadisticasContainer);

//? mapStateToProps: Consulta el estado de redux y lo mapea a los props del componente.
