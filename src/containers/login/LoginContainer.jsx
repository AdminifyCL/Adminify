// Dependencias.
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUserWithEmail } from "../../actions/actionUser.js";

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
    const { loginWithEmail } = this.props;

    // Ejecución del action correspondiente.
    await loginWithEmail(userData);
  };

  // -- Métodos [MAPPING].
  // -- Render
  render() {
    const { userData } = this.props;
    return <LoginPage userLogin={this.handleUserSession} userInfo={userData} />;
  }
}

// PropTypes.
LoginContainer.propTypes = {
  loginWithEmail: PropTypes.func.isRequired,
};

// Redux
const mapStateToProps = (state) => ({
  userData: state.user.userData,
});

const mapDispatchToProps = {
  loginWithEmail: loginUserWithEmail,
};

// Exportación del contenedor.
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
