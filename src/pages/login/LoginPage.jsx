// Dependencias.
import React, { Component } from "react";
import PropTypes from "prop-types";

// Importación de estilos.
import "./LoginPage.scss";

// Definición de la pagina: Index.
class LoginPage extends Component {
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
    return (
      <section className="">
        <div className="">
          <h1>Login - Page</h1>
        </div>
      </section>
    );
  }
}

// PropTypes.
LoginPage.propTypes = {};

// Exportación de la pagina: Index.
export default LoginPage;
