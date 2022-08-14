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
    this.state = {};
  }

  // -- Ciclo de vida del componente.
  componentDidMount = async () => {
    const { getUserAuth, isAuth } = this.props;

    await getUserAuth();

    console.log("[] IS AUTH:");
    console.log(isAuth);
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { getUserAuth, isAuth } = this.props;

    await getUserAuth();

    console.log("[] IS AUTH:");
    console.log(isAuth);
  };

  componentWillUnmount() {}

  // -- Métodos.
  // -- Métodos [REDIRECT].
  // -- Métodos [HANDLER].

  // -- Métodos [MAPPING].

  // Renderizado.
  render() {
    const { children } = this.props;

    if (!isAuth) {
      return (
        <div>
          <h1>Debes iniciar sesión antes de ver esta vista.</h1>

          <Link to="/login">
            <Button variant="contained">Iniciar sesión</Button>
          </Link>
        </div>
      );
    }

    return children;
  }
}

// PropTypes.
Auth.propTypes = {
  user: PropTypes.object.isRequired,
};

// Redux.
const mapStateToProps = (state) => {
  return {
    user: state.user || {},
  };
};

const mapDispatchToProps = {
  getUserAuth,
};

// Exportación del componente: <App />.
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
