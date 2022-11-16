// Dependencias.
import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario/Formulario.jsx";
import { useNavigate } from "react-router-dom";
import { publicURL, privateURL } from "../../schemas/Navigation.js";
import PropTypes from "prop-types";

// Importación de estilos.
import "./LoginPage.scss";
import imageSrc from "../../assets/images/logo250x250.png";

// Definición de la pagina: <LoginPage />
const LoginPage = (props) => {
  // 1. Manejo del estado.
  const { loading, login, isAuth } = props;
  const navigate = useNavigate();

  // 3. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Renderizado.
  const redirectToRegister = () => {
    navigate(publicURL.registro);
  };

  const redirectToForgot = () => {
    navigate(publicURL.recuperar);
  };

  const redirectToCarga = () => {
    navigate(privateURL.cargando);
  };

  return (
    <section className="LoginPage_container">
      {/* Formulario. */}
      <div className="LoginPage_formContainer">
        {/* Banner */}
        <div className="LoginPage_bannerContainer">
          <div className="LoginPage_bannerTitleContainer">
            <img src={imageSrc} className="LoginPage_bannerIcon" />
            <h1 className="LoginPage_bannerTitle">Adminify</h1>
          </div>

          <h2 className="LoginPage_bannerSubTile">Inicio de sesión</h2>
        </div>

        {/* Formulario */}
        <div className="LoginPage_formularioContainer">
          <Formulario
            toRegister={redirectToRegister}
            toForgot={redirectToForgot}
            toCarga={redirectToCarga}
            login={login}
            loading={loading}
          />
        </div>
      </div>

      {/* Splash Art. */}
      <div className="LoginPage_splashContainer"></div>
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
