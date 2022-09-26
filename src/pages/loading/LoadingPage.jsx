// Dependencias.
import React, { useState, useEffect } from "react";
import { LinearProgress } from "@mui/material";
import { FaTruck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Estilos.
import "./LoadingPage.scss";

// Definición del componente: <LoadingPage />
const LoadingPage = (props) => {
  // -- Manejo del estado.
  const { message, percent } = props;
  const navigate = useNavigate();

  // -- Ciclo de vida.
  useEffect(() => {
    console.log("[] Percent: ", percent);
    if (percent === 100) {
      navigate("/caja");
    }
  }, [percent]);

  // -- Metodos.

  // -- Renderizado.
  return (
    <div className="LoadingPage-container">
      <FaTruck size={60} className="LoadingPage-icon" />
      <h1 className="LoadingPage-title">Pay Admin Box</h1>

      {/* Barra de carga */}
      <div className="LoadingPage-loadContainer">
        <LinearProgress value={percent} variant="determinate" />
        <p className="LoadingPage-subTitle">{message}</p>
      </div>

      {/* Se podrian incluir consejos aquí. */}
    </div>
  );
};

// Exportación.
export default LoadingPage;
