// Dependencias.
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Input, FormControl, useFormControl } from "@mui/material";
import { publicURL, privateURL } from "../../schemas/Navigation.js";
import PropTypes from "prop-types";

// Estilos.
import "./ContraseñaPage.scss";

// Definición del componente: <ContraseñaPage />
const ContraseñaPage = (props) => {
  // 1. Manejo del estado.
  const { handleRecoveryAccount, response, setResponse } = props;
  const navigate = useNavigate();
  const inputEmail = useRef(null);
  const [email, setEmail] = useState("");

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const handleClear = () => {
    setEmail("");
    setResponse("");
  };

  const handleChange = (value) => {
    setEmail(value);
    setResponse("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // API.
    handleRecoveryAccount(email);

    // Limpiar el input.
    handleClear();
  };

  const handleRedirect = () => {
    navigate(publicURL.login);
  };

  // 4. Render.
  return (
    <section className="PasswordPage_container">
      <div className="PasswordPage_content">
        {/* Contenido. */}
        <div className="">
          <h1>Recuperar contraseña</h1>
          <p>Ingresa tu correo para recuperar tu contraseña</p>
        </div>

        <form onSubmit={(event) => handleSubmit(event)} className="PasswordPage_formContainer">
          <div className="PasswordPage_inputContainer">
            <TextField
              id="email"
              label="Correo electrónico"
              variant="outlined"
              value={email}
              onChange={(event) => handleChange(event.target.value)}
              type="email"
              required
              fullWidth
              ref={inputEmail}
              helperText={response}
            />
          </div>

          <div className="PasswordPage_buttonContainer">
            <Button type="button" variant="outlined" onClick={() => handleRedirect()}>
              Volver
            </Button>

            <Button type="submit" variant="contained">
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

// PropTypes.
ContraseñaPage.propTypes = {};

// Exportación.
export default ContraseñaPage;
