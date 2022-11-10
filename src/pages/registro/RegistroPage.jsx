// Dependencias.
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { FaConciergeBell } from "react-icons/fa";
import { publicURL, privateURL } from "../../schemas/Navigation.js";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Formulario from "./components/Formulario/Formulario";
import PropTypes from "prop-types";

// Estilos.
import "./RegistroPage.scss";

// Definición del componente: <RegistroPage />
const RegistroPage = (props) => {
  // 1. Manejo del estado.
  const {} = props;
  const navigate = useNavigate();

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const handleRedirect = () => {
    navigate(publicURL.login);
  };

  // 4. Render.
  return (
    <section className="RegistroPage_container">
      {/* Formulario */}
      <div className="RegistroPage_formContainer">
        {/* Buttons */}
        <div className="RegistroPage_buttonContainer">
          <Button variant="outlined" color="secondary" onClick={() => handleRedirect()}>
            Volver
          </Button>
        </div>

        {/* Banner */}
        <div className="RegistroPage_bannerContainer">
          <h1>Adminify</h1>
          <p>Formulario de registro. Favor de llenar el formulario para acceder a la aplicación.</p>
        </div>

        {/* Formulario */}
        <div className="RegistroPage_inputContainer">
          <Formulario />
        </div>
      </div>

      {/* Splash art */}
      <div className="RegistroPage_splashContainer">Splash art</div>
    </section>
  );
};

// PropTypes.
RegistroPage.propTypes = {};

// Exportación.
export default RegistroPage;
