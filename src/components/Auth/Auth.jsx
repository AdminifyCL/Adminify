// Dependencias.
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { authStateChanged } from "../../actions/user/stateChanged.js";
import PropTypes from "prop-types";

// Importación de componentes.
import Display from "./DisplayMessage.jsx";

// Definición del componente: <Auth />.
class Auth extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);
    this.state = {};
  }

  // -- Ciclo de vida del componente.
  componentDidMount = async () => {};

  componentDidUpdate = async (prevProps, prevState) => {};

  componentWillUnmount = async () => {
    const { onAuth } = this.props;
    await onAuth();
  };

  // -- Métodos.
  // -- Métodos [REDIRECT].
  // ...

  // -- Métodos [HANDLER].
  handleUserAthentication = async () => {};

  // -- Métodos [MAPPING].
  // ...

  // Renderizado.
  render() {
    const { children, userAuth } = this.props;
    const { isAuthenticated } = userAuth;

    // Caso 1: El usuario esta autenticado.
    if (isAuthenticated) {
      return children;
    }

    // Caso 2: El usuario no esta autenticado.
    return <Display />;
  }
}

// PropTypes.
Auth.propTypes = {
  onAuth: PropTypes.func.isRequired,
  userAuth: PropTypes.object.isRequired,
};

// Redux.
const mapStateToProps = (state) => ({
  userAuth: state.user.userAuth,
});

const mapDispatchToProps = {
  onAuth: authStateChanged,
};

// Exportación del componente: <App />.
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
