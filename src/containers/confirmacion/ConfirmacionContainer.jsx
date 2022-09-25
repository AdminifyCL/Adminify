// Dependencias.
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Importación de componentes.
import ConfirmacionPage from "../../pages/confirmacion/ConfirmacionPage";

// Definición del componente: <ConfirmacionPage />
const ConfirmacionContainer = ({}) => {
  // -- Manejo del estado.
  // -- Ciclo de vida.
  // -- Metodos.
  // -- Renderizado.
  return <ConfirmacionPage />;
};

// PropTypes.
ConfirmacionContainer.propTypes = {};

// Redux
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

// Exportación.
export default connect(mapStateToProps, mapDispatchToProps)(ConfirmacionContainer);
