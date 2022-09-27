// Dependencias.
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Importación de componentes.
import ConfirmacionPage from "../../pages/confirmacion/ConfirmacionPage";

// Definición del componente: <ConfirmacionPage />
const ConfirmacionContainer = (props) => {
  // -- Manejo del estado.
  const { carroProducts } = props;

  // -- Ciclo de vida.
  // -- Metodos.
  // -- Renderizado.
  return <ConfirmacionPage carroProducts={carroProducts} />;
};

// PropTypes.
ConfirmacionContainer.propTypes = {
  carroProducts: PropTypes.array.isRequired,
};

// Redux
const mapStateToProps = (state) => {
  return {
    carroProducts: state.product.carroProducts ?? [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

// Exportación.
export default connect(mapStateToProps, mapDispatchToProps)(ConfirmacionContainer);
