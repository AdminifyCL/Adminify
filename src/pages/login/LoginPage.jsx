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
  const handleUserLogin = async () => {
    if (emailValue.length === 0) {
      setEmailError("El campo no puede estar vacio");
      return;
    } else if (passValue.length === 0) {
      setPassError("El campo no puede estar vacio");
      return;
    }

    // Iniciar sesión con el formulario.
    let formData = {
      email: emailValue,
      password: passValue,
    };

    await login(formData);

    // Limpiar los inputs.
    clearInputs();
  };

  const handleChanges = (event) => {
    let new_value = event.target.value;
    let input_id = event.target.id;

    if (input_id === "inputCorreo") {
      setEmailValue(new_value);
    } else {
      setPassValue(new_value);
    }

    // Limpiar los errores.
    clearErrors();
  };

  const clearErrors = () => {
    setEmailError("");
    setPassError("");
  };

  const clearInputs = () => {
    setEmailValue("");
    setPassValue("");
  };

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

          {/* Redirección */}
          {isAuth ? navigate(privateURL.cargando) : null}
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
