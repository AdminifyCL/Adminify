// Dependencias.
import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserAuth } from "../../actions/actionUser.js";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

// Importación de componentes.
// ...

// Definición del componente: <Auth />.
class Auth extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
    };
  }

  // -- Ciclo de vida del componente.
  componentDidMount = async () => {};

  componentDidUpdate = async (prevProps, prevState) => {};

  componentWillUnmount() {}

  // -- Métodos.
  // -- Métodos [REDIRECT].
  // ...

  // -- Métodos [HANDLER].
  handleUserAthentication = async () => {};

  // -- Métodos [MAPPING].
  // ...

  // Renderizado.
  render() {
    const { children } = this.props;
    return children;
  }
}

// PropTypes.
Auth.propTypes = {};

// Redux.
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

// Exportación del componente: <App />.
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
