// Dependencias.
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userLogin } from "../../actions/actionUser.js";

// Importación de componentes.
import LoginPage from "../../pages/login/LoginPage.jsx";

// Definición del contenedor.
class LoginContainer extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);

    this.state = {
      isAuth: false,
    };
  }

  // -- Ciclo de vida del componente.
  componentDidMount() {}
  componentDidUpdate = async (prevProps, prevState) => {};

  componentWillUnmount() {}

  // -- Métodos.
  // -- Métodos [REDIRECT].
  // -- Métodos [HANDLER].
  handleUserSession = async (userData) => {
    console.log("[#️⃣][INFO][CONTAINER:LOGIN][handleUserSession]");

    // Ejecución del action correspondiente.
    const { userLogin } = this.props;
    await userLogin(userData);
  };

  // -- Métodos [MAPPING].
  // -- Render
  render() {
    return <LoginPage userLogin={this.handleUserSession} />;
  }
}

// PropTypes.
LoginContainer.propTypes = {};

// Redux
const mapStateToProps = (state) => {};

const mapDispatchToProps = {};

// Exportación del contenedor.
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
