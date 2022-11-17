// Dependencias.
import React, { useState, useEffect } from "react";
import { Button, Fab } from "@mui/material";
import { VscGear } from "react-icons/vsc";

//Estilos
import "./CajaModal.scss";

// Definición del componente: <CajaBotones />
export function CajaModal (props) {
  // -- Manejo del estado.
  const { verModal } = props;

  // -- Ciclo de vida.
  useEffect(() => {});
  // -- Metodo.

  // -- Renderizado.
  return (
    <Fab
      color="primary"
      aria-label="add"
      style={{ position: "absolute", top: "88%", left: "93%" }}
      onClick={() => {
        verModal(true);
      }}
    >
      <VscGear size={30} />
    </Fab>
  );
};
