// Dependencias.
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/user/signOutUser.js";

// Importación de componentes.
import CajaPage from "../../pages/caja/CajaPage.jsx";

// Definición del contenedor.
class CajaContainer extends Component {
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
  handleUserLogout = async () => {
    const { logout } = this.props;

    await logout();
  };

  // -- Métodos [MAPPING].
  // -- Render
  render() {
    const { userData } = this.props;

    return <CajaPage userInfo={userData} logout={this.handleUserLogout} />;
  }
}

// PropTypes.
CajaContainer.propTypes = {
  logout: PropTypes.func.isRequired,
  userData: PropTypes.object,
};

// Redux
const mapStateToProps = (state) => ({
  userData: state.user.userData,
});

const mapDispatchToProps = {
  logout: logoutUser,
};

// Exportación del contenedor.
export default connect(mapStateToProps, mapDispatchToProps)(CajaContainer);

//? mapStateToProps: Consulta el estado de redux y lo mapea a los props del componente.
