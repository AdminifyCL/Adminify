// Dependencias.
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Input } from "@mui/material";
import { publicURL, privateURL } from "../../schemas/Navigation.js";
import PropTypes from "prop-types";

// Estilos.
import "./ContraseñaPage.scss";

// Definición del componente: <ContraseñaPage />
const ContraseñaPage = (props) => {
  // 1. Manejo del estado.
  const {} = props;
  const navigate = useNavigate();

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
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
          <Button variant="outlined" onClick={() => navigate(publicURL.login)}>
            Volver
          </Button>

          <Button variant="contained">Enviar</Button>
        </div>
      </div>
    </section>
  );
};

// PropTypes.
ContraseñaPage.propTypes = {};

// Exportación.
export default ContraseñaPage;
