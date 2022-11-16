// Dependencias.
import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaConciergeBell } from "react-icons/fa";
import { publicURL, privateURL } from "../../schemas/Navigation.js";
import PropTypes from "prop-types";

// Importación de estilos.
import "./LoginPage.scss";

// Definición de la pagina: <LoginPage />
const LoginPage = (props) => {
  // -- Manejo del estado.
  const { loading, login, isAuth } = props;
  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState("");

  const [passValue, setPassValue] = useState("");
  const [passError, setPassError] = useState("");

  // -- Ciclo de vida.
  useEffect(() => {}, []);

  // -- Metodos.
  // -- Renderizado.
  return (
    <section className="loginPage_contenedor">
      <div className="loginPage_contenido">
        {/* TITULO E IMAGEN */}

        <div className="loginPage_icon">
          <FaConciergeBell />
        </div>

        <div className="loginPage_titulo">
          <h1>Adminify</h1>
        </div>

        <div className="loginPage_subtitulo">
          <h2>Inicio de sesión</h2>
        </div>

        {/* Inputs */}
        <div className="loginPage_formulario">
          <TextField
            disabled={loading}
            id="inputCorreo"
            variant="outlined"
            fullWidth={true}
            label="Correo electrónico"
            required={true}
            error={emailError ? true : false}
            helperText={emailError}
            onChange={(event) => handleChanges(event)}
            value={emailValue}
          />
          <TextField
            disabled={loading}
            id="inputContraseña"
            variant="outlined"
            fullWidth={true}
            label="Contraseña"
            type="password"
            required={true}
            error={passError ? true : false}
            helperText={passError}
            onChange={(event) => handleChanges(event)}
            value={passValue}
          />
        </div>

        <div className="loginPage_recuperarContraseña">
          <Button onClick={() => navigate(publicURL.recuperar)} variant="text">
            ¿Haz olvidado tu contraseña? Recupérala aquí
          </Button>
        </div>

        {/* Botones */}
        <div className="loginPage_contendorBotones">
          <Button variant="contained" onClick={() => handleUserLogin()} disabled={loading}>
            Iniciar sesión
          </Button>

          <Button
            variant="outlined"
            onClick={() => navigate(publicURL.registro)}
            disabled={loading}
          >
            Registrarse
          </Button>
        </div>
      </div>
    </section>
  );
};

// PropTypes.
LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

// Exportación de la pagina: Index.
export default LoginPage;
