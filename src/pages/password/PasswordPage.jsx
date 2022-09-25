// Dependencias.
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Input } from "@mui/material";
import PropTypes from "prop-types";

// Importación de estilos.
import "./PasswordPage.scss";

// Definición de la pagina: Index.
const PasswordPage = ({}) => {
  // -- Manejo del estado.
  // -- Ciclo de vida.
  // -- Metodos.
  // -- Renderizado.
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
};

// PropTypes.
PasswordPage.propTypes = {};

// Exportación de la pagina: Recuperar contraseña.
export default PasswordPage;
