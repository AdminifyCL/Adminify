// Dependencias.
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUserWithEmail } from "../../actions/user/loginWithEmail.js";

// Importación de componentes.
import LoginPage from "../../pages/login/LoginPage.jsx";

// Definición del contenedor.
class LoginContainer extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);

    this.state = {
      isAuth: false,
      loading: false,
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
    const { loginWithEmail } = this.props;

    // Ejecución del action correspondiente.
    this.setState({ loading: true });
    await loginWithEmail(userData).then(() => {
      this.setState({ loading: false });
    });
  };

  // -- Métodos [MAPPING].
  // -- Render
  render() {
    const { loading } = this.state;
    const { userData, userError } = this.props;
    return (
      <LoginPage
        userLogin={this.handleUserSession}
        userInfo={userData}
        userError={userError}
        loading={loading}
      />
    );
  }
}

// PropTypes.
LoginContainer.propTypes = {
  loginWithEmail: PropTypes.func.isRequired,
  userData: PropTypes.object,
};

// Redux
const mapStateToProps = (state) => ({
  userData: state.user.userData ?? {},
  userError: state.user.userError ?? {},
});

const mapDispatchToProps = {
  loginWithEmail: loginUserWithEmail,
};

// Exportación del contenedor.
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
