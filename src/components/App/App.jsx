// Dependencias.
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Importación de componentes.
import Router from "~routes/Router";

// Definición del componente: <App />.
class App extends Component {
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
  // -- Métodos [MAPPING].

  // Renderizado.
  render() {
    return <Router />;
  }
}

// PropTypes.
App.propTypes = {};

// Consulta al store.
const mapStateToProps = (state) => {
  return {};
};

// Exportación del componente: <App />.
export default connect(mapStateToProps, null)(App);
