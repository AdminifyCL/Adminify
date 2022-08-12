// Dependencias.
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createUser } from "~actions/actionUser.js";

// Importación de componentes.
import IndexPage from "~pages/index/IndexPage.jsx";

// Definición del contenedor.
class IndexContainer extends Component {
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
  handleCreateUser = async () => {
    const { createUser } = this.props;
    createUser({ email: "jajo", password: "asd123" });
  };

  // -- Métodos [MAPPING].
  // -- Render
  render() {
    return <IndexPage createUser={this.handleCreateUser} />;
  }
}

// PropTypes.
IndexContainer.propTypes = {};

// Redux
const mapStateToProps = (state) => {
  //? Desde aquí se llaman a los parametros que necesitemos desde el store.
  return {};
};

const mapDispatchToProps = (dispatch) => {
  //? Desde aquí se llaman a los métodos que necesitemos desde el store.
  return {
    createUser: (user) => dispatch(createUser(user)),
  };
};

// Exportación del contenedor.
export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);

//? mapStateToProps: Consulta el estado de redux y lo mapea a los props del componente.
