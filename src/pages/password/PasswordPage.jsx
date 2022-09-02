// Dependencias.
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Input } from "@mui/material";
import PropTypes from "prop-types";

// Importación de estilos.
import "./PasswordPage.scss";

// Definición de la pagina: Index.
class PasswordPage extends Component {
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
      <section className="PasswordPage_container">
        <div className="PasswordPage_content">
          {/* Contenido. */}
          <div>
            <h1>Recuperar contraseña</h1>
            <p>Ingresa tu correo para recuperar tu contraseña</p>
          </div>

          <TextField fullWidth={true} placeholder="Correo" variant="filled" label="Correo" />

          <div className="PasswordPage_buttonContainer">
            <Link to="/login">
              <Button variant="outlined">Volver</Button>
            </Link>

            <Button variant="contained">Enviar</Button>
          </div>
        </div>
      </section>
    );
  }
}

// PropTypes.
PasswordPage.propTypes = {};

// Exportación de la pagina: Recuperar contraseña.
export default PasswordPage;
