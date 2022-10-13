// Dependencias.
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { publicURL, privateURL } from "../../schemas/Navigation.js";
import { LinearProgress } from "@mui/material";
import PropTypes from "prop-types";

// Estilos.
import "./CargaPage.scss";

// Definición del componente: <CargaPage />
const CargaPage = (props) => {
  // 1. Manejo del estado.
  const { message, percent } = props;
  const navigate = useNavigate();

  // 2. Ciclo de vida.
  useEffect(() => {
    if (percent === 100) {
      navigate(privateURL.caja);
    }
  }, [percent]);

  // 3. Metodos.
  // 4. Render.
  return (
    <div className="LoadingPage-container">
      <h1 className="LoadingPage-title">Adminify</h1>

      {/* Barra de carga */}
      <div className="LoadingPage-loadContainer">
        <LinearProgress value={percent} variant="determinate" />
        <p className="LoadingPage-subTitle">{message}</p>
      </div>

      {/* TODO: Se podrian incluir consejos aquí. */}
    </div>
  );
};

// PropTypes.
CargaPage.propTypes = {};

// Exportación.
export default CargaPage;
