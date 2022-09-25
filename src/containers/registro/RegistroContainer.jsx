// Dependencias.
import React, { Component } from "react";
import { connect } from "react-redux";
import { createUserWithEmail } from "../../actions/user/createUser.js";
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
  handleCreateUser = async (data) => {
    const { signUp } = this.props;
    await signUp(data);
  };

  // -- Métodos [MAPPING].
  // -- Render
  render() {
    const { userInfo } = this.props;
    return <RegistroPage createUser={this.handleCreateUser} userInfo={userInfo} />;
  }
}

// PropTypes.
RegistroContainer.propTypes = {};

// Redux.
const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = {
  signUp: createUserWithEmail,
};

// Exportación del contenedor.
export default connect(mapStateToProps, mapDispatchToProps)(RegistroContainer);
