// Dependencias.
import React from "react";
import { CircularProgress } from "@mui/material";

// Estilos.
import "./Cargando.scss";

// Definición del componente: <Cargando />.
const Cargando = ({}) => {
  return (
    <div className="Cargando_container">
      <CircularProgress />
    </div>
  );
};

// Exportación.
export default Cargando;
