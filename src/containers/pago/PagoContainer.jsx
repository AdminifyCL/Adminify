// Dependencias.
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Importación de componentes.
import PagoPage from "../../pages/pagos/PagosPage.jsx";

// Definición del componente: <PagoContainer />
const PagoContainer = ({}) => {
  // -- Manejo del estado.
  // -- Ciclo de vida.
  // -- Metodos.
  // -- Renderizado.
  return <PagoPage />;
};

// PropTypes.
PagoContainer.propTypes = {};

// Redux
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

// Exportación.
export default connect(mapStateToProps, mapDispatchToProps)(PagoContainer);
