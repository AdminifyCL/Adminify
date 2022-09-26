// Dependencias.
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUserData } from "../../actions/user/fetchUserData.js";

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
    const { userInfo, productos } = this.props;

    {
      console.log("[] Productos", productos);
    }
    return <CajaPage userInfo={userInfo} productos={productos} />;
  }
}

// PropTypes.
CajaContainer.propTypes = {
  userAuth: PropTypes.object,
  userInfo: PropTypes.object,
};

// Redux
const mapStateToProps = (state) => ({
  userAuth: state.user.userAuth,
  userInfo: state.user.userInfo,
  productos: state.product.allProducts ?? [],
});

const mapDispatchToProps = {
  fetchUserData,
};

// Exportación del contenedor.
export default connect(mapStateToProps, mapDispatchToProps)(CajaContainer);

//? mapStateToProps: Consulta el estado de redux y lo mapea a los props del componente.
