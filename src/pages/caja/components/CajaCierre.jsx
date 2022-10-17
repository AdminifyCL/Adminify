import React from "react";
import "../CajaPage.scss";
import { Button } from "@mui/material";

// Definición del componente: <CajaBotones />
export function CajaCierre(props) {
  // -- Renderizado.

  const visibilidad = props.open;

  if (visibilidad) {
    return (
      <div className="cajaPage_menu_cierre">
        ¿ Esta seguro de realizar el cierre de caja ?
        <div>
          <Button
            variant="contained"
            onclick={() => {
              //CODIGO DE CIERRE DE CAJA
            }}
          >
            Aceptar
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              props.cerrar();
            }}
          >
            Salir
          </Button>
        </div>
      </div>
    );
  }
}
