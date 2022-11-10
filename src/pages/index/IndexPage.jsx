// Dependencias.
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { publicURL, privateURL } from "../../schemas/Navigation.js";
import Logo from "../../assets/images/logo250x250.png";
import PropTypes from "prop-types";

// Estilos.
import Styles from "./styles/Screen.jsx";
import "./IndexPage.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

// Definición de la pagina.
const IndexPage = (props) => {
  // 1. Manejo de estados.
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
    <section className="indexPage_contenedor">
      <div className="indexPage_contenido">
        {/* Header */}
        <div className="indexPage_header">
          <div className="indexPage_headerBanner">
            <LazyLoadImage
              src={Logo}
              width={50}
              height={50}
              alt="Adminify"
              effect="blur"
              style={Styles.icon}
            />
            <h1>Adminify</h1>
          </div>

          {/* Boton */}
          <Button variant="contained" onClick={() => handleRedirect()}>
            Entrar
          </Button>
        </div>

        {/* Noticias */}
        <div className="indexPage_newsContainer">
          <h1></h1>
        </div>
      </div>
    </section>
  );
};

// PropTypes.
IndexPage.propTypes = {};

// Exportación.
export default IndexPage;
