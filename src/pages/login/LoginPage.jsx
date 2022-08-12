// Dependencias.
import React, { Component } from "react";
import { Text } from "../../components/Text/Text.jsx";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

// Importación de estilos.
import { styleButton } from "./styles/button.jsx";
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
          <h1 id="identificador" className="clase">
            Login - Page
          </h1>
          <Button variant="contained" style={styleButton.container}>
            <p style={styleButton.text}>Hola</p>
          </Button>
        </div>
      </section>
    );
  }
}

// PropTypes.
LoginPage.propTypes = {};

// Exportación de la pagina: Index.
export default LoginPage;
