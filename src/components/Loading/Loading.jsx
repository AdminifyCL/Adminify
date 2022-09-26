// Dependencias.
import React from "react";
import { CircularProgress } from "@mui/material";

// Estilos.
import "./Loading.scss";

// Definición del componente: <Loading />
const Loading = (props) => {
  return (
    <div className="LoadingContainer">
      <CircularProgress />
      <h1>Cargando señores...</h1>
    </div>
  );
};

// Exportación
export default Loading;
