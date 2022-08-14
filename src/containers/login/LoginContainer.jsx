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
  componentDidUpdate = async (prevProps, prevState) => {
    console.log("[INfO][CONTAINER] componentDidUpdate");
    const { user } = this.props;
    const { user: prevUser } = prevProps;

    const reducerData = await user.then((data) => {
      return data;
    });

    const reducerPrevData = await prevUser.then((data) => {
      return data;
    });

    const { isAuth: prevIsAuth } = reducerPrevData;
    const { isAuth } = reducerData;

    if (prevIsAuth !== isAuth) {
      this.setState({ isAuth });
    }
  };

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
    const { isAuth } = this.state;
    return <LoginPage userLogin={this.handleUserSession} logged={isAuth} />;
  }
}

// PropTypes.
LoginContainer.propTypes = {
  userLogin: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

// Redux
const mapStateToProps = (state) => {
  return {
    user: state.user || {},
  };
};

const mapDispatchToProps = {
  // Actions
  userLogin,
};

// Exportación del contenedor.
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
