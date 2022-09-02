// Dependencias.
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Importación de componentes.
import EmpleadosPage from "../../pages/empleados/EmpleadosPage.jsx";

// Definición del contenedor.
class EmpleadosContainer extends Component {
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
    const { userInfo } = this.props;
    return <EmpleadosPage userInfo={userInfo} />;
  }
}

// PropTypes.
EmpleadosContainer.propTypes = {};

// Redux
const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = {};

// Exportación del contenedor.
export default connect(mapStateToProps, mapDispatchToProps)(EmpleadosContainer);
