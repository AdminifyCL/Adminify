// Dependencias.
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Importación de componentes.
import RegistroPage from "../../pages/registro/RegistroPage.jsx";

// Definición del contenedor.
class RegistroContainer extends Component {
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
  handleCreateUser = async (data) => {};

  // -- Métodos [MAPPING].
  // -- Render
  render() {
    return <RegistroPage createUser={this.handleCreateUser} />;
  }
}

// PropTypes.
RegistroContainer.propTypes = {};

// Redux.
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

// Exportación del contenedor.
export default connect(mapStateToProps, mapDispatchToProps)(RegistroContainer);
