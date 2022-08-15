// Dependencias.
import React, { Component } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Configuraciones.
import "./DisplayMessage.scss";

// Definición del componente.
class AuthDisplay extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);
    this.state = {};
  }

  // -- Ciclo de vida del componente.
  componentDidMount = async () => {};
  componentDidUpdate = async (prevProps, prevState) => {};
  componentWillUnmount = async () => {};

  // -- Métodos.
  // -- Métodos [REDIRECT].
  // -- Métodos [HANDLER].
  // -- Métodos [MAPPING].

  // Renderizado.
  render() {
    return (
      <section className="displayAuthModal">
        <section className="contentAuthModal">
          {/* Titulos */}
          <div className="authTitle">
            <h1>Necesitas iniciar sesión</h1>
            <h2>Es necesario tener una cuenta para acceder.</h2>
          </div>

          {/* Botones. */}
          <div className="authButtons">
            <Link to="/registro">
              <Button variant="outlined">Registrarse</Button>
            </Link>

            <Link to="/login">
              <Button variant="contained">Iniciar sesión</Button>
            </Link>
          </div>
        </section>
      </section>
    );
  }
}

// Proptypes.
AuthDisplay.propTypes = {};

// Exportación
export default AuthDisplay;
