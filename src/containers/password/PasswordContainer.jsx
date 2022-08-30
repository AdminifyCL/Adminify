// Dependencias.
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Importación de componentes.
import PasswordPage from "../../pages/password/PasswordPage.jsx";

// Definición del contenedor.
class PasswordContainer extends Component {
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
    return <PasswordPage />;
  }
}

// PropTypes.
PasswordContainer.propTypes = {};

// Redux
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

// Exportación del contenedor.
export default connect(mapStateToProps, mapDispatchToProps)(PasswordContainer);
