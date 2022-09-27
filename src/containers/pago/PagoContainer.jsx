// Dependencias.
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Importación de componentes.
import PagoPage from "../../pages/pagos/PagosPage.jsx";

// Definición del componente: <PagoContainer />
const PagoContainer = (props) => {
  // -- Manejo del estado.
  const { carroProducts } = props;

  // -- Ciclo de vida.
  // -- Metodos.
  // -- Renderizado.
  return <PagoPage carroProducts={carroProducts} />;
};

// PropTypes.
PagoContainer.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(PagoContainer);
