// Dependencias.
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Importación de componentes.
import CajaPage from "../../pages/caja/CajaPage.jsx";

// Definición del contenedor.
class CajaContainer extends Component {
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
    const { userData } = this.props;
    return <CajaPage userInfo={userData} />;
  }
}

// PropTypes.
CajaContainer.propTypes = {
  userData: PropTypes.object,
};

// Redux
const mapStateToProps = (state) => ({
  userData: state.user.userData,
});

const mapDispatchToProps = {};

// Exportación del contenedor.
export default connect(mapStateToProps, mapDispatchToProps)(CajaContainer);

//? mapStateToProps: Consulta el estado de redux y lo mapea a los props del componente.
