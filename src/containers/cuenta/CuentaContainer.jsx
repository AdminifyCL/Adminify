// Dependencias.
import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { Component } from "react";
import { fetchUserData } from "../../actions/user/fetchUserData.js";

// Importación de componentes.
import CuentaPage from "../../pages/cuenta/CuentaPage.jsx";

// Definición del contenedor.
class CuentaContainer extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);

    this.state = {};
  }

  // -- Ciclo de vida del componente.
  componentDidMount() {
    const { fetchUserData, userAuth } = this.props;

    // Conseguir la información del usuario.
    const USER_ID = userAuth.uid;
    fetchUserData(USER_ID);
  }
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}

  // -- Métodos.
  // -- Métodos [REDIRECT].
  // -- Métodos [HANDLER].
  // -- Métodos [MAPPING].

  // -- Render
  render() {
    const { userInfo, userAuth } = this.props;
    return <CuentaPage userInfo={userInfo} />;
  }
}

// PropTypes.
CuentaContainer.propTypes = {
  userInfo: PropTypes.object.isRequired,
};

// Redux
const mapStateToProps = (state) => ({
  userAuth: state.user.userAuth ?? {},
  userInfo: state.user.userInfo ?? {},
});

const mapDispatchToProps = {
  fetchUserData,
};

// Exportación del contenedor.
export default connect(mapStateToProps, mapDispatchToProps)(CuentaContainer);

//? mapStateToProps: Consulta el estado de redux y lo mapea a los props del componente.
